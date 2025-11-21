<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BookmarkController extends Controller
{
    public function index(Request $request) {
        $max_item = $request["max_number"];
        
    }
}
