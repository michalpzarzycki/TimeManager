import React, { useState } from 'react';
import styles from './Register.module.css';
import firebase, { db, storage } from '../../../firebase/firebase'
import Login from './Login';
import TextInput from './Inputs/TextInput';
import FileInput from './Inputs/FileInput';
import { useRegisterValidate } from '../../../hooks/useRegisterValidate'
import SubmitButton from './Inputs/SubmitButton';

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
    description:"",
    file:''
            }

export default function Register() {
    const [user, setUser] = useState({INIT_STATE});
    const { errors, isValidate } = useRegisterValidate(user)
    let [buttonDisabled, setButtonDisabled] = useState(true)
    let [buttonLoading, setButtonLoading] = useState(false)
    let [file, setFile] = useState('')
    

    function handleChange(e) {
        console.log(e.target.value)
        setUser({...user, [e.target.name]: e.target.value})
        console.log("ERORS", errors)
        console.log("IS VALIDATE", isValidate)
        isValidate ? setButtonDisabled(false) : setButtonDisabled(true)
    }
    function handleFileChange(e) {
        console.log("jsahfkas", e.target.files[0])
        setUser({...user, 'file': e.target.files[0].type})
        console.log("ERORS", errors)
        console.log("IS VALIDATE", isValidate)
        setFile(e.target.files[0])
        isValidate ? setButtonDisabled(false) : setButtonDisabled(true)
    }
    function handleSubmit(e) {
        e.preventDefault()
        if(isValidate) {
            setButtonLoading(true)
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(() => {
                setButtonLoading(false)
            }).catch(e => {
                setButtonLoading(false)
                console.log("ERROR", e)
            })
            storage.ref().child(`profiles/${user.email}.jpg`).put(file).then(() => {
                console.log("POSZEDL")
            }).catch(
                console.log("NIE POSZEDL")
            )
        } else {
        }
      
       
    
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
            <FileInput error={errors.file} handleFileChange={handleFileChange} name="file" file={file}/>
            <TextInput error={errors.telephone} placeholder="Telephone" handleChange={handleChange} name="telephone"/>
            <TextInput error={errors.city} placeholder="City" handleChange={handleChange} name="city"/>
            <TextInput error={errors.country} placeholder="Country" handleChange={handleChange} name="country"/>
            <textarea  placeholder="opis" name="description" onChange={handleChange}/>
            <SubmitButton buttonDisabled={buttonDisabled} buttonLoading={buttonLoading} placeholder="SUBMIT" handleSubmit={handleSubmit} />
        </form>
    </div>
}