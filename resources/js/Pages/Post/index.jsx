import { useForm } from '@inertiajs/react';
// import { Inertia } from '@inertiajs/inertia';
import React from 'react';

export default function Index(props) {
    const { posts } = props;

    const { data, setData, delete: destroy, processing, errors } = useForm({})

    const handleClick = async (id) => {
        if(!confirm("Deseja realmente excluir o post?")) return

        destroy(`posts/${id}`);
        // Inertia.delete(route('posts.destroy', posts.id));
    };

  return (
    <div className='p-4'>

        <div className='flex items-center'>
            <h2 className='py-4 text-3xl font-bold'>Postagens</h2>

            <a href="posts/create" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded">
                Nova Postagem
            </a>
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
                        <th scope="col" className="px-6 py-3">
                            Visualizar
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Editar
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Deletar
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {posts?.map((post, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {post.id}
                            </th>
                            <td className="px-6 py-4">
                                {post.title}
                            </td>
                            <td className="px-6 py-4">
                                {post.content}
                            </td>
                            <td className="px-6 py-4">
                                <a href={`posts/${post.id}/`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Visualizar</a>
                            </td>
                            <td className="px-6 py-4">
                                <a href={`posts/${post.id}/edit`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</a>
                            </td>
                            <td className="px-6 py-4">
                                <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => handleClick(post.id)}>Deletar</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    </div>
  )
}
