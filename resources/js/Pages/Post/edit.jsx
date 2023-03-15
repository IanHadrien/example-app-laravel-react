import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Create(props) {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        setId(props.post.id)
        setTitle(props.post.title)
        setContent(props.post.content)
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(title, content);

        const regTemp = {
            title, content
        }
        try {
            const { data } = await axios.put(`/posts/${id}`, regTemp)
            setTitle(data.title)
            setContent(data.content)
            alert('Post atualizado com sucesso.')
        } catch (error) {
            const err = error?.response?.data?.errors
            console.log(err);
        }
    };

  return (
    <div className='w-6/12 m-auto'>
        <div className='flex items-center justify-between'>
            <h2 className='py-4 text-3xl font-bold'>Editar Postagem</h2>

            <a href={`/posts`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Voltar</a>
        </div>

        <form>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">Título</label>
                <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">Conteúdo</label>
                <input onChange={(e) => setContent(e.target.value)} value={content} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <button onClick={handleSubmit} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Salvar</button>
        </form>
    </div>
  )
}
