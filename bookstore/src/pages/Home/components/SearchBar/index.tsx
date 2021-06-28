import React, { ChangeEvent, useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { Container, SearchInput } from './styles';
import { api } from '../../../../services/googleBooks';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    api.get(`${query}`).then(response => {
      setBooks(response.data.items);
    });
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  return (
    <Container onSubmit={e => handleSubmit(e)}>
      <BiSearchAlt />
      <SearchInput
        type="text"
        placeholder="Search boock"
        onChange={handleChange}
      />
    </Container>
  );
}
