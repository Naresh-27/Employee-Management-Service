import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../service/EmployeeService';

const EmployeeComponent = () => {

    const [loading, setLoading] = useState(true);
    const [employees, setEmployees] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await EmployeeService.getEmployees();
                setEmployees(response.data)
            } catch (error) {
                console.log(error)
            }
            setLoading(false);
        };
        fetchData();
    }, [])

    const deleteEmployee = (e, id) => {
        e.preventDefault();
        EmployeeService.deleteEmployee(id)
            .then(() => {
                if (employees) {
                    setEmployees((prevElement) => {
                        return prevElement.filter((employee) => employee.id == id)
                    })
                }
            })
    }

    const editEmployee =(e,id) => {
        e.preventDefault();
        // navigate(`/editEmployee/${id`)
        navigate(`/editEmployee/${id}`)
    };

    const navigate = useNavigate();
    return (
        <div className='container mx-auto my-8'>
            <div>
                <button
                    onClick={() => navigate("/addEmployees")}
                    className='bg-slate-600 my-12 fond-semibold text-xl text-black px-20 py-2 hover:bg-blue-400 hover:text-white  rounded-md '>Add Employee 👨‍💻</button>
            </div>

            <div>
                <table className='shadow '>
                    <thead className='bg-slate-600 '>
                        <tr>
                            <th className='px-6 py-3 uppercase tracking-wide'> Name </th>
                            <th className='px-6 py-3 uppercase tracking-wide'> ph No </th>
                            <th className='px-6 py-3 uppercase tracking-wide'> E-mail </th>
                            <th className='px-6 py-3 uppercase tracking-wide'> Action </th>
                        </tr>
                    </thead>
                    {!loading && (
                        <tbody>
                            {employees.map((employee) => (
                                <tr key={employee.id}className= 'hover:bg-yellow-100 hover:text-black text-lg'>
                                    <td className='text-left px-6 py-4 whitespace-nowrap'> {employee.name} </td>
                                    <td className='text-left px-6 py-4 whitespace-nowrap'> {employee.phone} </td>
                                    <td className='text-left px-6 py-4 whitespace-nowrap'> {employee.email}.com </td>
                                    <td className='text-left px-6 py-4 whitespace-nowrap'>
                                        <a
                                            onClick={(e, id) => editEmployee(e, employee.id)}
                                            className='hover:text-green-500 hover:cursor-pointer'
                                        >Edit📝</a>
                                        <a
                                            onClick={(e, id) => deleteEmployee(e, employee.id)}
                                            className='hover:text-red-500 hover:cursor-pointer'
                                        >  Delete🗑️</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    )}

                </table>
            </div>
        </div>
    )
}

export default EmployeeComponent

