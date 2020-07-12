import React, { useState } from 'react';
import styles from './Register.module.css';
import firebase, { db } from '../../../firebase/firebase'
import Login from './Login';
import TextInput from './Inputs/TextInput';
import FileInput from './Inputs/FileInput';
import { useRegisterValidate } from '../../../hooks/useRegisterValidate'

const INIT_STATE = {
    email : '',
    password: "",
    repeatPassword:"",
    name:"",
    surname:"",
    nickname:"",
    telephone:"",
    city:"",
    country:"",
    description:""
            }

export default function Register() {
    const [user, setUser] = useState({INIT_STATE});
    const { errors } = useRegisterValidate(user)


    function handleChange(e) {
        console.log(e.target.value)
        setUser({...user, [e.target.name]: e.target.value})
        console.log("ERORS", errors)
    }
    function handleSubmit(e) {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(() => {
       
        }).catch(e => {
            console.log("ERROR", e)
        })
       
    
        db.collection("users").add({
            email: user.email,
            password: user.password,
            name: user.name,
            surname: user.surname,
            nickname: user.nickname,
            telephone: user.telephone,
            city:user.city,
            country: user.country,
            description: user.description,



        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    }
    return <div className={styles.mainDiv}>
      <h1 className={styles.header}>REGISTER FORM</h1>
        <form className={styles.form}>
            <TextInput type="email" placeholder="email" handleChange={handleChange} name="email"/>
            <TextInput error={errors.password} type="password" placeholder="password" handleChange={handleChange} name="password"/>
            <TextInput error={errors.repeatPassword} placeholder="ResetPassword" type="password" handleChange={handleChange} name="repeatPassword"/>
            <TextInput error={errors.name} placeholder="Name" handleChange={handleChange} name="name"/>
            <TextInput error={errors.surname} placeholder="Surname" handleChange={handleChange} name="surname"/>
            <TextInput error={errors.nickname} placeholder="Nickname" handleChange={handleChange} name="nickname"/>
            <FileInput />
            <TextInput error={errors.telephone} placeholder="Telephone" handleChange={handleChange} name="telephone"/>
            <TextInput error={errors.city} placeholder="City" handleChange={handleChange} name="city"/>
            <TextInput error={errors.country} placeholder="Country" handleChange={handleChange} name="country"/>
            <textarea  placeholder="opis" name="description"/>
            <button type="submit" onClick={handleSubmit}>REGISTER</button>
        </form>
    </div>
}