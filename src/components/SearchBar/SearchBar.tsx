import { useLazyGetCoordinatesByCityNameQuery } from '@/api/geocodingApi';
import React, { useState } from 'react';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { SerializedError } from '@reduxjs/toolkit';

interface OpenCageError {
  status?: {
    message?: string;
  };
}

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  //пока не использую данные, просто запускаю запрос при сабмите
  const [refetch, { isFetching, error }] =
    useLazyGetCoordinatesByCityNameQuery();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      refetch(searchTerm); //запускаем запрос в ручную
    }
  };

  const getErrorMessage = (error: FetchBaseQueryError | SerializedError) => {
    if ('data' in error) {
      const opencageError = error.data as OpenCageError;
      if (opencageError?.status?.message) {
        return opencageError.status.message;
      }
    }

    if ('message' in error && typeof error.message === 'string') {
      return error.message;
    }

    return 'Failed to featch location';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder='Enter city name'
        disabled={isFetching}
      />
      <button type='submit' disabled={isFetching}>
        {isFetching ? 'Searching...' : 'Search'}
      </button>
      {error && <div>Error: {getErrorMessage(error)}</div>}
    </form>
  );
};

export default SearchBar;
