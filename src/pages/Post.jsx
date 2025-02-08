import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

function Post() {
  const [title, setTitle] = useState('');
  const [posts, setPosts] = useState([]);
  function getPost() {
    return axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.data);
  }

  function validate() {
    if (title.length < 8) {
      alert('maydon kamida 8 ta harf');
    }
    return true;
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    axios
      .post('https://jsonplaceholder.typicode.com/posts', { title })
      .then((res) => {
        setPosts([...posts, res.data]);
        setTitle('');
        alert('Post muvaffaqiyatli yaratildi!');
      })
      .catch(() => {
        alert('Xatolik yuz berdi!');
      });
  }
  const { data, isError, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: getPost,
  });
  return (
    <div className="container mx-auto">
      <h2 className="text-medium text-center text-[20px]">
        Yangi post yaratish
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[500px] ml-100 mt-8"
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-3 rounded-md border p-2"
          type="text"
          placeholder="Enter theme"
        />
        <button
          className="bg-blue-500 cursor-pointer py-2 px-2 rounded-md"
          type="submit"
        >
          Yuborish
        </button>
      </form>
      {isLoading && <p>Yuklanmoqda</p>}
      {isError && <p>Hatolik</p>}
      <ul>
        {(posts.length > 0 ? posts : data)?.slice(0, 5).map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Post;
