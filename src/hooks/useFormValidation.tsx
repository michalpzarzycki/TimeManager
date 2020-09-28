import { useEffect, useState } from 'react'

export function useFormValidation(callback: any, validate: any) {
const [errors, setErrors] = useState<any>({});
const [values, setValues] = useState<any>({});
const [isSubmit, setIsSubmit] = useState(false);

useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      callback();
    }
  }, [errors, isSubmit]);

    const handleChange = (event: any) => {
        event.persist();
        setValues((values: any) => ({...values, [event.target.name]: event.target.value}))
        setErrors({...validate(values)})
    }
    const handleSubmit = (event: any) => {
      console.log("ERRORS", errors)
        event.preventDefault();
        setIsSubmit(true)
    }

    return { handleSubmit, handleChange, errors, values}
}