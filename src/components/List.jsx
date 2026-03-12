import ListItem from "./ListItem";

export default function List({ posts, onClick, linkTo }) {
  return (
    <ul>
      {posts.map((post) => (
        <ListItem
          key={post.id}
          post={post}
          onClick={onClick}
          linkTo={linkTo ? linkTo(post) : undefined}
        />
      ))}
    </ul>
  );
}
