import React from 'react';
import { useQuery } from '@apollo/client';
import { getBooksQuery } from '../queries/queries';

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);
  if (loading) return <p>Loading books...</p>;
  if (error) return <p>Error</p>;
 
  return (
    <div>
      <ul className="book-list">
        {
          data.books.map(({ name, id }) => (
            <li key={id}>{ name }</li>
          ))
        }
      </ul>
    </div>
  );
}

export default BookList;
