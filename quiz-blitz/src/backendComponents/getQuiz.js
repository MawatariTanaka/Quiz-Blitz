import { app } from './firebaseConfig';
import { getFirestore } from 'firebase/firestore';
import { collection, doc, setDoc } from 'firebase/firestore';
const database = getFirestore(app);
export const questionsDatabase = collection(database, 'questions');
