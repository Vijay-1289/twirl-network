
import { useState } from "react";
import Layout from "../components/Layout";
import Tweet from "../components/Tweet";
import { useToast } from "@/hooks/use-toast";

const PLACEHOLDER_TWEETS = [
  {
    id: "1",
    content: "Just launched a new feature! Check it out and let me know what you think 🚀",
    author: {
      name: "Sarah Chen",
      handle: "sarahchen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    },
    timestamp: "2h",
    likes: 142,
    retweets: 28,
    replies: 12,
  },
  {
    id: "2",
    content: "The future of web development is here. React 19 brings incredible improvements to server components and more!",
    author: {
      name: "Alex Rivera",
      handle: "arivera",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    },
    timestamp: "4h",
    likes: 89,
    retweets: 15,
    replies: 8,
  },
];

const Index = () => {
  const [newTweet, setNewTweet] = useState("");
  const { toast } = useToast();
  const maxLength = 280;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTweet.trim()) {
      toast({
        title: "Tweet posted!",
        description: "Your tweet has been shared with your followers.",
      });
      setNewTweet("");
    }
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Tweet Composer */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <form onSubmit={handleSubmit}>
            <textarea
              value={newTweet}
              onChange={(e) => setNewTweet(e.target.value)}
              placeholder="What's happening?"
              className="w-full resize-none border-none focus:ring-0 text-lg placeholder:text-gray-400"
              rows={3}
              maxLength={maxLength}
            />
            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <span className="text-sm text-text-secondary">
                {newTweet.length}/{maxLength} characters
              </span>
              <button
                type="submit"
                disabled={!newTweet.trim()}
                className="px-6 py-2 bg-primary hover:bg-primary-hover text-white rounded-full font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Tweet
              </button>
            </div>
          </form>
        </div>

        {/* Tweet Feed */}
        <div className="space-y-4">
          {PLACEHOLDER_TWEETS.map((tweet) => (
            <Tweet key={tweet.id} {...tweet} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
