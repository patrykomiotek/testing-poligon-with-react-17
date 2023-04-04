import { useApi } from '@hooks/useApi';
import { Products } from '@model/Products';
import { fetchProducts } from '@services/products';

const ProductsListWithUseApi = () => {
  const { data, isLoading, isError } = useApi<Products>(fetchProducts);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error!</p>}
      {data && <h1>Products</h1>}
      {data && data.records.map((elem) => (
        <div key={elem.id}> {/* useId */}
          <h2>{elem.fields.name}</h2>
        </div>
      ))}
    </div>
  );
}

export { ProductsListWithUseApi };
