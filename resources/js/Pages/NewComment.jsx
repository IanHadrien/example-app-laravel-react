import axios from 'axios';
import React, { useState } from 'react'

export default function  NewComment() {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name, comment);

        axios.post('/comments/add', {
            name: name,
            comment: comment,
        })
        .then(() => {
            Inertia.reload();
        })
        .catch((error) => {
            console.log(error);
        });
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nome</label>
              <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" name="name" id="name" />
            </div>
            <div className="form-group">
                <label>Comentario</label>
                <input type="text" onChange={(e) => setComment(e.target.value)}  className="form-control" name="" id="email" />
            </div>
            <button type="submit" className="btn btn-primary">Atualizar</button>
        </form>
    </div>
  )
}
