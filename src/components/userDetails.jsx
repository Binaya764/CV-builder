import {useState} from 'react';
function UserDetails({userDetails, handleDetailChange}){
    const[isEditing, setIsEditing]= useState(true);

    return(
        <section>
            <h2> Personal Details</h2>
            {
                isEditing?(
                    <>
                    <label htmlFor='fullName'>Full Name: </label>
                    <input
                        id="fullName"
                        type= "text"
                        name = "fullName"
                        value={userDetails.fullName}
                        onChange={handleDetailChange}
                        />
                    </>
                ):(
                    <>
                    <p>{userDetails.fullName}</p>
                    </>

                )
            }
        </section>
    );
}

export default UserDetails;
