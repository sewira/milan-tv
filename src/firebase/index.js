import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAQ9C5TdFOURtzWZsSMIuTjPcuLMGxAF84',
  authDomain: 'upload-image-d4daa.firebaseapp.com',
  projectId: 'upload-image-d4daa',
  storageBucket: 'upload-image-d4daa.appspot.com',
  messagingSenderId: '939758529157',
  appId: '1:939758529157:web:048458f75c6bd73cf397ec',
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
