
import React,{useState} from 'react'

import MaterialTable from 'material-table'


function DataTableCrud() {
    
    const namelist = [
        {id:1,name:"Aravind",email:"aravind@gmail.com",phone:998899889, city:"Chennai"},
        {id:2,name:"Manoj",email:"Manoj@gmail.com",phone:998899889, city:"Tiruchi"},
        {id:3,name:"Ranga",email:"Ranga@gmail.com",phone:998899889, city:"Madurai"},
        {id:4,name:"Deva",email:"deva@gmail.com",phone:998899889, city:"Bangalore"},
      ]
      const [data, setData] = useState(namelist)
      const columns = [
        {title: "ID", field:"id", editable:false},
        {title: "Name", field:"name"},
        {title: "Email", field:"email"},
        {title: "Ph number", field:"phone"},
        {title: "City", field:"city"},
      ]



  return (
    <div className="App">
    <MaterialTable
     title="Name list"
     data={data}
     columns={columns}
     editable= {{
       onRowAdd: newRow => new Promise((resolve, reject) => {
         const updatedRow = [...data,{id:Math.floor(Math.random()*100),...newRow}]
         setTimeout(() => {
           setData(updatedRow)
         resolve()
         },2000)
       }),
       onRowDelete: selectedRow => new Promise((resolve,reject) => {
         const index = selectedRow.tableData.id;
         const updatedData = [...data];
         updatedData.splice(index,1)
         setTimeout(() => {
           setData(updatedData)
           resolve()
         },2000)
       }),
       onRowUpdate: (newData,oldData) => new Promise((resolve,reject) => {
         const index = oldData.tableData.id;
         const updatedData = [...data];
         updatedData[index] = newData
         setTimeout(() => {
           setData(updatedData)
           resolve()
         },2000)
       })
     }}
     options={{
       actionsColumnIndex:-1, addRowPosition:'first'
     }}
    />
   </div>
  )
}

export default DataTableCrud
