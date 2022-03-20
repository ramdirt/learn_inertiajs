<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\User;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Admin\AdminUsersController;

Route::controller(LoginController::class)->group(function () {
    Route::get('/login', 'create')->name('login');
    Route::post('/login', 'store');
    Route::post('/logout', 'destroy')->middleware('auth');
});

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::middleware('auth')->group(function() {
    
    Route::get('/admin/users', function () {
        
        return Inertia::render('Admin/Users/Index', [
            'time' => now()->toTimeString(),
            'users' => User::query()
                ->when(Request::input('search'), function($query, $search) {
                    $query->where('name', 'like', "%{$search}%");
                })
                ->paginate(10)
                ->withQueryString()
                ->through(fn($user) => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'can' => [
                        'edit' => Auth::user()->can('edit', $user),
                    ]
            ]),
            'filters' => Request::only(['search']),
            'can' => [
                'createUser' => Auth::user()->can('create', User::class)
            ]
        ]);
    });
    
    Route::get('/users/create', function () {
        return Inertia::render('Users/Create');
    })->can('create', 'App\Models\User');
    
    Route::post('/users', function () {
        $attributes = Request::validate([
           'name' => 'required',
           'email' => 'required|email',
           'password' => 'required'
        ]);
        User::create($attributes);
    
        return redirect('/users');
    });

    Route::get('/catalog', function () {
        return Inertia::render('Catalog');
    });

    Route::get('/basket', function () {
        return Inertia::render('Basket');
    });
    
});