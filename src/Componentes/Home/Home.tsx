import React from 'react';
import { useCustomSelector } from 'hooks/redux';

const Home: React.FC = () => {
  const { auth } = useCustomSelector((state: any) => state);

  console.log(auth.acessToken);

  return <div>Home</div>;
};

export default Home;
