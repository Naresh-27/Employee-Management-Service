import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService'


const AddemployeeComponent = () => {
    const [employee, setEmployee] = useState({
        id: "",
        name: "",
        phone: "",
        email: "",
    });


    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({ ...employee, [e.target.name]: value })
    }
    const saveEmployee = (e) =>{
        e.preventDefault();
        EmployeeService.saveEmployee(employee)
        .then((response) =>{
            console.log("saved", response);
            navigate("/")
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const reset = (e) => {
        e.preventDefault();
        setEmployee({
            id: "",
            name: "",
            phone: "",
            email: "",
        })
    }


    const navigate = useNavigate();

    return (

        <div className='max-w-xl mx-40 bg-slate-800 my-20 rounded shadow py-4 px-8'>
            <div className='text-4xl tracking-wider font-bold text-center py-4 px-8 text-white'>
                <p>Add New Employee 👨‍💻</p>
            </div>

            <div className='mx-10 my-2'>
                <input
                    type='text'
                    name='name'
                    value={employee.name}
                    onChange={(e) => handleChange(e)}
                    className='w-full py-2 my-4 text-slate-800 rounded' placeholder='Name '></input>
                <input
                    type='number'
                    name='phone'
                    value={employee.phone}
                    onChange={(e) => handleChange(e)}
                    className='w-full py-2 my-4 text-slate-800 rounded' placeholder='Phone No'></input>
                <input
                    type='email'
                    name='email'
                    value={employee.email}
                    onChange={(e) => handleChange(e)}
                    className='w-full py-2 my-4 text-slate-800 rounded' placeholder='E-mail'></input>

            </div>

            <div className='flex my-4 space-x-6 px-20'>
                <button 
                onClick={saveEmployee}
                className='bg-green-400 hover:bg-green-600 hover:scale-110 hover:font-medium py-2 px-6 rounded '>Save</button>
                <button 
                onClick={reset}
                className='bg-blue-400 hover:bg-blue-600 hover:scale-110 hover:font-medium py-2 px-6 rounded'>Clear</button>
                <button
                    onClick={() => navigate("/")}
                    className='bg-red-400 hover:bg-red-600 hover:scale-110 hover:font-medium py-2 px-6 rounded'>Cancel</button>
            </div>

        </div>

    )
}

export default AddemployeeComponent
