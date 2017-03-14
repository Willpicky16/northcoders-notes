import React from 'react';
import {Link} from 'react-router';

const red = {
  color: 'red'
};

function Nav (props) {
  return (
    <ul>
      <li>
        <Link to='/' activeStyle={red} onlyActiveOnIndex>Home</Link>
      </li>
      <li>
        <Link to='/about' activeStyle={red}>About</Link>
      </li>
      <li>
        <Link to='/repos' activeStyle={red}>Repos</Link>
      </li>
    </ul>
  );
}

export default Nav;