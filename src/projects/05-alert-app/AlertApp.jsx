import React from 'react'
import Title from '../../components/Title'
import Alert from '../../components/Alert'
const AlertApp = () => {
  return (
    <div>
      <Title text={'Alert App'}/>
      <Alert text={"Login Finished"} disappear={false}/>
      <Alert text={"Login failed"} color={"btn-danger"} showTime={6000}/>
    </div>
  )
}

export default AlertApp
