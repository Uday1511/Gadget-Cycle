import { db } from '../firbase/config';
import { getDoc, doc } from 'firebase/firestore';


const getPass = async (email) => {
    const docRef = doc(db, 'pass', 'pass');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        const docData = docSnap.data();
        const empass = docData.empass;
        const currPass = empass[email];
        return currPass;
    } else {
        throw new Error('Document does not exist!');
    }
}

export default getPass;
