import React from 'react';

function User({ title, Description,onremove }) {
  return (
   <div className='list-item'>
    <div>
    <h2 >{title}</h2>
    <h4 >{Description}</h4>
   </div>
   <div className='icons'>
   <i onClick={onremove} class="fa-solid fa-trash-can" ></i>
   </div>
   </div>
  );
}

export default User;
