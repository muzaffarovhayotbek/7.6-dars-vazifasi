import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function FirstExam() {
  function getInfo() {
    return axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.data);
  }

  const { data, isError, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: getInfo,
    refetchInterval: 30000,
  });

  return (
    <div className="container mx-auto">
      <h2 className="text-center font-medium text-[22px]">Foydalanuvchilar</h2>
      {isLoading && <p>Yuklanmoqda...</p>}
      {isError && <p>Hatolik yuz berdi</p>}
      <ul className="text-center flex flex-col gap-4">
        {data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FirstExam;
