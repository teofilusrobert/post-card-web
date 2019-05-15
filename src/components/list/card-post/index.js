import React from 'react';
import CardPost from '../../card/post';
import './index.css';

function ListCardPost ({ posts }) {
  return (
    <div className='list-card-post'>
      {posts.map( post => <CardPost key={post.id} post={post}></CardPost>)}
    </div>
  );
}

export default ListCardPost;
