// src/Profile.js
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function Profile() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [image, setImage] = useState("https://afl.muliatech.web.id/img/default-user.png");
    const [showPassword, setShowPassword] = useState(false);

    
    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission
    };

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

    return (
        <div className="content p-4">
            <div className="content-header">
                <h1>Profile</h1>
            </div>

            <div className="attendance-content">
                <div className="attendance-title">
                    <h1>Update</h1>
                </div>
                <hr/>

                <div className="profile-container">
                    <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="user">
                            <label>Username</label>
                            <input className="control-form" type="text" {...register('username', { required: true })} />
                            {/* {errors.username && <p>Username is required</p>} */}
                        </div>
                        <div className="user">
                            <label>Email</label>
                            <input className="control-form" type="email" {...register('email', { required: true })} />
                            {/* {errors.email && <p>Email is required</p>} */}
                        </div>
                        <div className="user">
                            <label>Password</label>
                            <div style={{width:"100%"}}>
                            <input className="control-form" type={showPassword ? "text" : "password"} 
                                {...register('password', { required: true })} />
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

                    <div className='user'>
                        <label>image</label>
                        <div style={{width:"100%"}}>
                        <input 
                            className="control-form"
                            type="file" 
                            name="image" 
                            id="image" 
                            accept="image/*"
                            onChange={handleImageUpload}
                            style={{padding:0,height:"31px"}}
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

                    {/* <label className="custom-file-label" htmlFor="image">Choose file</label> */}
                </div>

                <div className='div-btn'>
                <button className="update-btn" type="submit">Submit</button>
                </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Profile;
