import { render, screen } from '@testing-library/react';
import Smile from '../Smile';

test('test_case01', () => {
  render(<Smile />);
  const linkElement = screen.getByText(/Smile Component/i);
  expect(linkElement).toBeInTheDocument();
});
test('test_case02',()=>
{
  render(<Smile/>);
  const myElement=screen.getByRole('img');
  expect(myElement).toBeInTheDocument();
});