import { api } from '@services/config';
import { Product } from '@model/Product';
import { Products } from '@model/Products';

export interface ProductsResponse {
  records: Product[];
}

export const fetchProducts = () => {
  return api.get<Products>('/products');
}

export const fetchProduct = (id: Product['id']) => {
  return api.get<Product>(`products/${id}`);
}
