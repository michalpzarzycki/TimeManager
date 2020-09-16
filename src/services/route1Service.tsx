import { db } from "../firebase/firebase"
import { resolve } from "url"
import Task from "../components/taskslist/Task"

export default class route1Service {
    constructor() {}


    static createTask(createdTask: any) {
        return new Promise((resolve, reject) => {
            db.collection('tasks').add({...createdTask}).then(() => {
                console.log("ADDED", createdTask)
                resolve()
            }).catch((err: any) => {
                console.log("STH WENT WRONG", err)
                reject()
            })
        })
    }
    static deleteTask(taskToDeleteId: any) {
        return new Promise((resolve, reject) => {
            db.collection('tasks').doc(taskToDeleteId).delete().then(() => {
                resolve()
            }).catch((err: any) => reject(err) )
        })
    }
    static getUserTasksSnapshot(userEmail: any, setter: any) {
            db.collection("tasks").where("user", "==", `${userEmail}`)
            .onSnapshot(function (querySnapshot) {
                let arr: any[] = []
                querySnapshot.forEach(function (doc) {
                    arr.push({ ...doc.data(), docId: doc.id })
                });
                setter([...arr])
            })    
}
    static editTask(taskId: any, updatedTask: any) {
            return new Promise((resolve, reject) => {
                db.collection('tasks').doc(taskId).update({...updatedTask})
                    .then(() => {
                        resolve()
                    })
                    .catch(() => {
                        reject()
                    })
            })
    }
    static changeDoneTask(taskId: any, taskDone: any) {
        return new Promise((resolve, reject) => {
            db.collection('tasks').doc(taskId).update({
                done: !taskDone
            })
            .then(() => resolve())
            .catch(() => reject())
        })
    }

    static setTaskCompleted(doneTask: any, taskId: any) {
        return new Promise((resolve, reject) => {
            Promise.all([ db.collection('doneTasks').add({ ...doneTask }), db.collection('tasks').doc(taskId).delete()])
                    .then(() => {
                        console.log("DONE COMPLETED")
                        resolve()
                    })
                    .catch(() => {
                        console.log("STH WENT WRON")
                        reject()
                    })
            
        })
    }
    static setTaskUncompleted(uncompletedTask: any, taskId: any) {
        return new Promise((resolve, reject) => {
            Promise.all([db.collection('uncompletedTasks').add({...uncompletedTask}), db.collection('tasks').doc(taskId).delete()]).then(() => {
                resolve()
            }).catch(() => {
                reject()
            })
        })
    }
}


