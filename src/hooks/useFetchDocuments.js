import { useState, useEffect } from "react";
import { db } from "../firebase/Api";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

export const useFetchDocuments = (docCollection) =>{

    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    //memory leak
    const [cancelled, setCancelled] = useState(false);

    useEffect(() => {

        async function loadingData () {
            if(cancelled) return

            setLoading(true);

            const collectionRef = await collection(db, docCollection);

            try {
                let q;

                q = await query(collectionRef, orderBy("createdAt", 'desc'));

                await onSnapshot(q, (querySnapshot) => {
                    setDocuments(
                        querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data()
                        }))
                    )
                })

                setLoading(false);

            } catch (error) {
                setError(error.message);
                setLoading(false)
            }
        }

        loadingData();

    }, [docCollection, cancelled]);
    
    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {
        documents, 
        loading,
        error
    }
}