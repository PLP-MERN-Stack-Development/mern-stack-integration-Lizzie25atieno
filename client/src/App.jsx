import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import PostList from './components/PostList';
import CategoryList from './components/CategoryList';
import PostPage from './pages/PostPage';
import CategoryPage from './pages/CategoryPage';
import NewPostPage from './pages/NewPostPage';
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from './context/AuthContext';
import { PostsProvider } from './context/PostsContext';

function App() {
  return (
    <AuthProvider>
      <PostsProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/categories" element={<CategoryPage />} />
            <Route path="/posts/:slug" element={<PostPage />} />
            <Route path="/new-post" element={<NewPostPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Router>
      </PostsProvider>
    </AuthProvider>
  );
}

export default App;
