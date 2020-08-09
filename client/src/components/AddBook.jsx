import React from 'react';
import { useQuery } from '@apollo/client';
import { getAuthorsQuery } from '../queries/queries';
import useForm from '../hooks/useForm';

const AddBook = (props) => {
  const { loading, error, data } = useQuery(getAuthorsQuery);
  const { inputs, handleChange, handleSubmit } = useForm(onSubmit);
  function onSubmit() {
    console.log(inputs)
  }

  if (error) return <div>Error</div>;
  return (
    <form className="add-book" onSubmit={ handleSubmit }>
      <div className="field">
        <label>Book name:</label>
        <input type="text" name="name" onChange={ handleChange }/>
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" name="genre" onChange={ handleChange }/>
      </div>
      <div className="field">
        <label>Author:</label>
        <select name="authorId" onChange={ handleChange }>
          <option>Select author</option>
          {
            loading
            ? <option disabled>Loading authors...</option>
            : data.authors.map(({ name, id }) => (
                <option key={ id } value={ id }>{ name }</option>
              ))
          }
        </select>
      </div>

      <button>+</button>
    </form>
  );
}

export default AddBook;