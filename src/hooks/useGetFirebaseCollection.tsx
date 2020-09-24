import { useEffect, useState } from 'react'
import {db} from '../firebase/firebase'

export function useGetFirebaseCollection(collection: any) {
    const [error, setError] = useState<any>(false)
    const [data, setData] = useState<any>([])
    useEffect(() => {
        const unsubscribe = db.collection(`${collection}`).onSnapshot((snapshot: any) => {
            let arr: any[] = [];
                snapshot.forEach((doc: any) => { 
                arr.push({ ...doc.data(), id: doc.id })
                })
                setData([...arr])
        }, (error: any) => setError(error))
            // returning the unsubscribe function will ensure that
            // we unsubscribe from document changes when our id
            // changes to a different value.
            return () => unsubscribe()
          },
          [collection]
        )
    return {
        error,
        data
    }    
}
