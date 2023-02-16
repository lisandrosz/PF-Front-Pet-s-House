import React from 'react';

import { useSelector } from 'react-redux';

const Home: React.FC = () => {
  const { auth } = useSelector((state: any) => state);

  console.log(auth);

  return <div>Home</div>;
};

export default Home;
