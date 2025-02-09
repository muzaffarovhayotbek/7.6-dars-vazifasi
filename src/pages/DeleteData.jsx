import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

function DeleteData() {
  function getDelete() {
    return axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  const { data, isError, isLoading } = useQuery({
    queryFn: getDelete,
    queryKey: ['post'],
  });

  function handleDelete() {}
  return (
    <div className="container mx-auto">
      {isError && <p>Xatolik yuz berdi</p>}
      {isLoading && <p>Yuklanmoqda</p>}
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button
        onClick={handleDelete}
        className="bg-red-500 rounded-md p-2 cursor-pointer hover:bg-blue-500"
      >
        Delete
      </button>
    </div>
  );
}

export default DeleteData;
