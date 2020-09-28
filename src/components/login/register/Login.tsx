import React, { useState, useEffect } from 'react';
import TextInput from './Inputs/TextInput';
import styles from './Login.module.css'
import { withRouter } from 'react-router-dom'
import Hexagon from '../../Hexagon';
import Loader from '../../Loader';
import loginService from '../../../services/loginService'
import { validate } from '../../../validates/loginFormValidation'
import { useFormValidation } from '../../../hooks/useFormValidation';

function Login({ history, userIdSetter, userEmailSetter }: any) {
    interface IUser {
        email: string,
        password: string,
        name?: any
    }
    const [isLoading, setIsLoading] = useState(false)
    //State of user inputs from Login form
    //State of firebase signIn error 
    const [signInError, setSignInError] = useState<string>('')

    const {handleChange, handleSubmit, errors, values} = useFormValidation(callback, validate)
    //Login form submit
    // async function handleSubmit(event: any) {
    //     setIsLoading(true)
    //     event.preventDefault()
    //     let data: any = await loginService.signIn(user.email, user.password)
    //     console.log("DATA", data)
    //         userIdSetter(data.user.uid)
    //         userEmailSetter(data.user.email)
    //         //Turn on the Loader
    //         setIsLoading(false)
    //         //Make sure that there can not be any error messages
    //         setSignInError('')
    //         //Switch route to /
    //         history.push("/")
        
    // }
    function callback() {
        setIsLoading(true)
        loginService.signIn(values.email, values.password)
        .then((data: any) => {
            setIsLoading(false)
        })
        .catch((error: any) => {
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



{/* <div className={styles.leftSideUserDiv}>
                <div className={styles.leftSideUserDivHeader}>USERS</div>
                <div className={styles.leftSideUserDivUsers}>
                    <div className={styles.user1}></div>
                    <div classNa0
                    me={styles.user2}></div>
                    <div className={styles.user3}></div>
                </div>
            </div> */}