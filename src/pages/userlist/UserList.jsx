import { DataGrid } from "@material-ui/data-grid";

import { userRows } from "../../DumyData";
import { DeleteOutline } from "@material-ui/icons";
import {Link} from 'react-router-dom'
import {useState} from 'react'
import "./UserList.css";

const UserList = () => {
  const [data, setData] = useState(userRows)
  const handleClick = (id)=>{
     setData(data.filter((item)=>item.id !== id))
  }
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "Username",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 130 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",

      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
          <Link to={"/user/" + params.row.id} >
          <button className="userListEdit">Edit</button>
          </Link>
            
            <DeleteOutline className="userListDelete" onClick={()=>handleClick(params.row.id)} />
          </>
        );
      },
    },
  ];
  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        disableSelectionOnClick
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
