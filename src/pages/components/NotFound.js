import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.css';

const NotFound = () => {
  return (
    <div className='not-found'>
      <img
        src='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHA3cGpobzU3eW56dG11ZzU1aTE3YnNtZGdxaG43MWU0NGdyamF4MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YTzh3zw4mj1XpjjiIb/giphy.gif'
        alt='404 Dinosaur'
      />
      <h1>Oops! Page Not Found</h1>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <Link to='/'>GO BACK HOME</Link>
    </div>
  );
};

export default NotFound;
