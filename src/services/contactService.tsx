import {db} from '../firebase/firebase'
export default class contactService {
    constructor() {}

    static sendSuggestion(values: any, setHeaderContent: any) {
        db.collection('suggestions').add({values}).then(() => {            
            setHeaderContent('YOUR SUGGESTION HAS BEEN SENDED!')
        }).catch(() => {
            setHeaderContent('STH WENT WRONG ;(, TRY AGAIN')
        })
    }
} 