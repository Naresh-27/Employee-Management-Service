import axios from 'axios'


// const EMPLOYEE_SAPI_BASE_URL = "http://localhost:9090/employees"
const EMPLOYEE_SAPI_BASE_URL = "http://localhost:9090"

class EmployeeService {
    saveEmployee(employee){
        return axios.post(EMPLOYEE_SAPI_BASE_URL+"/addEmployee",employee)
    }

    getEmployees(){
        return axios.get(EMPLOYEE_SAPI_BASE_URL+"/employees")
    }

    getEmployeeById(id){
        return axios.get(EMPLOYEE_SAPI_BASE_URL+"/employees/"+id)
    }

    deleteEmployee(id){
        return axios.delete(EMPLOYEE_SAPI_BASE_URL+"/deleteEmployee/"+id)
    }

    updateEmployee(employee,id){
        return axios.put(EMPLOYEE_SAPI_BASE_URL+"/editEmployee/"+id,employee)
    }
}
export default new EmployeeService();
