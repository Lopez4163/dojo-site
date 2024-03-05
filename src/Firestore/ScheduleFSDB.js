import { initializeApp } from "firebase/app"
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  addDoc,
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDCSnmktC2dx8-NI7htUIm7JINd9yFtRfI",
  authDomain: "dojoapp-6e682.firebaseapp.com",
  projectId: "dojoapp-6e682",
  storageBucket: "dojoapp-6e682.appspot.com",
  messagingSenderId: "878668898989",
  appId: "1:878668898989:web:53a2478778069363dd9c24",
  measurementId: "G-C9EH7SZPSC",
}
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const fireStoreScheduleDB = async () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  for (const day of daysOfWeek) {
    const dayDocRef = doc(db, "schedule", day)
    await setDoc(dayDocRef, {})

    const classesCollectionRef = collection(dayDocRef, "classes")
    await addDoc(classesCollectionRef, {
      type: "test",
      instructor: "test",
      timeStart: "test",
      timeEnd: "test",
      duration: "test",
    })
  }

  console.log("Firestore structure created successfully")
}

fireStoreScheduleDB()
