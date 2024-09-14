import { name } from "ejs";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe4eiEhdItRMnQ4_oXoSM5YMWqxS2N8xY",
  authDomain: "chat-app-vd.firebaseapp.com",
  projectId: "chat-app-vd",
  storageBucket: "chat-app-vd.appspot.com",
  messagingSenderId: "270273598629",
  appId: "1:270273598629:web:108af33c8bf9a48952694c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username, email, password) =>{
try{
    const res = await createUserWithEmailAndPassword(auth,email,password)
    const user = res.user;
    await setDoc(doc(db,"users",user.uid),{
        id:user.uid,
        username:username.toLowerCase(),
        email,
        name:"",
        avatar:"",
        bio:"Hey, There i am using chat app",
        lastSeen:Date.now()
    })
    await setDoc(doc(db,"chats",user.uid),{
        chatData:[]
    })
} catch(error){
    console.log(error)
        toast.error(error.code.split("/")[1].split("-").join(" "));
}}

const login = async (email,password) => {
    try{
        await signInWithEmailAndPassword(auth, email,password);
    } catch (error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout =async () =>{

    try{
          await signOut(auth)

    } catch (error){
        console.log(error)
        toast.error(error.code.split("/")[1].split("-").join(" "));

    }

}

export {signup,login,logout,auth,db}