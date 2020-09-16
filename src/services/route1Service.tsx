import { db } from "../firebase/firebase"
import { resolve } from "url"

export default class route1Service {
    constructor() {}


    static createTask(id: any, createdTask: any) {
        return new Promise((resolve, reject) => {
            db.collection('tasks').doc(id).set({createdTask}).then(() => {
                resolve()
            }).catch(() => {reject()})
        })
    }
    static deleteTask(taskToDeleteId: any) {
        return new Promise((resolve, reject) => {
            db.collection('tasks').doc(taskToDeleteId).delete().then(() => {
                resolve()
            }).catch((err: any) => reject(err) )
        })
    }
    static getUserTasksSnapshot(userId: any) {
        return new Promise((resolve) => {
            db.collection("tasks").where("userId", "==", userId)
            .onSnapshot(function (querySnapshot) {
                let arr: any[] = []
                querySnapshot.forEach(function (doc) {
                    arr.push()
                    arr.push({ ...doc.data(), docId: doc.id })
                });
                resolve(arr)
            })
        })
     
}
}

