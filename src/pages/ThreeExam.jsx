import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function ThreeExam() {
  const [postId, setPostId] = useState('');

  function getPosts({ queryKey }) {
    const id = queryKey[1];
    return axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.data);
  }

  const { data, isLoading, isError } = useQuery({
    queryFn: getPosts,
    queryKey: ['postDetails', postId],
    enabled: !!postId,
  });

  return (
    <div className="container mx-auto mt-2 text-center">
      <div>
        <form className="flex flex-col w-[400px] m-auto">
          <label className="text-2xl text-[28px]">Post id</label>
          <input
            value={postId}
            onChange={(e) => setPostId(e.target.value)}
            className="border p-2 rounded text-black"
            type="number"
            placeholder="Enter post id"
          />
        </form>
        {isLoading && <p>Yuklanmoqda...</p>}
        {isError && <p>Xatolik yuz berdi!</p>}
        {data && (
          <div className="border p-4 rounded-md bg-gray-100 mt-4">
            <h3 className="text-lg font-bold">{data.title}</h3>
            <p>{data.body}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ThreeExam;
