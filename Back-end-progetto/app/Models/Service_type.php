<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service_type extends Model
{
    use HasFactory;

    

    protected $fillable = ['name', 'timeslot', 'price'];

    public function services()
    {
        return $this->hasMany(Service::class);
    }





}
