import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { QuoteCard } from '../Quote/QuoteCard';

vi.mock('@/lib/quotes', () => ({
  fetchRandomQuote: vi.fn(),
}));

import { fetchRandomQuote } from '@/lib/quotes';

const mockedFetchRandomQuote = vi.mocked(fetchRandomQuote);

describe('QuoteCard', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    mockedFetchRandomQuote.mockReset();
  });

  it('sýnir tilvitnun frá mockaðri fetchRandomQuote', async () => {
    mockedFetchRandomQuote.mockResolvedValue('„Prófun“ — Nemandi');

    render(<QuoteCard />);
    await user.click(screen.getByRole('button', { name: 'Sækja quote' }));

    expect(await screen.findByRole('status')).toHaveTextContent(
      '„Prófun“ — Nemandi',
    );
    expect(mockedFetchRandomQuote).toHaveBeenCalledTimes(1);
  });

  it('sýnir villu þegar fetchRandomQuote kastar villu', async () => {
    mockedFetchRandomQuote.mockRejectedValue(new Error('net'));

    render(<QuoteCard />);
    await user.click(screen.getByRole('button', { name: 'Sækja quote' }));

    expect(await screen.findByRole('alert')).toHaveTextContent(
      'Ekki tókst að sækja quote.',
    );
    expect(mockedFetchRandomQuote).toHaveBeenCalledTimes(1);
  });
});
