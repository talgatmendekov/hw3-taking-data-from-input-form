import React from 'react'

const RegistList = (props) => {
    return (
        <div>
          {props.registration.map((el)=>{
                return(
                    <div key={el.id}>
                        <p>{el.fname}</p>
                        <p>{el.lname}</p>
                        <p>{el.email}</p>
                        <p>{el.pass}</p>
                    </div>
                )
          })} 
        </div>
    )
}

export default RegistList