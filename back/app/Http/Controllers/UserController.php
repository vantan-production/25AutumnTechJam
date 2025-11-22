<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use Illuminate\Http\Request;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index(Request $request) {
        $users = User::all();
        return response()->json([
            "success" => true,
            "data" => $users,
        ]);
    }
    public function store(RegisterRequest $request)
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
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function login(LoginRequest $request) {
        
        try {
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
            $user = request()->user();
            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'success' => true,
                'data' => [
                    "user_id" => $user->id,
                    "user_name" => $user->name,
                    'token' => $token,
                ],
            ]);
        } catch(Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e,
            ]);
        };
    }

    public function delete($id) {
        try {
            User::destroy($id);
        } catch(\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'データの削除に失敗しました',
                'error' => $e->getMessage(),
            ]);
        }

        return response()->json([
            'seccess' => true,
        ]);
    }
}
