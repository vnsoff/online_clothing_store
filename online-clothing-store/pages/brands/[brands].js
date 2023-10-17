// pages/brands/[brand].js
import { useRouter } from 'next/router';

function BrandPage() {
  const router = useRouter();
  const { brand } = router.query;
  const brandData = {
    'brand-1': {
      name: 'Brand 1',
      description: 'Description',
    },
    'brand-2': {
      name: 'Brand 2',
      description: 'Description',
    },
  };

  if (brand && brandData[brand]) {
    const selectedBrand = brandData[brand];

    return (
      <div>
        <h1>{selectedBrand.name}</h1>
        <p>{selectedBrand.description}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Brand Not Found</h1>
      <p>The selected brand doesn't exist or is not available.</p>
    </div>
  );
}

export default BrandPage;
