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
    static createForumPost(post: any) {
        db.collection('forum').add(post).then(() => {console.log("GOOD")}).catch((err: any) => {console.log("BAD", err)})
    }
    static getCategoryTopics(category: any) {
        return new Promise((resolve, reject) => {
            db.collection('forum').where('category', '==', category).get().then((data: any) => {
                let arr: any[] = []
                data.forEach((element: any) => {
                  arr.push(element.data()) 
                   
                });
                resolve(arr)
            }).catch((err: any) => {
                reject(err)
            })
        })
        
    }

}
