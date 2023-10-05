import React from 'react'
import "./Videocard.css";
import{MoreVert,WatchLater} from "@mui/icons-material";
import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined';
import Avatar from '@mui/material/Avatar';



const Videocard = (props) => {
  return (
    <div className='videocard'>
      <div className='watchlater'><WatchLater className='videoicon'/></div>
      <div className='playlistadd'><PlaylistPlayOutlinedIcon className='videoicon'/></div>
      <img className='videoimg' src={props.thumbnail}/>
      <div className='duration'>{props.duration}</div>
      <div className='videodata'>
      <Avatar src={props.channelLogo}/>
      <div className='channeldetails'>
        <h5>
          {props.title}
        </h5>
        <p className='c_name'>{props.channelName}</p>
        <p>{props.views} &bull; {props.time}</p>
      </div>
      <MoreVert className='moreicon'/>
      </div>
    </div>
  )
}

export default Videocard