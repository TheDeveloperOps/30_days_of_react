import PropTypes from 'prop-types';
import { useState } from 'react';
import CommentForm from './CommentForm';

const TweetItem = ({ tweet }) => {
  const [likes, setLikes] = useState(tweet.likes);
  const [reposts, setReposts] = useState(tweet.reposts);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleRepost = () => {
    setReposts(reposts + 1);
  };

  const handleToggleComments = () => {
    setShowComments((prev) => !prev);
  };

  return (
    <div>
      <p>{tweet.userName}</p>
      <p>{tweet.userId}</p>
      <p>{tweet.content}</p>
      <p>{tweet.timestamp}</p>
      <button onClick={handleLike}>Like ({likes})</button>
      <button onClick={handleRepost}>Repost ({reposts})</button>
      <button onClick={handleToggleComments}>
        {showComments ? 'Hide Comments' : 'View Comments'}
      </button>
      {showComments && <CommentForm tweetId={tweet.id} />}
    </div>
  );
};

TweetItem.propTypes = {
  tweet: PropTypes.shape({
    id: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    reposts: PropTypes.number.isRequired,
    comments: PropTypes.array.isRequired,
  }).isRequired,
};

export default TweetItem; 