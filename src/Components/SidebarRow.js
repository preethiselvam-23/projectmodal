import React from 'react'
import './Sidebarrow.css'

function SidebarRow(props) {
  return (
    <div className='sidebarRow'>
      
      <props.icon className='sidebarrow_icon'/>
      <h2 className='sidebarrow_title'>{props.title}</h2>

    </div>
  )
}

export default SidebarRow