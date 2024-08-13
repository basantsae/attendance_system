import React from "react";
import { useState, useEffect, useRef } from 'react';


function EditShifts(){

    const [isStartTimeDropdownVisible, setIsStartTimeDropdownVisible] = useState(false);
    const [isEndTimeDropdownVisible, setIsEndTimeDropdownVisible] = useState(false);
    const [startTimeValue, setStartTimeValue] = useState('');
    const [endTimeValue, setEndTimeValue] = useState('');
    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsStartTimeDropdownVisible(false);
            setIsEndTimeDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const generateHourMinuteItems = () => {
        const times = [];
        for (let hour = 0; hour < 24; hour++) {
            for (let minute = 0; minute < 60; minute++) {
                const formattedHour = hour.toString().padStart(2, '0');
                const formattedMinute = minute.toString().padStart(2, '0');
                times.push(`${formattedHour}:${formattedMinute}`);
            }
        }
        return times;
    };

    const handleStartTimeClick = (time) => {
        setStartTimeValue(time);
        setIsStartTimeDropdownVisible(false);
    };

    const handleEndTimeClick = (time) => {
        setEndTimeValue(time);
        setIsEndTimeDropdownVisible(false);
    };


    return(
        <>
        <div className="content p-4">
            <div className="content-header">
                <h1>Shifts</h1>
            </div>

        <div className="attendance-content">
                <div className="attendance-title">
                    <h1>
                        Add or Update
                    </h1>
                </div>
                <hr/>

            <div className="profile-container">
                <form className="user-form">
                    {/* <div className="user">
                        <label>Name</label>
                        <input className="control-form" type="text" />
                    </div> */}

        <div className="input-with-dropdown" ref={dropdownRef}>
                    <div className="user-name user">
                        <label>Name</label>
                        <input className="control-form" type="text" />
                    </div>

            <div className="start-shift user">
                <label>Start Time</label>
                <div className="dropdown-container">
                    <input 
                        type="text" 
                        value={startTimeValue} 
                        onClick={() => setIsStartTimeDropdownVisible(!isStartTimeDropdownVisible)} 
                        placeholder="Select start time" 
                        readOnly
                    />
                    {isStartTimeDropdownVisible && (
                        <div className="ui-timepicker-container">
                            <div className="ui-timepicker ui-widget ui-widget-content ui-menu ui-corner-all">
                                <ul className="ui-timepicker-viewport">
                                    {generateHourMinuteItems().map((time, index) => (
                                        <li 
                                            key={index} 
                                            className="ui-menu-item" 
                                            onClick={() => handleStartTimeClick(time)}
                                        >
                                            <a className="ui-corner-all">{time}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="end-shift user">
                <label>End Time</label>
                <div className="dropdown-container">
                    <input 
                        type="text" 
                        value={endTimeValue} 
                        onClick={() => setIsEndTimeDropdownVisible(!isEndTimeDropdownVisible)} 
                        placeholder="Select end time" 
                        readOnly
                    />
                    {isEndTimeDropdownVisible && (
                        <div className="ui-timepicker-container">
                            <div className="ui-timepicker ui-widget ui-widget-content ui-menu ui-corner-all">
                                <ul className="ui-timepicker-viewport">
                                    {generateHourMinuteItems().map((time, index) => (
                                        <li 
                                            key={index} 
                                            className="ui-menu-item" 
                                            onClick={() => handleEndTimeClick(time)}
                                        >
                                            <a className="ui-corner-all">{time}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="end-shift user">
                <label>End Time</label>
                <div className="dropdown-container">
                    <input 
                        type="text" 
                        value={endTimeValue} 
                        onClick={() => setIsEndTimeDropdownVisible(!isEndTimeDropdownVisible)} 
                        placeholder="Select end time" 
                        readOnly
                    />
                    {isEndTimeDropdownVisible && (
                        <div className="ui-timepicker-container">
                            <div className="ui-timepicker ui-widget ui-widget-content ui-menu ui-corner-all">
                                <ul className="ui-timepicker-viewport">
                                    {generateHourMinuteItems().map((time, index) => (
                                        <li 
                                            key={index} 
                                            className="ui-menu-item" 
                                            onClick={() => handleEndTimeClick(time)}
                                        >
                                            <a className="ui-corner-all">{time}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            
        </div>

                    

                </form>

            </div>
    </div>
    </div>

        {/* <div className="input-with-dropdown" ref={dropdownRef}>
            <input 
                type="text" 
                value={inputValue} 
                onClick={handleInputClick} 
                placeholder="Click to see options" 
                readOnly
            />
            {isDropdownVisible && (
                <div className="ui-timepicker-container">
                    <div className="ui-timepicker ui-widget ui-widget-content ui-menu ui-corner-all">
                        <ul className="ui-timepicker-viewport">
                            {timeItems.map((time, index) => (
                                <li 
                                    key={index} 
                                    className="ui-menu-item" 
                                    onClick={() => handleItemClick(time)}
                                >
                                    <a className="ui-corner-all">{time}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div> */}
    </>
    )
}

export default EditShifts;