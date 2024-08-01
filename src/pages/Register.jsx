import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./styles/register.css";
import Add from "../assets/addAvatar.png"
import { auth, storage, db } from "../config/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Register() {
  
  const navigate = useNavigate();

  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [img, setImg] = useState(null);
  const [err, setErr] = useState(false);


  const signIn = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      alert("Signed In ");

      // To get image URL
      const storageRef = ref(storage, `images/${img.name}`);
      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          setErr(true);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          await updateProfile(res.user, {
            displayName: name,
            photoURL: downloadURL,
          });
          await setDoc(doc(db, 'users', res.user.uid), {
            uid: res.user.uid,
            name,
            email,
            photoURL: downloadURL,
          });

          await setDoc(doc(db,"usersChats", res.user.uid),{});
         
        }
      );

    } catch (err) {
      console.error("Something went wrong", err);
      setErr(true);
    }
     navigate("/");
  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form onSubmit={signIn}>
          <input required type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
          <input required type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input required type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <input style={{ display: "none" }} type="file" id="file" onChange={(e) => setImg(e.target.files[0])} />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>
          You do have an account?
        </p>
      </div>
    </div>
  );
}
