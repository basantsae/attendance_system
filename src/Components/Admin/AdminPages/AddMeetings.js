import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { getMeetingById } from '../AdminServices/Data'; // Adjust the import path as needed

function AddMeetings({ meetings, addMeeting, editMeeting }) {
  const [placeLabel, setPlaceLabel] = useState("Place");
  const { id } = useParams();
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const isEdit = id !== undefined;
  const currentMeeting = isEdit ? getMeetingById(meetings, parseInt(id, 10)) : null;

  useEffect(() => {
    if (isEdit && currentMeeting) {
      Object.keys(currentMeeting).forEach(key => {
        setValue(key, currentMeeting[key]);
      });
      setPlaceLabel(`Place (${currentMeeting.meetingPlace})`);
    }
  }, [currentMeeting, isEdit, setValue]);

  const onPlaceChange = (event) => {
    const place = event.target.value;
    setPlaceLabel(`Place (${place})`);
  };

  const onSubmit = (data) => {
    if (isEdit) {
      editMeeting({ ...data, id: parseInt(id, 10) });
    } else {
      addMeeting(data);
    }
    navigate('/admin/meeting'); // Adjust navigation path as needed
  };

  return (
    <div className="content p-4">
      <div className="content-header">
        <h1>Add Meeting</h1>
      </div>

      <div className="attendance-content">
        <div className="attendance-title">
          <h1>{isEdit ? 'Update Meeting' : 'Add Meeting'}</h1>
        </div>
        <hr />
        <div className="profile-container">
          <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="user">
              <label>Meeting Title</label>
              <input className="control-form" type="text" {...register('meetingTitle', { required: true })} />
            </div>
            <div className="user">
              <label>Date</label>
              <input className="control-form" type="date" {...register('meetingDate', { required: true })} />
            </div>
            <div className="user">
              <label>Time</label>
              <input className="control-form" type="time" {...register('meetingTime', { required: true })} />
            </div>
            <div className="user">
              <label>Place</label>
              <input className="control-form" type="text" {...register('meetingPlace', { required: true })} onChange={onPlaceChange} />
            </div>
            <div className="user">
              <label>Audience</label>
              <input className="control-form" type="text" {...register('audience', { required: true })} />
            </div>
            <div className="user">
              <label>Notes</label>
              <textarea className="control-form" {...register('notes')} />
            </div>
            <div className='div-btn'>
              <button className="update-btn" type="submit">{isEdit ? 'Update Meeting' : 'Add Meeting'}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddMeetings;
