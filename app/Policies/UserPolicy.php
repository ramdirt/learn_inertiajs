<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    public function create(User $user)
    {
        return $user->is_admin ? true : false;
    }
    public function edit(User $user, User $model)
    {
        // return $user->is_admin ? true : false;
        return (bool) mt_rand(0, 1);
    }
}