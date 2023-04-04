import { screen, render, waitFor, act } from '@testing-library/react';

import { ProductsList } from './ProductsList';

describe('<ProductList /> component', () => {
  it('should display Loading indicator', () => {
    render(<ProductsList />);
    expect(screen.getByText('Loading...')).toBeDefined();
  });
  it('should display products', async () => {
    act(() => {
      render(<ProductsList />);
    });
    expect(await screen.findByText('iPhone 17')).toBeInTheDocument();
  });
});