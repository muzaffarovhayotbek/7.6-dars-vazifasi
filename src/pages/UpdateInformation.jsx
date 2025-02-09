import React, { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

function UpdateInformation() {
  const [postId, setPostId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryFn: ({ queryKey }) =>
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${queryKey[1]}`)
        .then((res) => res.data),
    queryKey: ['postDetails', postId],
    enabled: !!postId,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      queryClient.invalidateQueries(['postDetails', postId]);
      alert("Ma'lumot yangilandi!");
    } catch (error) {
      alert("Xatolik yuz berdi. Qaytadan urinib ko'ring!");
    }
  };

  return (
    <div className="container mx-auto mt-4 text-center">
      <form className="flex flex-col w-[400px] m-auto">
        <label className="text-2xl">Post ID</label>
        <input
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
          className="border p-2 rounded text-black"
          type="number"
          placeholder="Enter post ID"
        />
      </form>

      {isLoading && <p>Yuklanmoqda...</p>}
      {isError && <p>Xatolik yuz berdi!</p>}

      {data && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-[400px] m-auto mt-4 border p-4 rounded-md bg-gray-100"
        >
          <label className="text-lg font-bold">Sarlavha</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded text-black"
            type="text"
          />
          <label className="text-lg font-bold mt-2">Mazmun</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="border p-2 rounded text-black"
            rows="4"
          />
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white p-2 rounded"
          >
            Yangilash
          </button>
        </form>
      )}
    </div>
  );
}

export default UpdateInformation;
