<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Aula extends Model
{
    public $timestamps = false;
    protected $fillable = ['materia_id', 'professor_id', 'preco', 'inicio', 'fim', 'dia'];

    public function professor()
    {
        return $this->belongsTo(Professor::class);
    }

    public function materia()
    {
        return $this->belongsTo(Materia::class);
    }
}
