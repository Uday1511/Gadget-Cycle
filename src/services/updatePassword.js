import { auth } from '../firbase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import getPass from './getPass';

const updatePass = async (email, password) => {
    try {
        const currPass = getPass(email);
        console.log(currPass);
        const userCredential = await signInWithEmailAndPassword(auth, email, currPass);
        const user = userCredential.user;
        user.delete();
        await createUserWithEmailAndPassword(auth, email, password);
    }  catch (error) {
        console.error("Error registering new user:", error);
        throw error;
    }
};

export default updatePass;
