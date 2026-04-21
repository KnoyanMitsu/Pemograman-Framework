// import { retrieveData } from '@/utils/db/servicesfirebase';
import {getFirestore, collection, getDocs,getDoc,Firestore, doc} from "firebase/firestore";
import app from "./firebase";

const db = getFirestore(app);

export async function retrieveProduct(collectionName: string) {
    const snapshot = await getDocs(collection(db, collectionName));
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));
    return data;
}

export async function retrieveDataByID(collectionName:string, id:string) {
    const snapshot = await getDoc(doc(db, collectionName, id));
    if (snapshot.exists()) {
        return snapshot.data();
    }
    return null;
}