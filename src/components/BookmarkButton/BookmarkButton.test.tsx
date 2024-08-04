import React from 'react';
global.React = React;
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BookmarkButton } from '.';
import { useFavStorageContext } from '@components/FavStorageProvider';

// Mock the favStorageContext
jest.mock('@components/FavStorageProvider', () => ({
  useFavStorageContext: jest.fn(),
}));

describe('BookmarkButton', () => {
  let mockCheck: jest.Mock;
  let mockSave: jest.Mock;
  let mockRemove: jest.Mock;

  beforeEach(() => {
    mockCheck = jest.fn();
    mockSave = jest.fn();
    mockRemove = jest.fn();

    (useFavStorageContext as jest.Mock).mockReturnValue({
      check: mockCheck,
      save: mockSave,
      remove: mockRemove,
    });
  });

  it('renders with bookmark icon when not saved to favorites', () => {
    mockCheck.mockReturnValue(false);

    render(<BookmarkButton id={1} />);

    expect(
      screen.getByAltText(
        'Empty bookmark icon meaning the artwork is not in the favourites',
      ),
    ).toBeInTheDocument();
    expect(
      screen.queryByAltText(
        'Filled bookmark icon meaning the work was marked as favourite',
      ),
    ).not.toBeInTheDocument();
  });

  it('renders with filled bookmark icon when saved to favorites', () => {
    mockCheck.mockReturnValue(true);

    render(<BookmarkButton id={1} />);

    expect(
      screen.getByAltText(
        'Filled bookmark icon meaning the work was marked as favourite',
      ),
    ).toBeInTheDocument();
    expect(
      screen.queryByAltText(
        'Empty bookmark icon meaning the artwork is not in the favourites',
      ),
    ).not.toBeInTheDocument();
  });

  it('handles profile prop correctly', () => {
    mockCheck.mockReturnValue(false);

    const { container } = render(<BookmarkButton id={1} profile={true} />);

    expect(container.querySelector('button')).toHaveClass('sc-braxZu bYrekN');
  });
});
