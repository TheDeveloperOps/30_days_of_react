import PropTypes from 'prop-types';
import { useState } from 'react';
const TweetForm = ({ onAddTweet }) => {
  const [tweetContent, setTweetContent] = useState('');

  const handleTweetContentChange = (e) => {
    setTweetContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tweetContent.trim() !== '') {
      const newTweet = {
        id: Date.now(),
        userName: 'John Doe', // Replace with the user's name
        userId: '@johndoe', // Replace with the user's ID
        content: tweetContent,
        timestamp: new Date().toLocaleString(),
        likes: 0,
        reposts: 0,
        comments: [],
      };
      onAddTweet(newTweet);
      setTweetContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={tweetContent}
        onChange={handleTweetContentChange}
        placeholder="What's happening?"
        maxLength={280}
      />
      <button type="submit">Tweet</button>
    </form>
  );
};

TweetForm.propTypes = {
  onAddTweet: PropTypes.func.isRequired,
};

export default TweetForm;