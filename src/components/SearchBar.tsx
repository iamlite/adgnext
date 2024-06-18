'use client';

import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    onSearch(query);
  }, [query, onSearch]);

  return (
    <div className='flex items-center mb-4'>
      <label className='input input-bordered flex items-center gap-2'>
        <input
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='grow'
          placeholder='Search'
        />
        <FaSearch className='w-4 h-4 opacity-70' />
      </label>
    </div>
  );
};

export default SearchBar;
