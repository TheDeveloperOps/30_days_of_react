// src/App.js
import  { useState } from 'react';
import Header from './components/Header';
import TweetList from './components/TweetList';
import TweetForm from './components/TweetForm';

const App = () => {
  const [tweets, setTweets] = useState([]);

  const handleAddTweet = (newTweet) => {
    setTweets((prevTweets) => [...prevTweets, newTweet]);
  };

  const handleAddComment = (newComment) => {
    setTweets((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === newComment.tweetId
          ? { ...tweet, comments: [...tweet.comments, newComment] }
          : tweet
      )
    );
  };

  return (
    <div>
      <Header />
      <TweetForm onAddTweet={handleAddTweet} />
      <TweetList tweets={tweets} onAddComment={handleAddComment} />
    </div>
  );
};

export default App;
