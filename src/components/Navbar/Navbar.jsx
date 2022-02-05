import React from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.css';
import logo from '../../logo-ironhack-blue.png';
import { useAuth } from '../../context';
import { render } from '@testing-library/react';

function Navbar() {
  const [user, handleLogout] = useAuth();

  if (user) {
    render(
      <Link>
        <button onClick={handleLogout}>logout</button>
      </Link>
    );
  }

  if (!user) {
    return (
      <>
        <Link>Login</Link>
        <Link>Signup</Link>
      </>
    );
  }
}

export default Navbar;
