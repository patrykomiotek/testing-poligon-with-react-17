import { render, screen, act, waitFor } from "@testing-library/react";
import { ProductsListWithUseApi } from "./ProductsListWithUseApi";

describe('<ProductsListWithUseApi />', () => {
  it('should display indicator after mount', async () => {
    render(<ProductsListWithUseApi />);

    // instead of wrapping in act
    await waitFor(() => {
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
  });

  it('should display data after mount', async () => {
    render(<ProductsListWithUseApi />);

    // UI changes, option select, checkboxes
    await waitFor(() => {
      expect(screen.getByText('Products')).toBeInTheDocument();
    })
  });
});