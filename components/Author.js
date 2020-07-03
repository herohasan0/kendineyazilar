import React from 'react';
import A from './a';

function Author({ ...props }) {
  return (
    <div>
      <A as={`/users?username=${props.Author}`}>{props.Author}</A>
    </div>
  );
}

export default Author;
