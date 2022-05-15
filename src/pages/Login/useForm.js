import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [IsSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };
  

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && IsSubmitting) {
        callback();
      }
    },
    [callback, errors, IsSubmitting]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
