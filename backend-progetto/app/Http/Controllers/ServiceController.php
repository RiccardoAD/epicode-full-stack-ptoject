<?php
namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index()
    {
        return Service::all();
    }

    public function store(Request $request)
    {
        // $this->authorize('admin-only');
        
        $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
        ]);

        $service = Service::create($request->all());

        return response()->json($service, 201);
    }

    public function show($id)
    {
        return Service::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        // $this->authorize('admin-only');

        $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
        ]);

        $service = Service::findOrFail($id);
        $service->update($request->all());

        return response()->json($service);
    }

    public function destroy($id)
    {
        // $this->authorize('admin-only');

        Service::findOrFail($id)->delete();

        return response()->json(null, 204);
    }
}