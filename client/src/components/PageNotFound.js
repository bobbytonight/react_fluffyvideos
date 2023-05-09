import React from 'react';

export default function PageNotFound() {
  return (
    <div>
      <p>Oops, we could not find this page.</p>
      <a href="../" className="text-blue-500" style={{ marginTop: '10px' }}>Click here to go back.</a>
    </div>
  );
}
