/* eslint-disable */

import firebase, { db, storage } from '../firebase/firebase'

export default class registerService {
    userEmail: string
    userPassword: string
    errorMessage: string
    isLoading: boolean
    userName: string
    userSurname: string
    userNickname: string
    userTelephone: string
    userCity:string
    userCountry: string
    userDescripion: string
    userPhoto: any
    darkMode: any
    font: any
    locations: any
    constructor(user: any, file: any) {
        let {email, password, name, surname, nickname, telephone, city, country, description} = user
        this.userEmail = email,
        this.userPassword = password,
        this.userName = name,
        this.userSurname = surname,
        this.userNickname = nickname,
        this.userTelephone = telephone,
        this.userCity = city,
        this.userCountry = country,
        this.userDescripion = description,
        this.errorMessage = '',
        this.isLoading = false
        this.userPhoto = file
        this.darkMode = false
        this.font = ''
        this.locations=[]
    }
     async setUserPhotoInStorage() {
         return new Promise((resolve, reject) => {
            storage.ref().child(`profiles/${this.userEmail}.jpg`).put(this.userPhoto)
            .then(() => {
                resolve()
            })
            .catch(() => {
                 reject()
            })
       
         })
    }
     async createUserInDatabase() {
            return new Promise((resolve, reject) => {
                db.collection("users")
                .add({
                    email: this.userEmail,
                    password: this.userPassword,
                    name: this.userName,
                    surname: this.userSurname,
                    nickname: this.userNickname,
                    telephone: this.userTelephone,
                    city: this.userCity,
                    country: this.userCountry,
                    description: this.userDescripion,
                    darkMode:this.darkMode,
                    font:this.font,
                    locations:this.locations=[]
            })
                .then(() => {
                    resolve(this.userEmail)
                })
            })
    }
    async registerUser() {
             //create user in firebase auth
             firebase.auth().createUserWithEmailAndPassword(this.userEmail, this.userPassword)            
             //create user in firestore
             this.createUserInDatabase()
    }   
}

