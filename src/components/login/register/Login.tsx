import React, { useState } from 'react';
import TextInput from './Inputs/TextInput';
import styles from './Login.module.css'
import { withRouter } from 'react-router-dom'
import Hexagon from '../../Hexagon';
import Loader from '../../Loader';
import loginService from '../../../services/loginService'
import { validate } from '../../../validates/loginFormValidation'
import { useFormValidation } from '../../../hooks/useFormValidation';

function Login({ history }: any) {

    const [isLoading, setIsLoading] = useState(false)
    //State of firebase signIn error 
    const [signInError, setSignInError] = useState<string>('')
    const {handleChange, handleSubmit, errors, values} = useFormValidation(callback, validate)

    function callback() {
        console.log("CB")
        setIsLoading(true)
        loginService.signIn(values.email, values.password)
        .then((data: any) => {
            console.log("SUVVESS")
            setIsLoading(false)
            history.push("/")

        })
        .catch((error: any) => {
            console.log("AJC")
            setIsLoading(false)
            setSignInError(error.message)
        })
    }
    
    return (
        <div className={styles.mainDiv}>
            <div className={isLoading ?  styles.loader : styles.none}>
                <Loader />
            </div>
            <section className={styles.leftSide}>
                <Hexagon />
            </section>
            <section className={styles.rightSide}>
                <form className={styles.form} onSubmit={handleSubmit} >
                    {signInError && <h1 className={styles.errorMessage}>{signInError}</h1>}
                        <TextInput
                            type="email"
                            placeholder="email" 
                            name="email" 
                            value={values.email} 
                            handleChange={handleChange} />
                        <TextInput 
                            type="password" 
                            placeholder="password" 
                            name="password" 
                            value={values.password} 
                            handleChange={handleChange} />
                    <button type="submit">ENTER</button>
                </form>
            </section>
        </div>)
}


export default withRouter(Login)