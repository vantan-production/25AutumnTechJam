<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'roito',
            'email' => 'roito@example.com',
            'password' => bcrypt('password'),
        ]);
        
        User::create([
            'name' => 'shion',
            'email' => 'shion@example.com',
            'password' => bcrypt('password'),
        ]);
        
        User::create([
            'name' => 'sakura',
            'email' => 'sakura@example.com',
            'password' => bcrypt('password'),
        ]);
        
        User::create([
            'name' => 'haruto',
            'email' => 'haruto@example.com',
            'password' => bcrypt('password'),
        ]);
        
        User::create([
            'name' => 'yui',
            'email' => 'yui@example.com',
            'password' => bcrypt('password'),
        ]);
        
        User::create([
            'name' => 'ren',
            'email' => 'ren@example.com',
            'password' => bcrypt('password'),
        ]);
        
        User::create([
            'name' => 'aoi',
            'email' => 'aoi@example.com',
            'password' => bcrypt('password'),
        ]);
    }
}
