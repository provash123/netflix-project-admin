import { useEffect, useMemo, useState } from "react";
import Chart from "../../components/chart/Chart";
import Featuredinfo from "../../components/featuredinfo/Featuredinfo";
import WidgetLg from "../../components/widgetlg/WidgetLg";
import WidgetSm from "../../components/widgetsm/WidgetSm";

import axios from "axios";
import "./Home.css";

const Home = () => {
  const MONTHS = useMemo(()=>
  
   [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],[]
  )
  const [userState, setUserState] = useState([]);
  useEffect(() => {
    const getStats = async () => {
        try{
            const res = await axios.get("/users/stats", {
                headers: {
                  token:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWQ5MWYxNDJmM2YzYTc4NmEwNDg2MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTI5NDYzMiwiZXhwIjoxNjQ1NzI2NjMyfQ.3mVZzECyV9lESkwKRHnuJ0UDlqL6zmgJG2Zh2CaSfOQ",
                },
              });
              const statsList = res.data.sort(function(a,b){
                  return a._id - b._id
              })
              statsList.map(item=> setUserState(prev=>[...prev,{name:MONTHS[item._id-1],"New User":item.total}]))
        }
        catch(err){
        console.log(err)
        }
    
    };
    getStats();
  }, [MONTHS]);
  
  return (
    <div className="home">
    
      <Featuredinfo />
      <Chart data={userState} title="User Analytic" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
