import React from 'react';
import { useAuth } from '../../context/AuthContext';

function Main() {
  const { user } = useAuth();
  return (
    <div>
      <h2>Welcome</h2>
      <p>{user?.email}</p>
    </div>
  );
}

export default Main;
