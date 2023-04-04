import { useEffect, useState } from 'react';
import { fetchProduct, fetchProducts } from '@services/products';
import { Product } from '@model/Product';
import { useParams } from 'react-router-dom';


export const ProductDetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [productResponse, setProductResponse] = useState<Product | null>(null);

  const loadData = async () => {
    // API request
    try {
      const response = await fetchProduct(id as string);
      setProductResponse(response.data);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (id) {
      loadData();
    }
    // set state
  }, []);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error!</p>}
      {productResponse && <h2>{productResponse.fields.name}</h2>}
    </div>
  );
}
