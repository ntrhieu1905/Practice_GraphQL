import React from 'react';
import { useQuery, gql } from '@apollo/client';

const getBooksQuery = gql`
  {
    books {
      name
      genre
      id
    }
  }
`;

function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data)
  return data.books.map(({ name, id }) => (
    <div key={name}>
      <p>
        {name}: {id}
      </p>
    </div>
  ));

  // return (
  //   <div>
  //     <ul className="book-list">
  //       <li>Book name</li>
  //     </ul>
  //   </div>
  // );
}

export default BookList;
