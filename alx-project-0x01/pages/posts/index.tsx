import { PostProps, PostData } from "@/interfaces";
import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { useState } from "react";


interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [post, setPost] = useState<PostData | null>(null);
  const handleAddPost = (newPost: PostData) => {
    const updatedPost: PostData = {
      ...newPost,
      id: posts.length + 1,
    };
    setPost(updatedPost);
  };


  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Post Content</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add Post
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {posts.map((post, key) => (
            <PostCard
              key={key}
              title={post.title}
              body={post.body}
              userId={post.userId}
              id={post.id}
            />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <PostModal onClose={() => setModalOpen(false)} onSubmit={handleAddPost} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostData[] = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
