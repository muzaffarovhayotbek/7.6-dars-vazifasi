import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function FirstExam() {
   function getInfo() {
    const res = axios.get('https://jsonplaceholder.typicode.com/users');
    return res.data;
  }

  const { data, isError, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: getInfo,
    refetchInterval: 30000,
  });

  return (
    <div>
      <h2>Foydalanuvchilar</h2>
      {isLoading && <p>Yuklanmoqda...</p>}
      {isError && <p>Hatolik yuz berdi</p>}
      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FirstExam;
