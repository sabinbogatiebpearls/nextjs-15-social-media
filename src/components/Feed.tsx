import Post from "./Post";

const Feed = () => {
  return (
    <div className="p-4 bg-white shadow-md flex flex-col gap-12">
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
