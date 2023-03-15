<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Models\Comment;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return Inertia::render('Post/index', ['posts' => $posts]);
    }

    public function create()
    {
        return Inertia::render('Post/create');
    }

    public function store(StorePostRequest $request)
    {
        $data = $request->validated();
        $post = Post::create($data);
        return response()->json(['post' => $post], 200);
    }

    public function show(Post $post)
    {
        $comments = Comment::where('commentable_id', $post->id)->get();
        // Inertia::render('Post/show', ['comments' => $comments]);
        return Inertia::render('Post/show', ['post' => $post, 'comments' => $comments]);
    }

    public function edit(Post $post)
    {
        return Inertia::render('Post/edit', ['post' => $post]);
    }

    public function update(UpdatePostRequest $request, Post $post)
    {
        $data = $request->all();
        $post->update($data);

        return response()->json($post, 200);
    }

    public function destroy(Post $post)
    {
        $post->delete();

        return response()->json(['success' => 'Post apagado com sucesso.'], 200);
    }
}
