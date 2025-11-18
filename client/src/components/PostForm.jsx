import { useEffect, useState } from 'react';
import { postService, categoryService } from '../services/api';

export default function PostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoryService.getAllCategories().then(setCategories);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
      alert("You must be logged in to create a post.");
      return;
    }

    try {
      await postService.createPost({
        title,
        content,
        category,
        author: user._id
      });

      alert("Post created!");
      setTitle('');
      setContent('');
      setCategory('');

    } catch (err) {
      console.error(err);
      alert("Failed to create post. Check the backend console.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
      />

      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Content"
      />

      <select
        value={category}
        onChange={e => setCategory(e.target.value)}
      >
        <option value="">Select category</option>
        {categories.map(c => (
          <option key={c._id} value={c._id}>{c.name}</option>
        ))}
      </select>

      <button type="submit">Create Post</button>
    </form>
  );
}
