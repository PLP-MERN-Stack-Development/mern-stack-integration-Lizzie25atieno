import { createContext, useContext } from 'react';
import usePosts from '../hooks/usePosts';

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const postsData = usePosts();
  return <PostsContext.Provider value={postsData}>{children}</PostsContext.Provider>;
};

// Custom hook to use PostsContext
export const usePostsContext = () => useContext(PostsContext);
