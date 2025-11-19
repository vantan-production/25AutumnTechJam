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
            $table->string("name");
            $table->text("description");
            $table->string("address");
            $table->string("phone_number");
            $table->string("image_url");
            $table->unsignedInteger("min_budget");
            $table->time("opens_at");
            $table->time("closes_at");
            $table->double("latitude");
            $table->double("longitude");
            $table->boolean("is_sun");
            $table->boolean("is_mon");
            $table->boolean("is_tue");
            $table->boolean("is_wed");
            $table->boolean("is_thu");
            $table->boolean("is_fri");
            $table->boolean("is_sat");
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
