import React, { useState } from 'react'
import { useEditEmployeeData } from '../Hooks/useEmployeeData'

const Table = ({ handleDeleteEmployee, sortedData }) => {

    const {mutate : editEmployee} = useEditEmployeeData()

    const [editId, setEditId] = useState(-1)
    const [name, setName] = useState("")
    const [salary, setSalary] = useState("")
    const [age, setAge] = useState("")

    const firstObj = sortedData[0];
    const th = firstObj ? Object.keys(firstObj) : [];
    const thList = th.filter((item) => {
        return item !== "id";
    })
    console.log(thList);

    // const handleEditEmployee = (id) => {
    //     setEditId(id)
    //     console.log(id)
    //     setName(sortedData[id-1].employee_name)
    //     setSalary(sortedData[id-1].employee_salary)
    //     setAge(sortedData[id - 1].employee_age)
    // }

    // const handleUpdate = () => {
    //     editEmployee(editId, ({id : editId, employee_name : name, employee_salary : salary, employee_age : age}))
    // }
    
    return (
        <>
            <table id="employee">
                <thead>
                    <th>S.No</th>
                    {
                        thList.map((heading, id) => {
                            return (
                                <th key={id}>
                                    {heading}
                                </th>
                            )
                        })
                    }
                    <th>Button</th>
                </thead>

                <tbody>
                    {
                        sortedData.map((item, index) => (
                            // item.id === editId ?
                            // <tr>
                            //     <td>{item.id}</td>
                            //     <td><input type = "text" value = {name} onChange = {(e) => setName(e.target.value)}/></td>
                            //     <td><input type = "number" value = {salary} onChange = {(e) => setSalary(e.target.value)}/></td>
                            //     <td><input type = "number" value = {age} onChange = {(e) => setAge(e.target.value)}/></td>
                            //     <td><button onClick = {handleUpdate}>Update</button></td>
                            // </tr> 
                            // :
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                {
                                    thList.map(thItem => (
                                        <td key={thItem}>{item[thItem]}</td>
                                    ))
                                }
                                <td><button onClick = {() => handleDeleteEmployee(item.id)}>Delete</button>
{/* 
                                <button onClick = {() => handleEditEmployee(item.id)}>Edit</button> */}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Table