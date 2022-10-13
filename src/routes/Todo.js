import BasicForm from '../BasicForm'
import React, { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const Todo = () => {
    const [tabledata, setTabledata] = useState([]);
    const handleFormSubmit = (formdata) => {
		console.log('FormSubmit');      
        console.log(formdata);  
        var tabledata = localStorage['plusskilltest'];
        if(tabledata === undefined || tabledata === "" || tabledata === []){
            var tabledataObj =[{'uuid':generateGuid(), 'todo': formdata.todo}];
            localStorage['plusskilltest'] = JSON.stringify(tabledataObj);
            setTabledata(tabledataObj);
            console.table(tabledataObj);
        }
        else {
            var tabledataObj = JSON.parse(tabledata);
            tabledataObj.push({'uuid':generateGuid(), 'todo': formdata.todo});
            localStorage['plusskilltest'] = JSON.stringify(tabledataObj);
            setTabledata(tabledataObj);
            console.table(tabledataObj);
        }
        
	};
    const deletetodo = (uuid) =>{
        console.log('delete' + uuid)
        var tabledata = localStorage['plusskilltest'];
        if(tabledata === undefined || tabledata === "" || tabledata === []){
            console.log('no data to delete')
        }
        else {
            var tabledataObj = JSON.parse(tabledata);
            var deleteObj = tabledataObj.filter(e=> e.uuid===uuid);
            if(deleteObj){
                tabledataObj.splice(tabledataObj.indexOf(deleteObj),1);                
            }
            localStorage['plusskilltest'] = JSON.stringify(tabledataObj);
            setTabledata(tabledataObj);
            console.table(tabledataObj);
        }
    }
const generateGuid = () => {
    var result, i, j;
    result = '';
    for(j=0; j<32; j++) {
      if( j == 8 || j == 12 || j == 16 || j == 20)
        result = result + '-';
      i = Math.floor(Math.random()*16).toString(16).toUpperCase();
      result = result + i;
    }
    return result;
  }
    return <>
    <h1>To do Form</h1>
    <BasicForm onSubmit={handleFormSubmit} />
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Todo</TableCell>            
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tabledata.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.todo}
              </TableCell>
              <TableCell align="right">
              <Button aria-label="delete" onClick={() => deletetodo(row.uuid)}>
                Delete
              </Button>
              </TableCell>              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>;
  };
  
  export default Todo;