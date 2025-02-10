
import { Heart, MessageCircle, Repeat2 } from "lucide-react";
import { useState } from "react";

interface TweetProps {
  id: string;
  content: string;
  author: {
    name: string;
    handle: string;
    avatar: string;
  };
  timestamp: string;
  likes: number;
  retweets: number;
  replies: number;
}

const Tweet = ({
  content,
  author,
  timestamp,
  likes: initialLikes,
  retweets: initialRetweets,
  replies,
}: TweetProps) => {
  const [likes, setLikes] = useState(initialLikes);
  const [retweets, setRetweets] = useState(initialRetweets);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

  const handleLike = () => {
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
    setIsLiked(!isLiked);
  };

  const handleRetweet = () => {
    setRetweets(prev => isRetweeted ? prev - 1 : prev + 1);
    setIsRetweeted(!isRetweeted);
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex gap-4">
        <img
          src={author.avatar}
          alt={author.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-text-primary">{author.name}</h3>
            <span className="text-text-secondary">@{author.handle}</span>
            <span className="text-text-secondary">·</span>
            <span className="text-text-secondary">{timestamp}</span>
          </div>
          <p className="mt-2 text-text-primary">{content}</p>
          
          <div className="flex gap-6 mt-4">
            <button className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span>{replies}</span>
            </button>
            
            <button
              onClick={handleRetweet}
              className={`flex items-center gap-2 transition-colors ${
                isRetweeted ? "text-green-500" : "text-text-secondary hover:text-green-500"
              }`}
            >
              <Repeat2 className="w-5 h-5" />
              <span>{retweets}</span>
            </button>
            
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 transition-colors ${
                isLiked ? "text-red-500" : "text-text-secondary hover:text-red-500"
              }`}
            >
              <Heart className="w-5 h-5" />
              <span>{likes}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
