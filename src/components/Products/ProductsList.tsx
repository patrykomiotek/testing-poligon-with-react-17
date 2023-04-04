import { Link } from 'react-router-dom';
import { fetchProducts } from '@services/products';
import { Products } from '@model/Products';
import { useApi } from '@hooks/useApi';

export const ProductsList = () => {
  // const { data, isError, isLoading } = useApi<Products>(() => fetchProducts('jakies-parametry'));
  const { data, isError, isLoading } = useApi<Products>(fetchProducts);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error!</p>}
      {data && data.records.map((item) => {
        return (
          <div key={item.id}>
            {/* <p><Link to={`/products/${item.id}`}>{item.fields.name}</Link></p> */}
            <p>{item.fields.name}</p>
          </div>
        )
        // <Product key={item.id} data={} />
      })}
    </div>
  );
}
