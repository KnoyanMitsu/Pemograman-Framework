import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  addDoc,
  where,
} from "firebase/firestore";
import app from "@/utils/db/firebase";
import bcrypt from "bcrypt";

const db = getFirestore(app);

export async function retrieveProducts(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

export async function retrieveProductByID(collectionName: string, id: string) {
  const docRef = doc(db, collectionName, id);
  const snapshot = await getDoc(docRef);
  const data = snapshot.data();
  return data ? { id: snapshot.id, ...data } : null;
}

export async function signUp(
  userData: {
    email: string;
    fullname: string;
    password: string;
    role?: string;
  },
  callback: Function,
) {
  try {
    const q = query(
      collection(db, "users"),
      where("email", "==", userData.email),
    );
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      return callback({ status: "error", message: "User already exists" });
    }

    userData.password = await bcrypt.hash(userData.password, 10);
    userData.role = userData.role || "member";

    await addDoc(collection(db, "users"), userData);
    callback({ status: "success", message: "User registered successfully" });
  } catch (error: any) {
    callback({ status: "error", message: error.message });
  }
}

export async function signIn(email: string) {
  const q = query(collection(db, "users"), where("email", "==", email));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const doc = querySnapshot.docs[0];
    return { id: doc.id, ...doc.data() };
  } else {
    return null;
  }
}
