import React from 'react';
import PropTypes from 'prop-types';
import { StringToHexColor } from '../../../../actions';
import './index.css';

function PostTemplate ({ name, username, title, description }) {
  return (
    <div className='post-template'>
      <div className='row-logo-name'>
        <div className='init-logo' style={{ backgroundColor: StringToHexColor(name) }}>
          {name[0]}
        </div>
        <div className='col-name'>
          <div className='name'><b>{name}</b></div>
          <div className='username'>{username}</div>
        </div>
      </div>
      {title && <h3>{title}</h3>}
      <p>{description}</p>
    </div>
  );
}

PostTemplate.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

PostTemplate.defaultProps = {
  name: 'No Name',
  username: 'No Username',
  title: '',
  description: 'No description',
};

export default PostTemplate;
