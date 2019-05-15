import React from "react";
import axios from "axios";


const sendNotification  = (sender,receive,content,type) => {
  //sender: Nguoi gui, eg:UET
  //receive: player_id cua device
  //content: Noi dung cua Notification
  //Type: Thông báo/ Tin nhắn
  axios.post('https://onesignal.com/api/v1/notifications',{
         
      app_id: '3605c104-24a6-4fe5-ab81-a1ec69e66775',
      include_player_ids: [receive],  
      contents: {'en': `${sender} ${content}`},
      headings: {'en':`${type}`}
    
  },
  {
    headers:{
      "Content-Type":"application/json"
    }
  })
  
}
export default sendNotification;