import { usePage } from '@inertiajs/react';
import React from 'react'
import NewComment from './NewComment'

export default function Home(props) {
    const { comments } = usePage().props;
    console.log(comments)

  return (
    <div>

        <NewComment />

        <h2>lista de Comentarios</h2>

    </div>
  )
}
