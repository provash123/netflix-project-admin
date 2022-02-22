import './ProductList.css'
import { productRows } from '../../DumyData';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DeleteOutline } from "@material-ui/icons";
import { DataGrid } from "@material-ui/data-grid"
const ProductList = () => {
    const[data,setData]=useState(productRows);
    const handleClick = (id)=>{
        setData(data.filter((item)=>item.id !== id))
     }

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
          field: "product",
          headerName: "Product",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="productListItem">
                <img className="productListImg" src={params.row.img} alt="" />
                {params.row.username}
              </div>
            );
          },
        },
        { field: "stock", headerName: "Stoke", width: 130 },
        {
          field: "status",
          headerName: "Status",
          width: 120,
        },
        {
          field: "price",
          headerName: "Price",
    
          width: 160,
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
              <Link to={"/product/" + params.row.id} >
              <button className="productListEdit">Edit</button>
              </Link>
                
                <DeleteOutline className="userListDelete" onClick={()=>handleClick(params.row.id)} />
              </>
            );
          },
        },
      ];
    
    return ( 
        <div className="productList">
              <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
        </div>
     );
}
 
export default ProductList;