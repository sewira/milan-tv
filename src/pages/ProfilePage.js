// import React, { useState } from 'react';
// import './profile.css';
// import { render } from 'react-dom';
// import { storage } from '../firebase';
// import jwt_decode from 'jwt-decode';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';

// const ProfilePage = () => {
//   const [name, setName] = useState('');
//   const [image, setImage] = useState(null);
//   const [url, setUrl] = useState('');
//   const [progress, setProgress] = useState(0);

//   const { token, fullname } = useSelector((state) => state.login);
//   const { id, username, email } = jwt_decode(token);

//   const handleChange = (e) => {
//     if (e.target.files[0]) {
//       setImage(e.target.files[0]);
//     }
//   };

//   console.log(name);
//   const handleUpload = () => {
//     const uploadTask = storage.ref(`images/${image.name}`).put(image);
//     uploadTask.on(
//       'state_changed',
//       (snapshot) => {
//         const progress = Math.round(
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//         );
//         setProgress(progress);
//       },
//       (error) => {
//         console.log(error);
//       },
//       () => {
//         storage
//           .ref('images')
//           .child(image.name)
//           .getDownloadURL()
//           .then((url) => {
//             setUrl(url);
//           });
//       }
//     );

//     const newData = {
//       id: id,
//       fullname: name,
//       username: username,
//       email: email,
//       profile_picture: url,
//     };

//     const config = {
//       headers: { Authorization: token },
//     };

//     axios
//       .put(
//         'https://movie-app-teamc.herokuapp.com/api/user/update',
//         newData,
//         config
//       )
//       .then((response) => console.log(response))
//       .catch((error) => console.log(error));
//   };

//   return (
//     <div className="profile">
//       <label>Fullname</label>
//       <input
//         type="text"
//         placeholder={fullname}
//         onChange={(e) => {
//           setName(e.target.value);
//         }}
//       />
//       <label>Photo profile</label>
//       <input type="file" onChange={handleChange} />
//       <button onClick={handleUpload}>Edit</button>
//       <h1>{fullname}</h1>
//       <img src={url} alt="" />
//     </div>
//   );
// };

// export default ProfilePage;
