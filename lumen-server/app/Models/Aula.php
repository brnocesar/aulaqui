<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Aula extends Model
{
    public    $timestamps = false;
    protected $fillable   = ['materia_id', 'professor_id', 'preco', 'inicio', 'fim', 'dia'];
    protected $perPage    = 10;
    protected $appends    = ['links'];


    public function professor()
    {
        return $this->belongsTo(Professor::class);
    }

    public function materia()
    {
        return $this->belongsTo(Materia::class);
    }


    public function getLinksAttribute(): array
    {
        return [
            "self"      => "/api/aulas/{$this->id}",
            "materia"   => "/api/materias/{$this->materia_id}",
            "professor" => "/api/professores/{$this->professor_id}"
        ];
    }
}
