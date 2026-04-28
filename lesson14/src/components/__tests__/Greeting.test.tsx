import { render, screen } from '@testing-library/react';
import { Greeting } from '../Greeting/Greeting';

describe('Greeting', () => {
  it('renderar fyrirsögn', () => {
    render(<Greeting />);
    expect(screen.getByRole('heading', { name: 'Kveðja' })).toBeInTheDocument();
  });
});
