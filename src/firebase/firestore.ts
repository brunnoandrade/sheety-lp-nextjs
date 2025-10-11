import { collection, addDoc } from "firebase/firestore";
import { db } from "./config";

export async function saveUserEmail(email: string) {
  try {
    const docRef = await addDoc(collection(db, "leads"), {
      email,
      createdAt: new Date(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error saving email:", error);
    return { success: false, error };
  }
}
