<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCommentsRequest;
use App\Models\Comments;
use App\Http\Requests\UpdateCommentsRequest;
use App\Models\Comment;
use App\Models\Post;
use Inertia\Inertia;

class CommentController extends Controller
{
    public function index()
    {
        $comments = Comment::all();
        return Inertia::render('Post/show', ['comments' => $comments]);
    }

    public function create()
    {

    }

    public function store(StoreCommentsRequest $request)
    {
        $data = $request->validated();
        $comment = Comment::create($data);
        return response()->json(['comment' => $comment], 200);
    }

    public function show(Comment $comments)
    {
        $comments = Comment::all();
        return Inertia::render('Post/show', ['comments' => $comments]);
    }

    public function edit(Comment $comments)
    {
        //
    }

    public function update(UpdateCommentsRequest $request, Comment $comments)
    {
        //
    }

    public function destroy(Comment $comments)
    {
        //
    }
}
