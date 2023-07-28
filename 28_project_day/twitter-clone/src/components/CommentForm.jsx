import PropTypes from 'prop-types';
import { useState } from 'react';

const CommentForm = ({ tweetId, onAddComment }) => {
  const [commentContent, setCommentContent] = useState('');

  const handleCommentContentChange = (e) => {
    setCommentContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentContent.trim() !== '') {
      const newComment = {
        id: Date.now(),
        tweetId: tweetId,
        userName: 'Jane Doe', // Replace with the user's name
        userId: '@janedoe', // Replace with the user's ID
        content: commentContent,
        timestamp: new Date().toLocaleString(),
      };
      onAddComment(newComment);
      setCommentContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={commentContent}
        onChange={handleCommentContentChange}
        placeholder="Write a comment..."
        maxLength={140}
      />
      <button type="submit">Post Comment</button>
    </form>
  );
};

CommentForm.propTypes = {
  tweetId: PropTypes.number.isRequired,
  onAddComment: PropTypes.func.isRequired,
};

export default CommentForm;