<?php

namespace App\Http\Controllers;

use App\Models\Materia;
use App\Models\Professor;
use Illuminate\Http\Request;

class ProfessorController extends Controller
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
        $professores = Professor::where('id', '>', 0)->orderBy('nome', 'asc');

        if ($request->has('pag')) {
            $perPage = is_numeric($request->per_pag) ? $request->per_pag : '';
            return $professores->orderBy('nome', 'asc')->paginate( $perPage );
        }

        return $professores->get();
    }

    public function store(Request $request)
    {
        $professor = Professor::create($request->all());

        if ( is_null($professor) ) {
            return response()->json(['erro' => 'Professor não cadastrado'], 400);
        }

        $professor->materias()->sync($request->materias_id);

        return response()->json($professor, 200);
    }

    public function show(int $id)
    {
        $professor = Professor::find($id);

        return response()->json(
            $professor,
            is_null($professor) ? 404 : 200
        );
    }

    public function update(int $id, Request $request)
    {
        $professor = Professor::find($id);

        if ( is_null($professor) ) {
            return response()->json(['erro' => 'recurso não encontrado'], 404);
        }

        $professor->materias()->sync($request->materias_id);
        $professor->update($request->all());

        return response()->json($professor , 200);
    }

    public function destroy(int $id)
    {
        $professor = Professor::find($id);

        if ( is_null($professor) ) {
            return response()->json(['erro' => 'Professor não encontrado'], 404);
        }

        $professor->materias()->detach();
        $professor->delete();

        return response()->json([], 204);
    }

    public function indexByMateria(int $materia_id)
    {
        $materia = Materia::find($materia_id);

        return is_null($materia) ? [] : $materia->professores;
    }
}
