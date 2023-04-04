import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '@services/products';
import { Products } from '@model/Products';


export const ProductsList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [productResponse, setProductResponse] = useState<Products | null>(null);

  const loadData = async () => {
    // API request
    try {
      const response = await fetchProducts();
      setProductResponse(response.data);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadData();
    // set state
  }, []);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error!</p>}
      {productResponse && productResponse.records.map((item) => {
        return (
          <div key={item.id}>
            <p><Link to={`/products/${item.id}`}>{item.fields.name}</Link></p>
          </div>
        )
        // <Product key={item.id} data={} />
      })}
    </div>
  );
}
