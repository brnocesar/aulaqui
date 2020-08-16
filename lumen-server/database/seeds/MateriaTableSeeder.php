<?php

use App\Models\Materia;
use Illuminate\Database\Seeder;

class MateriaTableSeeder extends Seeder
{
    static $materias = [
        "Física",
        "Matemática",
        "Robótica",
        "Programação",
        "Química",
        "Filosofia",
        "Artes",
        "Português",
        "Literatura",
        "História",
        "Geografia",
        "Sociologia",
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (self::$materias as $materia) {
            Materia::insert([
                'nome' => $materia
            ]);
        }
    }
}
