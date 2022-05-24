import React from 'react';
import "./allUsers.css";
const AllUsers = () => {
    return (
        <div className='grid'>
                <div className="first_row_item">Id</div>
                <div className="first_row_item">User</div>
                <div className="first_row_item">Password</div>
                <div className="first_row_item">Email</div>
                <div className="first_row_item">Profile</div>
                <div className="first_row_item">Destroy</div>
                <div className="second_item second_item1"><a href="##" className="view_profile">View Profile</a></div>
                <div className="second_item2 second_item"><button className='delete_btn'>-</button></div>
                
        </div>
    );
};

export default AllUsers;