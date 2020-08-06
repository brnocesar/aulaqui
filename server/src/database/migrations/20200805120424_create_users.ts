import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('short_bio').notNullable();
        table.string('full_bio').notNullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("users");
}

