// Imports
import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import userEvent from '@testing-library/user-event';

// To Test
import { WrappedApp, App } from '../App';

// Tests
describe('Renders main page correctly', async () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render the page correctly', async () => {
    render(<WrappedApp />);
    const h1 = screen.queryByText('Teste');
    expect(h1).toBeInTheDocument();
  });
  it('Should Have the text teste', async () => {
    render(<WrappedApp />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Teste'
    );
  });
  it('Renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Not Found');
  });
});
