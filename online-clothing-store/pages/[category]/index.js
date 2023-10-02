// pages/[category]/index.js

import { useRouter } from 'next/router';
import Product from '../../components/Product';

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div>
      <h1>{category} Products Page</h1>
      <Product category={category} />
    </div>
  );
};

export default CategoryPage;