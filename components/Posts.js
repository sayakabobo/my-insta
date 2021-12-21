import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: "123",
      username: "sayaya",
      userImg: "https://links.papareact.com/3ke",
      img: "https://links.papareact.com/3ke",
      caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON",
    },
    {
      id: "125",
      username: "saya-max",
      userImg: "https://links.papareact.com/3ke",
      img: "https://links.papareact.com/3ke",
      caption: "This is XXX",
    },
    {
      id: "130",
      username: "tonbo",
      userImg: "https://links.papareact.com/3ke",
      img: "https://links.papareact.com/3ke",
      caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
