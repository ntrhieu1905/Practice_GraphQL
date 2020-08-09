import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// components
import BookList from './components/BookList';
import AddBook from './components/AddBook';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="main">
        <h1>Reading List</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
