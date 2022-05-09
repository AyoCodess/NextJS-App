import React from 'react';
import { useRouter } from 'next/router';

function ProductDetails() {
  const router = useRouter();
  const productid = router.query.productid;
  return <div>ProductDetails - ID no. {productid}</div>;
}

export default ProductDetails;
