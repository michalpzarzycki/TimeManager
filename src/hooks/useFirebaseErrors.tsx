import {useState} from 'react'

export function useFirebaseErrors(error: any) {
    const [authError, setAuthError] = useState<any>('')

    const handleAuthError = (error: any) => {
        const {code} = error;
        if(code==='auth/argument-error') setAuthError('Invalid arguments.');
        else if(code==='auth/network-request-failed') setAuthError('Network request failed. Please check your internet connection and try again.')
        else if(code==='auth/user-disabled') setAuthError('User has been disabled by Administrator.');
        else if(code==='auth/user-not-found') setAuthError('User not found.')
        else if(!code) {
            setAuthError('')
        } else {
            setAuthError('Unknown error, please try again.')       }


    }
    return {handleAuthError, authError}
}

