import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostTemplate from './template';
import './index.css';

class CardPost extends Component {
  constructor(props) {
    super(props);
    this.state = { showComments: false };
    this.ToggleCommentsView = this.ToggleCommentsView.bind(this);
  }

  ToggleCommentsView () {
    this.setState({ showComments: !this.state.showComments });
  }

  render() {
    const { post } = this.props;
    const { showComments } = this.state;
    return (
      <button className={`card-post${showComments ? ' expand' : ''}`} onClick={this.ToggleCommentsView}>
        <PostTemplate
          name={ post.user.name }
          username={ `@${post.user.username}` }
          title={ post.title }
          description={ post.body }
        ></PostTemplate>
        <div className={`row-comments${showComments ? '' : ' collapsed'}`}>
          <hr></hr>
          <div className='list-comments'>
            {post.comments.map( comment => {
              return <PostTemplate
                name={ comment.name }
                username={comment.email}
                description={ comment.body }
              ></PostTemplate>
            })}
          </div>
        </div>
      </button>
    );
  }
}

CardPost.propTypes = {
  post: PropTypes.object,
};

CardPost.defaultProps = {
  post: {
    comments: [],
  },
};

export default CardPost;
