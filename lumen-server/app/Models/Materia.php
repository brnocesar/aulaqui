<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Materia extends Model
{
    public    $timestamps = false;
    protected $fillable   = ['nome'];
    protected $perPage    = 10;
    protected $appends    = ['links'];


    public function getLinksAttribute(): array
    {
        return [
            "self"        => "/api/materias/{$this->id}",
            "aulas"       => "/api/materias/{$this->id}/aulas",
            "professores" => "/api/materias/{$this->id}/professores"
        ];
    }


    public function professores()
    {
        return $this->belongsToMany(Professor::class);
    }

    public function aulas()
    {
        return $this->hasMany(Aula::class);
    }
}
