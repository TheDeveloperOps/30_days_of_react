import PropTypes from 'prop-types';
import TweetItem from './TweetItem';

const TweetList = ({ tweets }) => {
  return (
    <div>
      {tweets.map((tweet) => (
        <TweetItem key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};

TweetList.propTypes = {
  tweets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      userName: PropTypes.string.isRequired,
      userId: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      reposts: PropTypes.number.isRequired,
      comments: PropTypes.array.isRequired,
    })
  ).isRequired,
};

export default TweetList;