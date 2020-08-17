<?php

namespace App\Http\Controllers;

use App\Models\Aula;
use App\Models\Materia;
use App\Models\Professor;
use Illuminate\Http\Request;

class MateriaController extends Controller
{
    public function __construct()
    {
        //
    }

    public function index(Request $request)
    {
        return response()->json($this->search($request), 200);
    }

    private function search(Request $request)
    {
        $materias = Materia::where('id', '>', 0)->orderBy('nome', 'asc');

        if ($request->has('pag')) {
            $perPage = is_numeric($request->per_pag) ? $request->per_pag : '';
            return $materias->orderBy('nome', 'asc')->paginate( $perPage );
        }

        return $materias->get();
    }

    public function store(Request $request)
    {
        return response()->json(
            Materia::create($request->all()),
            200
        );
    }

    public function show(int $id)
    {
        $recurso = Materia::find($id);

        return response()->json(
            $recurso,
            is_null($recurso) ? 404 : 200
        );
    }

    public function update(int $id, Request $request)
    {
        $recurso = Materia::find($id);

        if ( is_null($recurso) ) {
            return response()->json(['erro' => 'recurso não encontrado'], 404);
        }

        $recurso->update($request->all());
        return response()->json($recurso , 200);
    }

    public function destroy(int $id)
    {
        $materia = Materia::find($id);

        if ( is_null($materia) ) {
            return response()->json(['erro' => 'Materia não encontrado'], 404);
        }

        $materia->professores()->detach();
        $materia->delete();

        return response()->json([], 204);
    }

    public function indexByProfessor(int $professor_id)
    {
        $professor = Professor::find($professor_id);

        return is_null($professor) ? [] : $professor->materias;
    }
}
