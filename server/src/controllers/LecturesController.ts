import { Request, Response } from 'express';
import db from '../database/connections';
import convertHourToMinutes from '../utils/convertHourToMinutes';


interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
};

export default class LecturesController {
    
    async index(request: Request, response: Response) {
        const filters = request.query;

        const week_day = filters.week_day as string;
        const subject  = filters.subject as string;
        const time     = filters.time as string;

        if ( !filters.week_day || !filters.subject || !filters.time ) {
            return response.status(400).json({
                erro: 'nao tem filtros'
            });
        }

        const timeInMinutes = convertHourToMinutes(time);

        const lectures = await db('lectures')
            .whereExists(function() {
                this.select('lecture_schedule.*')
                .from('lecture_schedule')
                .whereRaw('`lecture_schedule`.`lecture_id` = `lectures`.`id`')
                .whereRaw('`lecture_schedule`.`week_day` = ??', [Number(week_day)])
                .whereRaw('`lecture_schedule`.`from` <= ??', [timeInMinutes])
                .whereRaw('`lecture_schedule`.`to` > ??', [timeInMinutes])
            })
            .where('lectures.subject', '=', subject)
            .join('users', 'lectures.user_id', '=', 'users.id')
            .select(['lectures.*', 'users.*']);

        return response.status(200).json(lectures);
    }


    async store(request: Request, response: Response) {
        const {
            name,
            avatar,
            whatsapp,
            short_bio,
            full_bio,
            subject,
            cost,
            schedule
        } = request.body;
    
        const trx = await db.transaction();
    
        try {
            const insertedUsersIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                short_bio,
                full_bio,
            });
            
            const insertedLecturesIds = await trx('lectures').insert({
                subject,
                cost,
                user_id: insertedUsersIds[0],
            });
        
            const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                return {
                    lecture_id: insertedLecturesIds[0],
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to),
                };
            });
        
            await trx('lecture_schedule').insert(classSchedule);
            
            await trx.commit();
    
            return response.status(201).send();
    
        } catch (err) {
    
            await trx.rollback();
    
            return response.status(400).json({
                erro: 'deu ruim ai'
            });
        }
    }
}