<?php
namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    public function index()
    {
        return Appointment::with('services')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'time_slot_id' => 'required|exists:time_slots,id',
            'date' => 'required|date',
            'services' => 'required|array',
            'services.*.id' => 'required|exists:services,id',
            'services.*.quantity' => 'required|integer|min:1',
        ]);

        $appointment = Appointment::create([
            'user_id' => $request->user()->id,
            'time_slot_id' => $request->time_slot_id,
            'date' => $request->date,
        ]);

        foreach ($request->services as $service) {
            $appointment->services()->attach($service['id'], ['quantity' => $service['quantity']]);
        }

        return response()->json($appointment->load('services'), 201);
    }

    public function show($id)
    {
        return Appointment::with('services')->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'time_slot_id' => 'required|exists:time_slots,id',
            'date' => 'required|date',
            'services' => 'required|array',
            'services.*.id' => 'required|exists:services,id',
            'services.*.quantity' => 'required|integer|min:1',
        ]);

        $appointment = Appointment::findOrFail($id);
        $appointment->update([
            'time_slot_id' => $request->time_slot_id,
            'date' => $request->date,
        ]);

        $appointment->services()->detach();
        foreach ($request->services as $service) {
            $appointment->services()->attach($service['id'], ['quantity' => $service['quantity']]);
        }

        return response()->json($appointment->load('services'));
    }

    public function destroy($id)
    {
        Appointment::findOrFail($id)->delete();

        return response()->json(null, 204);
    }
}