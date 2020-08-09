import { useState } from 'react';

const useForm = (callback) => {  
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    e.persist();
    setInputs({...inputs, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    callback();
  }

  return {
    handleChange,
    handleSubmit,
    inputs
  };
}

export default useForm;