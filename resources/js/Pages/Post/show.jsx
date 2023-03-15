import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Show(props) {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [descrition, setDescrition] = useState('');
    const [newComment, setCommnet] = useState('');

    const [comments, setComments] = useState([]);

    useEffect(() => {
        setId(props.post.id)
        setTitle(props.post.title)
        setDescrition(props.post.content)
        setComments(props.comments);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const commentable_type = "App\\Models\\Post";
        const regTemp = {
            commentable_id: id,
            commentable_type,
            content: newComment,
        }
        console.log(regTemp)
        try {
            await axios.post("/comments", regTemp)
            alert('Comentário realizado com sucesso.');
            setCommnet('');
            location.reload();
            // reloadComments();
        } catch (error) {
            console.log(error)
            // const err = error?.response?.data?.errors
            // if(err?.title) setTitleError(err.title)
        }
    };

  return (
    <div className='w-6/12 m-auto'>
        <div className='flex items-center justify-between'>
            <h2 className='py-4 text-3xl font-bold'>{title}</h2>

            <a href={`/posts`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Voltar</a>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Titulo
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Conteudo
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {id}
                        </th>
                        <td className="px-6 py-4">
                            {title}
                        </td>
                        <td className="px-6 py-4">
                            {descrition}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <form className='py-6'>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">Novo comentario</label>
                <input onChange={(e) => setCommnet(e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <button onClick={handleSubmit} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Salvar</button>
        </form>

        <h2 className='py-4 text-3xl font-bold'>Comentarios da Postagem</h2>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Comentario
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {comments?.map((comment) => (
                        <tr key={comment.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {comment.id}
                            </td>
                            <td className="px-6 py-4">
                                {comment.content}
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    </div>
  )
}
