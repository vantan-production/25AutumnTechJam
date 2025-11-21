<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function store(LoginRequest $request)
    {
        $validated = $request->validated();

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => bcrypt($validated['password']),
        ]);

        return response()->json([
            'success' => true,
            'data' => [
                "user_id" => $user->id,
                "user_name" => $user->name,
            ],
        ], 201);    
    }

    public function index(LoginRequest $request) {
        
        $validated = $request->validated();
        try {
            Auth::attempt([
                'name' => $validated['name'],
                'email' => $validated['email'],
                'password' => $validated['password'],
            ]);
        } catch (\Exception $e) {
            return response()->json([
                "success" => false,
                "message" => "ログインに失敗しました。",
            ], 401);
        }
        $user = Auth::user()->id;
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'success' => true,
            'data' => [
                "user_id" => $user->id,
                "user_name" => $user->name,
                'token' => $token,
            ],
        ]);
    }
}
