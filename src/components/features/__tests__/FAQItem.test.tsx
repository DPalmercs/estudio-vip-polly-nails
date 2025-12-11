import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { FAQItem } from '../FAQItem';

const mockFaq = {
  id: 1,
  question: 'O processo dói?',
  answer: 'Não, é 100% confortável.',
};

describe('FAQItem', () => {
  test('toggles answer visibility and updates aria attributes', () => {
    render(<FAQItem item={mockFaq} />);
    const button = screen.getByRole('button', { name: mockFaq.question });
    const panel = screen.getByRole('region');

    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(panel).toHaveTextContent(mockFaq.answer);
    expect(panel.className).not.toContain('open');

    fireEvent.click(button);

    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(panel.className).toContain('open');
  });
});
