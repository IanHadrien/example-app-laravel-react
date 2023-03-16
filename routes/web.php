<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\CommentsController;
use App\Http\Controllers\PostController;
use App\Models\Comments;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
use Inertia\Inertia;

// Route::get('/', function () {
//     $comments = Comments::all();
//     return Inertia::render('Home', ['comments' => $comments]);
//     // return Inertia::render('Home');
// });
// Route::get('/comments',[CommentsController::class, 'index']);
// Route::post('/comments/add', [CommentsController::class, 'store']);

Route::resource('/posts', PostController::class);
Route::resource('/comments', CommentController::class);
Route::post('/posts/{post}/comments', [PostController::class, 'comment'])->name('posts.comments');

