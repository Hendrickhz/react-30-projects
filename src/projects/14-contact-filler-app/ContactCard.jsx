import React from 'react'

const ContactCard = ({width=300, bgColor="orange",name, email,phone}) => {
  return (
    <div className='m-3 border shadow  rounded-md' style={{width:width}}>
      <div style={{background:bgColor}}>
        <p className='p-3 text-white font-semibold text-xl'>{name}</p>
      </div>
      <div className="px-3 py-2 text-left">
        <p>Email : {email}</p>
        <p>Phone : {phone}</p>
      </div>
    </div>
  )
}

export default ContactCard
