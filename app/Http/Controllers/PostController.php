<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCommentsRequest;
use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Models\Comment;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return Inertia::render('Post/Index', ['posts' => $posts]);
    }

    public function create()
    {
        return Inertia::render('Post/Create');
    }

    public function store(StorePostRequest $request)
    {
        $data = $request->validated();
        $post = Post::create($data);
        return response()->json(['post' => $post], 200);
        // return redirect()->route('Post/Create');
        // Route::inertia('Post/Create');
        // ('Post/Create')->with('message', 'Mensagem teste');
    }

    public function show(Post $post)
    {
        // $comments = Comment::where('commentable_id', $post->id)->get();
        // Inertia::render('Post/show', ['comments' => $comments]);
        return Inertia::render('Post/Show', ['posts' => $post]);
    }

    public function edit(Post $post)
    {
        return Inertia::render('Post/Edit', ['post' => $post]);
    }

    public function update(UpdatePostRequest $request, Post $post)
    {
        $data = $request->all();
        $post->update($data);

        return response()->json($post, 200);
    }
    public function comment(StoreCommentsRequest $request, Post $post)
    {
        $data = $request->all();
        $post->comments()->create($data);

        return response()->json($post, 200);
    }

    public function destroy(Post $post)
    {
        $post->delete();

        return response()->json(['success' => 'Post apagado com sucesso.'], 200);
    }
}
