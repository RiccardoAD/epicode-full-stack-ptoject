<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // L'ORDINE DEI SEEDER è IMPORTANTE
        $this->call([
            AdminUserSeeder::class,
            ServiceSeeder::class,
            TimeSlotSeeder::class,
           
        ]);
    }
}