import React from 'react'
import Videocard from './Videocard'
import './Homepage.css'

function Music() {
  return (
    <div className='video'>

      <Videocard
         className='player'
        thumbnail="https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/e9/19/b9/e919b921-d5a8-9e9a-8508-3551da375aee/196626458629.jpg/1200x630bb.jpg"
        duration="08:38"
        channelName="DevNtech"
        channelLogo="https://www.startertutorials.com/ajwt/wp-content/uploads/2014/01/html1-2bk3qb4.jpg"
        title="Html & css tutorial | Card UI Tutorial - Web Design Tutorial"
        views="210 views"
        time="1 month ago"
        />
       <Videocard
        className='player'
        thumbnail="https://imagekit.io/blog/content/images/2020/12/image-resizing-html.jpg"
        duration="08:38"
        channelName="DevNtech"
        channelLogo="https://www.startertutorials.com/ajwt/wp-content/uploads/2014/01/html1-2bk3qb4.jpg"
        title="Html & css tutorial | Card UI Tutorial - Web Design Tutorial"
        views="210 views"
        time="1 month ago"
        />
        <Videocard
         className='player'
        thumbnail="https://imagekit.io/blog/content/images/2020/12/image-resizing-html.jpg"
        duration="08:38"
        channelName="DevNtech"
        channelLogo="https://www.startertutorials.com/ajwt/wp-content/uploads/2014/01/html1-2bk3qb4.jpg"
        title="Html & css tutorial | Card UI Tutorial - Web Design Tutorial"
        views="210 views"
        time="1 month ago"
        />
    </div>
  )
}

export default Music