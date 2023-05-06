import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query"

const fetchEmployeeData = (page) => {
    return axios.get(`http://localhost:8000/employees?_page=${page}&_limit=5`)
    // return axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`)
}

const deleteEmployeeData = (id) => {
    return axios.delete(`http://localhost:8000/employees/${id}`)
}

const editEmployeeData = (id, updatedData) => {
    console.log("id", id)
    console.log("updated data", updatedData);
    return axios.patch(`http://localhost:8000/employees/${id}`, updatedData)
}

export const useEmployeeData = (activePage) => {
    return useQuery(["employee", activePage], () => fetchEmployeeData(activePage),
        { keepPreviousData: true }
    )
}


export const useDeleteEmployeeData = () => {
    const queryClient = useQueryClient()
    return useMutation(deleteEmployeeData,
        {
            onSuccess: () => {
                queryClient.invalidateQueries("employee")
            }
        }
    )
}


export const useEditEmployeeData = () => {
    const queryClient = useQueryClient()
    return useMutation(editEmployeeData,
        {
            onSuccess : () => {
                queryClient.invalidateQueries("employee")
            }
        }
    )
}