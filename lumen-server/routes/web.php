<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => '/api'], function () use ($router) {

    $router->get('/', function () {
        return ["message" => "instructions"];
    });

    $router->group(['prefix' => '/materias'], function () use ($router) {
        $router->get('/', 'MateriaController@index');
        $router->post('/', 'MateriaController@store');
        $router->get('/{id}', 'MateriaController@show');
        $router->put('/{id}', 'MateriaController@update');
        $router->delete('/{id}', 'MateriaController@destroy');

        $router->get('/{materia_id}/professores', 'ProfessorController@indexByMateria');
        $router->get('/{materia_id}/aulas', 'AulaController@indexByMateria');
    });

    $router->group(['prefix' => '/professores'], function () use ($router) {
        $router->get('/', 'ProfessorController@index');
        $router->post('/', 'ProfessorController@store');
        $router->get('/{id}', 'ProfessorController@show');
        $router->put('/{id}', 'ProfessorController@update');
        $router->delete('/{id}', 'ProfessorController@destroy');

        $router->get('/{professor_id}/materias', 'MateriaController@indexByProfessor');
        $router->get('/{professor_id}/aulas', 'AulaController@indexByProfessor');
    });

    $router->group(['prefix' => '/aulas'], function () use ($router) {
        $router->get('/', 'AulaController@index');
        $router->post('/', 'AulaController@store');
        $router->get('/{id}', 'AulaController@show');
        $router->put('/{id}', 'AulaController@update');
        $router->delete('/{id}', 'AulaController@destroy');
    });
});
