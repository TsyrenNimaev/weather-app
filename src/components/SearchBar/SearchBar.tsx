import { useGetCoordinatesByCityNameQuery } from '@/api/geocodingApi';
import React, { useEffect, useState } from 'react';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { SerializedError } from '@reduxjs/toolkit';

interface OpenCageError {
  status?: {
    message?: string;
  };
}

interface SearchBarProps {
  onCitySelect: (lat: number, lon: number, name: string) => void;
}

const SearchBar = ({ onCitySelect }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const { data, refetch, isFetching, error } = useGetCoordinatesByCityNameQuery(
    searchTerm,
    { skip: true }
  );

  // const [refetch, { isFetching, error }] =
  //   useLazyGetCoordinatesByCityNameQuery();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      refetch();
    }
  };

  //Обработка успешного ответа геокодинга
  useEffect(() => {
    if (data && data.results.length > 0) {
      const firstResult = data.results[0];
      const { lat, lng: lon } = firstResult.geometry;
      const cityName =
        firstResult.components.city ||
        firstResult.components.towm ||
        searchTerm;
      onCitySelect(lat, lon, cityName);
    }
  }, [data, searchTerm, onCitySelect]);

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
      {isFetching && <div>Loading cities...</div>}
      {error && <div>Error: {getErrorMessage(error)}</div>}
      {/*Позже добавить вывод списка data.results для выбора */}
    </form>
  );
};

export default SearchBar;
