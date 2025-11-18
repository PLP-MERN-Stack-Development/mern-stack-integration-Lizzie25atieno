// client/src/pages/PostPage.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { postService } from '../services/api';

export default function PostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    postService.getPost(slug).then(setPost);
  }, [slug]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Category: {post.category.name}</p>
      <p>Author: {post.author.username}</p>
    </div>
  );
}
