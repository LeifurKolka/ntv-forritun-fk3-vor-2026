import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from '../Counter/Counter';

describe('Counter', () => {
  const user = userEvent.setup();
  beforeEach(() => {
    render(<Counter />);
  });

  it('increments the counter', async () => {
    await user.click(screen.getByRole('button', { name: 'Hækka' }));
    expect(screen.getByText('1')).toHaveTextContent('1');
  });

  it('decrements the counter', async () => {
    await user.click(screen.getByRole('button', { name: 'Minnka' }));
    expect(screen.getByText('-1')).toHaveTextContent('-1');
  });

  it('resets the counter', async () => {
    await user.click(screen.getByRole('button', { name: 'Hækka' }));
    await user.click(screen.getByRole('button', { name: 'Hækka' }));
    expect(screen.getByText('2')).toHaveTextContent('2');
    await user.click(screen.getByRole('button', { name: 'Endurstilla' }));
    expect(screen.getByText('0')).toHaveTextContent('0');
  });
});
