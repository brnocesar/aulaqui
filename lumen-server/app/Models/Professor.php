<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Professor extends Model
{
    public $timestamps = false;
    protected $table = 'professores';
    protected $fillable = ['nome', 'avatar', 'whatsapp', 'short_bio', 'full_bio'];
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

    public function materias()
    {
        return $this->belongsToMany(Materia::class);
    }

    public function aulas()
    {
        return $this->hasMany(Aula::class);
    }
}
