// client/src/pages/CategoryPage.jsx
import { useEffect, useState } from 'react';
import { categoryService } from '../services/api';

export default function CategoryPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoryService.getAllCategories().then(setCategories);
  }, []);

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(c => (
          <li key={c._id}>{c.name}</li>
        ))}
      </ul>
    </div>
  );
}
