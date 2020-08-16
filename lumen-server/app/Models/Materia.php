<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Materia extends Model
{
    public $timestamps = false;
    // protected $table = 'materias';
    protected $fillable = ['nome'];
    // protected $perPage = 3;
    // protected $appends = ['links'];

    // public function setNomeAttribute($nome): void
    // {
    //     $this->attributes['nome'] = $nome . ' ;)';
    // }

    // public function getLinksAttribute(): array
    // {
    //     return [
    //         "self" => "/api/series/{$this->id}",
    //         "episodios" => "/api/series/{$this->id}/episodios"
    //     ];
    // }

    public function professores()
    {
        return $this->belongsToMany(Professor::class);
    }

    public function aulas()
    {
        return $this->hasMany(Aula::class);
    }
}
