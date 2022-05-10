// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAiLni0Ua5qmkGAe4nwwIjtqvLXs1B4-40',
    authDomain: 'quiz-blitz-2d85d.firebaseapp.com',
    projectId: 'quiz-blitz-2d85d',
    storageBucket: 'quiz-blitz-2d85d.appspot.com',
    messagingSenderId: '784665151617',
    appId: '1:784665151617:web:6aa66fdaccd111459c6580',
    measurementId: 'G-9M53DB1H1K',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);