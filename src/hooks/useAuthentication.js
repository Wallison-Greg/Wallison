import {db} from '../firebase/Api'
import {getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';

//hooks
import { useState, useEffect } from 'react';

export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    //cleanup - deal with memory leak
    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();

    function checkIfIsCancelled () {
        if (cancelled){
            return
        }
    };

    //logout
    const logout = () => {
        checkIfIsCancelled();
        signOut(auth)
    };

    //login
    const login = async (data) => {
        checkIfIsCancelled();

        setLoading(true);
        setError(false);

        try {
            
            await signInWithEmailAndPassword(auth, data.email, data.password);

            setLoading(false);

        } catch (error) {
            let systemErrorMessage;

            if(error.message.includes("user-not-found")){
                systemErrorMessage = 'Usuario invalido';
            }else if(error.message.includes("wrong-password")){
                systemErrorMessage = 'Senha incorreta';
            }else{
                systemErrorMessage = 'Erro, tente mais tarde!'
            }

            setError(systemErrorMessage);
            setLoading(false);
        }
    }

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {
        auth, 
        loading,
        error,
        logout,
        login
    }
}

