import React, { useState } from 'react'
import { useDeleteEmployeeData, useEmployeeData } from '../Hooks/useEmployeeData'
import Pagination from './Pagination'
import "./pagination.css"
import Table from './Table'


const DataTable = () => {
    const [activePage, setActivePage] = useState(1)
    const { data, isLoading } = useEmployeeData(activePage)

    const { mutate: deleteData } = useDeleteEmployeeData()


    // const sortedData = data?.data.sort((p1, p2) =>
    //     (p2.employee_name < p1.employee_name) ? 1 : (p2.employee_name > p1.employee_name) ? -1 : 0)
    const sortedData = data?.data

    const handleDeleteEmployee = (id) => {
        deleteData(id)
    }
    
    if (isLoading) {
        return <h2>Loading...</h2>
    }


    return (
        <>
            <h2>Employee Details</h2>
            <Table handleDeleteEmployee={handleDeleteEmployee} sortedData={sortedData} />

            <Pagination activePage={activePage} setActivePage={setActivePage} pages={5} sortedData = {sortedData}/>
        </>
    )
}

export default DataTable