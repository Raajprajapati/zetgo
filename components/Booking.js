import React, { useState } from 'react'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

function Booking() {
    const [selected1, setSelected1] = useState();
    const [selected2, setSelected2] = useState();
    const [adult, setAdult] = useState(1);
    const [children, setChildren] = useState(0);
   
    function incChild(){
        setChildren(prev=>prev+1);
    }
    function decChild(){
        setChildren(prev=>prev>0?prev-1:prev);
    }
    function incAdult(){
        setAdult(prev=>prev+1);
    }
    function decAdult(){
        setAdult(prev=>prev>1?prev-1:prev);
    }


    function toggleDatePicker(e) {
        let id = e.target.dataset.id;
        document.getElementById(id).classList.toggle("dnd");
    }
    return (
        <>
            <div className="booking">
                <div className="booking_wrapper">

                    <div className="checkin item">
                        <div className="item_head">Checkin</div>
                        <div className="date_toggle">
                            <span className="date">
                                <i className="fa-solid fa-calendar-days" />
                                &nbsp;&nbsp;{selected1 ? format(selected1, 'PP') : "Add a date"}
                            </span>
                            <span className="btn">
                                <i className="fa-solid fa-angle-up" onClick={toggleDatePicker} data-id="date1" />
                            </span>
                        </div>
                        <div className="date_wrapper dnd" id="date1">
                            <DayPicker
                                mode="single"
                                selected={selected1}
                                onSelect={setSelected1}
                            />
                        </div>
                    </div>
                    <div className="checkout item">
                        <div className="item_head">Check Out</div>
                        <div className="date_toggle">
                            <span className="date">
                                <i className="fa-solid fa-calendar-days" />
                                &nbsp;&nbsp;{selected2 ? format(selected2, 'PP') : "Add a date"}
                            </span>
                            <span className="btn">
                                <i className="fa-solid fa-angle-up" onClick={toggleDatePicker} data-id="date2" />
                            </span>
                        </div>
                        <div className="date_wrapper dnd" id="date2">
                            <DayPicker
                                mode="single"
                                selected={selected2}
                                onSelect={setSelected2}
                            />
                        </div>
                    </div>
                    <div className="guests item">
                        <div className="item_head">Guests</div>
                        <div className="all_guests"  data-id="select_users" onClick={toggleDatePicker}>
                            <i className="fa-solid fa-user" />&nbsp;
                            {adult? `${adult} adult`:null} {children?`, ${children} children`:null}
                        </div>
                        <div className="select_guests" id="select_users">
                            <div className="adult user">
                                <span>Adult</span>
                                <p className="control">
                                    <span
                                        className='dec'
                                        onClick={decAdult}
                                    >-</span>
                                    <span>{adult}</span>
                                    <span
                                        className='inc'
                                        onClick={incAdult}
                                    >+</span>
                                </p>
                            </div>
                            <div className="children user">
                                <span>Children</span>
                                <p className="control">
                                    <span
                                        className='dec'
                                        onClick={decChild}
                                    >-</span>
                                    <span>{children}</span>
                                    <span
                                        className='inc'
                                        onClick={incChild}
                                    >+</span>
                                </p>
                            </div>
                        </div>


                    </div>
                    <div className="search item">
                        <button>Search</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Booking;