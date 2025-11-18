// client/src/components/NavBar.jsx
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <Link to="/posts">Posts</Link> | <Link to="/categories">Categories</Link> | <Link to="/new-post">New Post</Link> | <Link to="/login">Login</Link>

    </nav>
  );
}
