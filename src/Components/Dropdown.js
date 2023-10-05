import React from 'react'
import './Dropdown.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import SwitchAccountOutlinedIcon from '@mui/icons-material/SwitchAccountOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import Button from '@mui/material/Button';


const Dropdown = () => {


  return (
    <div className='menu-container'>
    <div className={`dropdown-menu $ {open? 'active' : 'inactive'}`}>
        <div className='menu-top'>
            <div>
             <AccountCircleIcon/>
             <h4>Punitha Selvam<br/> @punithaselvam6868</h4>
             </div>
             <a><p>Manage your Google Account</p></a>
             
        </div>
       <div>  
    <ul>
    <DropdownItem Icon={ AccountBoxOutlinedIcon} text={"your channel"}/>
    <DropdownItem Icon={AdminPanelSettingsOutlinedIcon} text={"youTube Studio"}/>
    <DropdownItem Icon={SwitchAccountOutlinedIcon} text={"Switch account"} />
     <DropdownItem Icon={ExitToAppOutlinedIcon} text={"Sign out"}/>
     <DropdownItem Icon={AdminPanelSettingsOutlinedIcon} text={"Appearance Device Theme"} />
     <DropdownItem Icon={AdminPanelSettingsOutlinedIcon} text={"Language English"}/>
     <DropdownItem Icon={AdminPanelSettingsOutlinedIcon} text={"Keyboards Shorts"}/>
     <DropdownItem Icon={AdminPanelSettingsOutlinedIcon} text={"Settings"}/>
    </ul>
    </div>  
    </div>
   </div>
  )
}
function DropdownItem({Icon,text}){
    return(
        <li className='dropdownItem'>
            <Icon className="icon"/>
            <a className='text'>{text}</a>   
        </li>
    )
}

export default Dropdown