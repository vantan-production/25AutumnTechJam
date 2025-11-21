<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index(Request $request) {
        $users = User::all();
        return response()->json([
            "success" => true,
            "data" => $users,
        ]);
    }
    public function store(LoginRequest $request)
    {
        try {
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
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'ユーザー登録に失敗しました。',
            ], 500);
        }
    }

    public function login(LoginRequest $request) {
        
        $validated = $request->validated();
        if (Auth::attempt([
                'email' => $validated['email'],
                'password' => $validated['password'],
            ])) {
        } else {
            return response()->json([
                "success" => false,
                "message" => "ログインに失敗しました。",
            ], 401);
        }
        $user = Auth::user();
        $token = $user->id->createToken('auth_token')->plainTextToken;

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
