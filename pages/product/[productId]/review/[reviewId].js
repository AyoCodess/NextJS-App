import React from 'react';
import { useRouter } from 'next/router';

function Review() {
  const router = useRouter();
  const { productId, reviewId } = router.query;

  return (
    <h1>
      details about product {productId} and the review number {reviewId}
    </h1>
  );
}

export default Review;
