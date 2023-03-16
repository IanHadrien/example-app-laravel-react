import { useForm, usePage } from '@inertiajs/react';
import React from 'react';

export default function Show(props) {
    const { posts, flash } = props;

    const { data, setData, post, processing, errors, reset } = useForm({
        commentable_id: '',
        commentable_type: '',
        content: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        post(`/posts/${posts.id}/comments`);
        // post(route('posts.comments', posts.id));
        reset();
    };

  return (
    <div className='w-6/12 m-auto'>
        {flash.message && (
          <div className="alert">{flash.message}</div>
        )}

        <div className='flex items-center justify-between'>
            <h2 className='py-4 text-3xl font-bold'>{posts.title}</h2>

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
                            {posts.id}
                        </th>
                        <td className="px-6 py-4">
                            {posts.title}
                        </td>
                        <td className="px-6 py-4">
                            {posts.content}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <form className='py-6'>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">Novo comentario</label>
                <input onChange={e => setData('content', e.target.value)} value={data.content} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
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
                    {posts.comments?.map((comment) => (
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
