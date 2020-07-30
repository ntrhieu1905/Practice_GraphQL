import { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} 
from 'graphql';
import _ from 'lodash';

const books = [
  { name: 'Name book 1', genre: 'Fantasy', id: '1', authorId: '1'},
  { name: 'Name book 2', genre: 'Fantasy', id: '2', authorId: '2'},
  { name: 'Name book 3', genre: 'Sci-Fi', id: '3', authorId: '3'},
  { name: 'Name book 4', genre: 'Sci-Fi', id: '4', authorId: '3'},
];

const authors = [
  { name: 'Hieu Nguyen', age: '22', id: '1'},
  { name: 'Admin 1', age: '30', id: '2'},
  { name: 'Admin 2', age: '25', id: '3'},
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return _.find(authors, { id: parent.authorId });
      }
    }
  })
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return _.filter(books, { authorId: parent.id });
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(books, { id: args.id });
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(authors, { id: args.id });
      }
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return books;
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return authors;
      }
    }
  }
});

export default new GraphQLSchema({
  query: RootQuery
});