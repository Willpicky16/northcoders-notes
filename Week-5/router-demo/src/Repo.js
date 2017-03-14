import React from 'react';

function Repo (props) {
  return (
    <div>
      <h3>{props.params.repo_name}</h3>
      <p>{'by ' + props.params.user_name}</p>
    </div>
  )
}

export default Repo;