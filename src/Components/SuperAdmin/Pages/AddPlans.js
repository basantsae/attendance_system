import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { getPlanById } from '../Services/SubscriberData'; // Adjust the import path as needed

function AddPlans({ plans, addPlan, editPlan }) {
  const [priceLabel, setPriceLabel] = useState("Price");
  const { id } = useParams();
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const isEdit = id !== undefined;
  const currentPlan = isEdit ? getPlanById(plans, parseInt(id, 10)) : null;

  useEffect(() => {
    if (isEdit && currentPlan) {
      Object.keys(currentPlan).forEach(key => {
        setValue(key, currentPlan[key]);
      });
      setPriceLabel(`Price (${currentPlan.planDuration})`);
    }
  }, [currentPlan, isEdit, setValue]);

  const onDurationChange = (event) => {
    const duration = event.target.value;
    setPriceLabel(`Price (${duration.charAt(0).toUpperCase() + duration.slice(1)})`);
  };

  const onSubmit = (data) => {
    if (isEdit) {
      editPlan({ ...data, id: parseInt(id, 10) });
    } else {
      addPlan(data);
    }
    navigate('/superadmin/plans-list');
  };

  return (
    <div className="content p-4">
      <div className="content-header">
        <h1>Add</h1>
      </div>

      <div className="attendance-content">
        <div className="attendance-title">
          <h1>{isEdit ? 'Update Plan' : 'Add Plan'}</h1>
        </div>
        <hr />
        <div className="profile-container">
          <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="user">
              <label>Plan Name</label>
              <input className="control-form" type="text" {...register('planName', { required: true })} />
            </div>
            <div className="user">
              <label>Plan Duration</label>
              <select className="control-form" {...register('planDuration', { required: true })} onChange={onDurationChange}>
                <option value="">Select Duration</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            <div className="user">
              <label>{priceLabel}</label>
              <input className="control-form" type="number" {...register('price', { required: true })} />
            </div>
            <div className="user">
              <label>Number of Employees</label>
              <input className="control-form" type="number" {...register('numberOfEmployees', { required: true })} />
            </div>
            <div className='div-btn'>
              <button className="update-btn" type="submit">{isEdit ? 'Update Plan' : 'Add Plan'}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddPlans;
