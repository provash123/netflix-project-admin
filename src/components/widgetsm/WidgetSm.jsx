import { Visibility } from "@material-ui/icons";
import './WidgetSm.css'
import axios from 'axios'
import { useEffect, useState } from "react";
const WidgetSm = () => {
  const [newUser,setNewUser] = useState([])
  useEffect(()=>{
  const getNewUser = async ()=>{
    try{
    const res = await axios.get("/users?new=true",{
      headers: {
        token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWQ5MWYxNDJmM2YzYTc4NmEwNDg2MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTI5NDYzMiwiZXhwIjoxNjQ1NzI2NjMyfQ.3mVZzECyV9lESkwKRHnuJ0UDlqL6zmgJG2Zh2CaSfOQ",
      },
    })
    setNewUser(res.data)
    }catch(err){
      console.log(err)
    }
  }
  getNewUser()
  },[])
  
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
      {newUser.map(user=>(

      
        <li className="widgetSmListItem">
          <img
            src={user.profilePic || "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
            
          </div>
          <button className="widgetSmButton">
              <Visibility className="widgetSmIcon"/>
              Display
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
