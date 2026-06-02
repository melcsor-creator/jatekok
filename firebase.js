// Firebase konfig — globálisan elérhető
const firebaseConfig = {
  apiKey: "AIzaSyAcWZoR6oYzims_SNZtHxcCmUgxusKseHM",
  authDomain: "utveszto-fff3b.firebaseapp.com",
  projectId: "utveszto-fff3b",
  storageBucket: "utveszto-fff3b.firebasestorage.app",
  messagingSenderId: "864697347194",
  appId: "1:864697347194:web:8f0e8ad8fdbf14cc285fc3",
  measurementId: "G-CN9ER0LFPN"
};

// Firebase inicializálás (compat SDK — nem ES modul, mindenhol működik)
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
