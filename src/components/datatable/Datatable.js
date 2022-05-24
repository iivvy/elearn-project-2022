import   './datatable.css';
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns,userRows } from '../../datatablesource';

import { Button } from '@mui/material';

const Datatable = ({data}) => {
  const actionColumn = [{field:'action',headerName:'Action',width:200,
  renderCell:()=>{
    return (
      <div className='cellAction'>
        <div className='viewButton'>
          
          View</div>
        <div className='deleteButton'>
          
          Delete</div>
      </div>
    );
  },},
]
 

  return (
    <div className='datatable'>
  
      <DataGrid 

      
       
        rows={userRows}
        columns={userColumns.concat(actionColumn) } 
        
        pageSize={15}
        rowsPerPageOptions={[15,30,50]}
        
        disableSelectionOnClick
        showCellRightBorder={false}
        showColumnRightBorder={false}
        showRowRightBorder={false}
       
        
        
       
        
      />
      
    </div>
    
    )}


export default Datatable
