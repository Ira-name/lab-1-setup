import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
  it('перевіряє наявність заголовка рівня h1 на сторінці', () => {
    render(<App />);
    // Шукаємо елемент суто за його роллю (h1 відповідає ролі 'heading' з рівнем 1)
    const heading = screen.getByRole('heading', { level: 1 });
    // Перевіряємо, що такий елемент існує в документі
    expect(heading).toBeInTheDocument();
  });
});