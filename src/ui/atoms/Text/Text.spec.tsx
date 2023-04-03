import { render, screen } from '@testing-library/react';
import { Text } from './Text';
describe('<Text /> component', () => {
  it('should render', () => {
    render(<Text>Napis</Text>)
    expect(screen.getByText('Napis')).toBeDefined();
  });

  // it('should be accessible', () => {
  //   const { container } = render(<Text>Napis</Text>)

  //   expect(axe(container)).toBeAccessible()
  // })
});