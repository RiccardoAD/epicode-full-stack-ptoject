<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;
    protected $fillable = ['service_type_id', 'name', 'description'];

    public function service_type()
    {
        return $this->belongsTo(Service_type::class);
    }

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }
}
