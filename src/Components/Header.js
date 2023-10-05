import React, { useState } from 'react'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BasicModal from './Modal';
import Dropdown from './Dropdown';
import SidebarRow from './SidebarRow';
// sidebarrow icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import ShopTwoOutlinedIcon from '@mui/icons-material/ShopTwoOutlined';
import './Sidebar.css';

import BasicCard from './Card';

// import Footer from './Footer';



    function Header() {
      const toggleSidebar=()=>{
             const sidebar=document.querySelector(".sidebar");
        const Minisidebar=document.querySelector(".mini_sidebar");

      if(sidebar){
        sidebar.classList.toggle('active');
      }
      if(Minisidebar){
        Minisidebar.classList.toggle('active');
      }
      }
             
           

        const [modal,setModal]=useState(false);
        const [opendown,setOpendown]=useState(false);
        const [card, setCard]=useState(false);
             
        return (
         <div className='parent_header'>
          <div className='header'>
          <div className='header_left'>
                
        
         <div onClick={toggleSidebar}><MenuIcon className='menuicon'/></div>
          <img onClick={()=>{setCard(!card)}} src='https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg' alt='logo' className='logo'/>
            
          </div>
          <div className='header_input'>
          <div className='header_middle'>
              <input type='text' className='searchinput' placeholder='Search'  id='search' autoComplete='on' required></input>
              <SearchOutlinedIcon className='searchicon'/>
              </div> 
              <MicIcon className='mic_icon'/> 
          </div>
          
          <div className='header_right'>
          
              <button onClick={()=>{setCard(!card);}}><VideoCallOutlinedIcon className='right_icon'/></button>
              <button onClick={()=>{setModal(!modal);}} ><NotificationsNoneOutlinedIcon className='right_icon' /></button>
              <button onClick={()=>{setOpendown(!opendown);}}><AccountCircleIcon className='right_icon'/></button> 
                 
          </div>
          </div>
         <div className='sidebar'>
          <SidebarRow icon={HomeOutlinedIcon} title="Home"/>
          <SidebarRow icon={ShopTwoOutlinedIcon} title="Shorts"/>
          <SidebarRow icon={SubscriptionsOutlinedIcon} title="Subscriptions"/>
          <hr></hr>
          <SidebarRow icon={HomeOutlinedIcon} title="Library"/>
          <SidebarRow icon={ShopTwoOutlinedIcon} title="History"/>
          <SidebarRow icon={SubscriptionsOutlinedIcon} title="Your videos"/>
          <SidebarRow icon={HomeOutlinedIcon} title="Watch later"/>
          <SidebarRow icon={ShopTwoOutlinedIcon} title="Liked videos"/>
          <SidebarRow icon={SubscriptionsOutlinedIcon} title="99 Days Challenge"/>
          <hr></hr>
          <SidebarRow icon={HomeOutlinedIcon} title="Settings"/>
          <SidebarRow icon={ShopTwoOutlinedIcon} title="Report history"/>
          <SidebarRow icon={SubscriptionsOutlinedIcon} title="Help"/>
          <hr></hr>
          <SidebarRow icon={HomeOutlinedIcon} title="Home"/>
          <SidebarRow icon={ShopTwoOutlinedIcon} title="Shorts"/>
          <SidebarRow icon={SubscriptionsOutlinedIcon} title="Subscriptions"/>
          <hr></hr>
          <div className='footer'>
            <p>About &nbsp; Press &nbsp; Copyright</p>
            <p>Contact us &nbsp; Creators</p>
            <p>Advertise &nbsp; Developers
            </p>
            <br/>
            <p>Terms &nbsp; Privacy & Safety</p>
            <p>How youtube works</p>
            <p>Test new features</p>
            <br/>
            <p style={{color:"rgb(142,142,142"}}>&#169; 2023 Google LLC</p>
          </div>
         </div>
         <div className='mini_sidebar'>
          <div className='min_div'>
            <HomeOutlinedIcon/>
            <p>Home</p>
          </div>
          <div className='min_div'>
            <ShopTwoOutlinedIcon/>
            <p>Shorts</p>
          </div>
          <div className='min_div'>
            <SubscriptionsOutlinedIcon/>
            <p>Subscriptions</p>
          </div>
         </div>
          
        {/* <div className='footer'>
          <Footer/>
        </div> */}
         
         
        
          {
            modal?
            (
              <BasicModal/>
            ):null
          }
          {
            opendown?
            (
              <Dropdown/>
            ):null
          }
          { card?
          (
            <BasicCard/>
          ):null
          }
          {
            card?
            (
              <BasicCard/>
            ):null
          }
         
         
        </div>

      )
    }

    export default Header