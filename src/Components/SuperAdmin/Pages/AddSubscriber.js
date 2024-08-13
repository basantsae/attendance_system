import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { getSubscriberById } from '../Services/SubscriberData'; // Adjust the import path as needed


function AddSubscriber({ subscribers, addSubscriber, editSubscriber }) {
  const [image, setImage] = useState("https://afl.muliatech.web.id/img/default-user.png");
  const [showPassword, setShowPassword] = useState(false);
  const { id } = useParams();
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const isEdit = id !== undefined;
  const currentSubscriber = isEdit ? getSubscriberById(subscribers, parseInt(id, 10)) : null;

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
    if (isEdit && currentSubscriber) {
      Object.keys(currentSubscriber).forEach(key => {
        setValue(key, currentSubscriber[key]);
      });
      setImage(currentSubscriber.image || "https://afl.muliatech.web.id/img/default-user.png");
    }
  }, [currentSubscriber, isEdit, setValue]);

  const onSubmit = (data) => {
    if (isEdit) {
      editSubscriber({ ...data, id: parseInt(id, 10), image });
    } else {
      addSubscriber({ ...data, image });
    }
    navigate('/superadmin/subscriber-list');
  };


  return (

    <div className="content p-4">
      <div className="content-header">
          <h1>Add</h1>
          </div>

          <div className="attendance-content">
          <div className="attendance-title">
          <h1>{isEdit ? 'Update Subscriber' : 'Add Subscriber'}</h1>
          </div>
          <hr />
          <div className="profile-container">
          <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="user">
            <label>Name</label>
            <input className="control-form" type="text" {...register('name', { required: true })} />
            {/* {errors.name && <p>Name is required</p>} */}
          </div>
          <div className="user">
            <label>Email</label>
            <input className="control-form" type="email" {...register('email', { required: true })} />
            {/* {errors.email && <p>Email is required</p>} */}
          </div>
          <div className="user">
            <label>Phone</label>
            <input className="control-form" type="text" {...register('phone', { required: true })} />
            {/* {errors.phone && <p>Phone is required</p>} */}
          </div>
          <div className="user">
            <label>Password</label>
            <div style={{ width: "100%" }}>
              <input className="control-form" type={showPassword ? "text" : "password"}
                {...register('password', { required: !isEdit })} />
              {/* {errors.password && <p>Password is required</p>} */}
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
            <label>Image</label>
            <div style={{ width: "100%" }}>
              <input
                className="control-form"
                type="file"
                name="image"
                id="image"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ padding: 0, height: "32px"}}
              />
              <span className="image-upload-label">
                <i className="fa fa-question-circle" aria-hidden="true"></i>
                Please upload the image (Recommended size: 160px × 160px, max 5MB)
              </span>
              <div className="image-preview-area">
                <div id="image_preview" className="image-preview">
                  <img src={image} width="200px" alt="Profile" className="img-circle"/>
                </div>
              </div>
            </div>
          </div>
          <div className='div-btn'>
            <button className="update-btn" type="submit">{isEdit ? 'Update Subscriber' : 'Add Subscriber'}</button>
          </div>
          </form>
          </div>
      </div>
    </div>
  );
}

export default AddSubscriber;
