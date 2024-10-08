// src/pages/NotFound.jsx
import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8">
      <h1 className="text-4xl font-bold text-red-600">404</h1>
      <p className="text-lg text-gray-700 mt-2">
        Sorry, the route you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
