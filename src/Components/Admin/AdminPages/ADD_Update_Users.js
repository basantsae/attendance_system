// import React, { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { useParams, useNavigate } from 'react-router-dom';
// import { getUserById } from '../AdminServices/Data';

// function ADD_Update_Users({ users, addUser, editUser }) {
//   const [image, setImage] = useState("https://afl.muliatech.web.id/img/default-user.png");
//   const [showPassword, setShowPassword] = useState(false);
//   const { id } = useParams();
//   const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
//   const navigate = useNavigate();
//   const isEdit = id !== undefined;
//   const currentUser = isEdit ? getUserById(users, parseInt(id, 10)) : null;

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImage(reader.result);
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   useEffect(() => {
//     if (isEdit && currentUser) {
//       Object.keys(currentUser).forEach(key => {
//         setValue(key, currentUser[key]);
//       });
//       setImage(currentUser.image || "https://afl.muliatech.web.id/img/default-user.png");
//     }
//   }, [currentUser, isEdit, setValue]);

//   const onSubmit = (data) => {
//     if (isEdit) {
//       editUser({ ...data, id: parseInt(id, 10), image });
//     } else {
//       addUser({ ...data, image });
//     }
//     navigate('/users');
//   };

//   return (
//     //phone 
//     //job title 
//     //Data of hiring
//     //Salary
//     <div className="content p-4">
//       <div className="content-header">
//         <h1>Profile</h1>
//       </div>
      
//       <div className="attendance-content">
//         <div className="attendance-title">
//           <h1>{isEdit ? 'Update User' : 'Add User'}</h1>
//         </div>
//         <hr />

//         <div className="profile-container">
//           <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
//             <div className="user">
//               <label>Username</label>
//               <input className="control-form" type="text" {...register('username', { required: true })} />
//               {errors.username && <p>Username is required</p>}
//             </div>
//             <div className="user">
//               <label>Email</label>
//               <input className="control-form" type="email" {...register('email', { required: true })} />
//               {errors.email && <p>Email is required</p>}
//             </div>
//             <div className="user">
//               <label>Password</label>
//               <div style={{ width: "100%" }}>
//                 <input className="control-form" type={showPassword ? "text" : "password"}
//                   {...register('password', { required: !isEdit })} />
//                 {errors.password && <p>Password is required</p>}
//                 <div className="show-password">
//                   <input
//                     type="checkbox"
//                     id="showPassword"
//                     checked={showPassword}
//                     onChange={() => setShowPassword(!showPassword)}
//                   />
//                   <label htmlFor="showPassword">Show Password</label>
//                 </div>
//               </div>
//             </div>
//             <div className='user'>
//               <label>Image</label>
//               <div style={{ width: "100%" }}>
//                 <input
//                   className="control-form"
//                   type="file"
//                   name="image"
//                   id="image"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   style={{ padding: 0, height: "32px" }}
//                 //   {...register('image')}
//                 />
//                 <span className="image-upload-label">
//                   <i className="fa fa-question-circle" aria-hidden="true"></i>
//                   Please upload the image (Recommended size: 160px × 160px, max 5MB)
//                 </span>
//                 <div className="image-preview-area">
//                   <div id="image_preview" className="image-preview">
//                     <img src={image} width="200px" alt="Profile" className="img-circle" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="user">
//               <label>Shift Time</label>
//               <select className="control-form" {...register('shift')}>
//                 <option value="General Shift">General Shift</option>
//                 <option value="Night Shift">Night Shift</option>
//                 <option value="Day Shift">Day Shift</option>
//               </select>
//             </div>
//             <div className="user">
//               <label>Role</label>
//               <select className="control-form" {...register('role')}>
//                 <option value="Administrator">Administrator</option>
//                 <option value="Admin">Admin</option>
//                 <option value="Staff">Staff</option>
//                 <option value="Guest">Guest</option>
//               </select>
//             </div>
//             <div className='div-btn'>
//               <button className="update-btn" type="submit">{isEdit ? 'Update User' : 'Add User'}</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ADD_Update_Users;


import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserById } from '../AdminServices/Data';

function ADD_Update_Users({ users, addUser, editUser }) {
  const [image, setImage] = useState("https://afl.muliatech.web.id/img/default-user.png");
  const [showPassword, setShowPassword] = useState(false);
  const { id } = useParams();
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const isEdit = id !== undefined;
  const currentUser = isEdit ? getUserById(users, parseInt(id, 10)) : null;

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (isEdit && currentUser) {
      Object.keys(currentUser).forEach(key => {
        setValue(key, currentUser[key]);
      });
      setImage(currentUser.image || "https://afl.muliatech.web.id/img/default-user.png");
    }
  }, [currentUser, isEdit, setValue]);

  const onSubmit = (data) => {
    if (isEdit) {
      editUser({ ...data, id: parseInt(id, 10), image });
    } else {
      addUser({ ...data, image });
    }
    navigate('/admin/users');
  };

  return (
    <div className="content p-4">
      <div className="content-header">
        <h1>Employees</h1>
      </div>
      
      <div className="attendance-content">
        <div className="attendance-title">
          <h1>{isEdit ? 'Update Employee' : 'Add Employee'}</h1>
        </div>
        <hr />

        <div className="profile-container">
          <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="user">
              <label>Username</label>
              <div style={{ width: "100%" }}>
              <input className="control-form" type="text" {...register('username', { required: true })} />
              {errors.username && <p>Username is required</p>}
            </div>
            </div>
            <div className="user">
              <label>Email</label>
              <div style={{ width: "100%" }}>
              <input className="control-form" type="email" {...register('email', { required: true })} />
              {errors.email && <p>Email is required</p>}
            </div>
            </div>
            <div className="user">
              <label>Password</label>
              <div style={{ width: "100%" }}>
                <input className="control-form" type={showPassword ? "text" : "password"}
                  {...register('password', { required: !isEdit })} />
                {errors.password && <p>Password is required</p>}
                <div className="show-password">
                  <input
                    type="checkbox"
                    id="showPassword"
                    checked={showPassword}
                    onChange={() => setShowPassword(!showPassword)}
                  />
                  <label htmlFor="showPassword">Show Password</label>
                </div>
              </div>
            </div>
            <div className="user">
              <label>Phone</label>
              <div style={{ width: "100%" }}>
              <input className="control-form" type="tel" {...register('phone', { required: true })} />
              {errors.phone && <p>Phone number is required</p>}
            </div>
            </div>
            <div className="user">
              <label>Job Title</label>
              <div style={{ width: "100%" }}>
              <input className="control-form" type="text" {...register('jobTitle', { required: true })} />
              {errors.jobTitle && <p>Job title is required</p>}
            </div>
            </div>
            <div className="user">
              <label>Date of Hiring</label>
              <div style={{ width: "100%" }}>
              <input className="control-form" type="date" {...register('dateOfHiring', { required: true })} />
              {errors.dateOfHiring && <p>Date of hiring is required</p>}
            </div>
            </div>
            <div className="user">
              <label>Salary</label>
              <div style={{ width: "100%" }}>
              <input className="control-form" type="number" {...register('salary', { required: true })} />
              {errors.salary && <p>Salary is required</p>}
              </div>
            </div>
            <div className="user">
              <label>Image</label>
              <div style={{ width: "100%" }}>
                <input
                  className="control-form"
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ padding: 0, height: "32px" }}
                />
                <span className="image-upload-label">
                  <i className="fa fa-question-circle" aria-hidden="true"></i>
                  Please upload the image (Recommended size: 160px × 160px, max 5MB)
                </span>
                <div className="image-preview-area">
                  <div id="image_preview" className="image-preview">
                    <img src={image} width="200px" alt="Profile" className="img-circle" />
                  </div>
                </div>
              </div>
            </div>
            <div className="user">
              <label>Shift Time</label>
              <select className="control-form" {...register('shift')}>
                <option value="General Shift">General Shift</option>
                <option value="Night Shift">Night Shift</option>
                <option value="Day Shift">Day Shift</option>
              </select>
            </div>
            {/* <div className="user">
              <label>Role</label>
              <select className="control-form" {...register('role')}>
                <option value="Administrator">Administrator</option>
                <option value="Admin">Admin</option>
                <option value="Staff">Staff</option>
                <option value="Guest">Guest</option>
              </select>
            </div> */}
            <div className='div-btn'>
              <button className="update-btn" type="submit">{isEdit ? 'Update User' : 'Add User'}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ADD_Update_Users;

