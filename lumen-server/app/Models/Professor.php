<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Professor extends Model
{
    public    $timestamps = false;
    protected $table      = 'professores';
    protected $fillable   = ['nome', 'avatar', 'whatsapp', 'short_bio', 'full_bio'];
    protected $perPage    = 3;
    protected $appends    = ['links'];


    public function getLinksAttribute(): array
    {
        return [
            "self"     => "/api/professores/{$this->id}",
            "aulas"    => "/api/professores/{$this->id}/aulas",
            "materias" => "/api/professores/{$this->id}/materias"
        ];
    }


    public function materias()
    {
        return $this->belongsToMany(Materia::class);
    }

    public function aulas()
    {
        return $this->hasMany(Aula::class);
    }
}
