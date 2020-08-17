<?php

namespace App\Http\Controllers;

use App\Models\Aula;
use App\Models\Materia;
use App\Models\Professor;
use Illuminate\Http\Request;

class AulaController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
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
        $aulas = Aula::where('id', '>', 0)->orderBy('dia', 'asc')->orderBy('inicio', 'asc');

        if ($request->has('pag')) {
            $perPage = is_numeric($request->per_pag) ? $request->per_pag : '';
            return $aulas->orderBy('nome', 'asc')->paginate( $perPage );
        }

        return $aulas->get();
    }

    public function store(Request $request)
    {
        // so pode associar com materias do professor
        $aula = Aula::create($request->all());

        if ( is_null($aula) ) {
            return response()->json(['erro' => 'Aula não cadastrado'], 400);
        }

        return response()->json($aula, 200);
    }

    public function show(int $id)
    {
        $recurso = Aula::find($id);

        return response()->json(
            $recurso,
            is_null($recurso) ? 404 : 200
        );
    }

    public function update(int $id, Request $request)
    {
        $professor = Aula::find($id);

        if ( is_null($professor) ) {
            return response()->json(['erro' => 'recurso não encontrado'], 404);
        }

        // nao pode mudar o professor
        $professor->update($request->all());

        return response()->json($professor , 200);
    }

    public function destroy(int $id)
    {
        $recurso = Aula::destroy($id);

        return response()->json(
            [],
            $recurso == 0 ? 404 : 204
        );
    }

    // decidir se vai paginar essas
    public function indexByProfessor(int $professor_id)
    {
        $professor = Professor::find($professor_id);

        return is_null($professor) ? [] : $professor->aulas;
    }

    public function indexByMateria(int $materia_id)
    {
        $materia = Materia::find($materia_id);

        return is_null($materia) ? [] : $materia->aulas;
    }
}
