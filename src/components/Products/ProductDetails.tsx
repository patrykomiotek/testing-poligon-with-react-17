import { useEffect, useState } from 'react';
import { fetchProduct, fetchProducts } from '@services/products';
import { Product } from '@model/Product';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

export const ProductDetails = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useQuery(`product-details/${id}`, () => fetchProduct(id as string));

  const productResponse = data?.data;

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error!</p>}
      {productResponse && <h2>{productResponse.fields.name}</h2>}
    </div>
  );
}
