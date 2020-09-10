import {db} from '../firebase/firebase';

export default class communityService {
    constructor() {}

    static getShoutBoxSnapshot(setter: any) {
        
        db.collection("shoutbox").onSnapshot((snapshot: any) =>  {
        let arr: any[] = [];
        snapshot.forEach((doc: any) => arr.push(doc.data()))
        setter([...arr])
        })  
    }

    static sendMessageToShoutBox(message: any) {
        db.collection('shoutbox').add(message).then(() => {
            console.log("SHOYBOX MESSAGE SENDED SUCCESFULLY")
        }).catch(err => {
            console.log("SOMETHING WENT WRONG: ", err)
        })
    }

}
