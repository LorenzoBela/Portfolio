<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PortfolioController;

// Portfolio Routes
Route::controller(PortfolioController::class)->group(function () {
    Route::get('/', 'index')->name('home');
    Route::get('/about', 'about')->name('about');
    Route::get('/projects', 'projects')->name('projects');
    Route::get('/contact', 'contact')->name('contact');
    Route::post('/contact', 'sendMessage')->name('contact.send');
    Route::get('/admin/messages', 'viewMessages')->name('admin.messages');
});

// Health check route (already exists from Laravel)
Route::get('/up', function () {
    return response('OK', 200);
})->name('health.check');
