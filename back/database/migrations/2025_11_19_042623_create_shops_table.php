<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('shops', function (Blueprint $table) {
            $table->id();
            $table->boolean("is_cafe")->default(true);
            $table->string("name");
            $table->text("description");
            $table->string("address");
            $table->string("phone_number");
            $table->string("image_url");
            $table->unsignedInteger("min_budget")->default(0)->nullable();
            $table->time("opens_at");
            $table->time("closes_at");
            $table->double("latitude");
            $table->double("longitude");
            $table->boolean("is_sun")->default(true);  
            $table->boolean("is_mon")->default(true);  
            $table->boolean("is_tue")->default(true);  
            $table->boolean("is_wed")->default(true);  
            $table->boolean("is_thu")->default(true);  
            $table->boolean("is_fri")->default(true);  
            $table->boolean("is_sat")->default(true);  
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shops');
    }
};
