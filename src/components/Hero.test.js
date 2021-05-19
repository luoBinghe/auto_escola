import React from 'react';
import { render } from '@testing-library/react';
import Hero from './Hero';

test('Renders Hero with children', () => {
  const { debug, getByText } = render(
    <Hero>
      <p>teste</p>
    </Hero>
  )

  debug();

  expect(getByText("teste")).toBeInTheDocument();
});

test("renders background image", () => {
  const image = "http://test/image.jpg";
  const { debug, getByTestId } = render(<Hero image={image} />);

  debug();

  expect(getByTestId("image")).toHaveStyleRule({
    backgroundImage: image
  });
});