package org.employeeproject.em_project;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    // List<Employee> employees = new ArrayList<>();

    @Override
    public String creatEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();
        BeanUtils.copyProperties(employee, employeeEntity);
        
        employeeRepository.save(employeeEntity);

        // employees.add(employee);
        return "saved successful";
    }

    @Override
    public Employee readEmployee(Long id){
        EmployeeEntity employeeEntity = employeeRepository.findById(id).get();
        Employee employee = new Employee();
        BeanUtils.copyProperties(employeeEntity,employee);

        return employee;
    }

    @Override
    public List<Employee> readEmployees() {

        List<EmployeeEntity> employeesList = employeeRepository.findAll();
        List<Employee> employees = new ArrayList<>();

        for (EmployeeEntity employeeEntity : employeesList) {

            Employee emp = new Employee();

            emp.setId(employeeEntity.getId());
            emp.setName(employeeEntity.getName());
            emp.setPhNo(employeeEntity.getPhNo());
            emp.setEmail(employeeEntity.getEmail());

            employees.add(emp);
        }
        return employees;
    }

    @Override
    public boolean deleteEmployee(Long id) {
        EmployeeEntity emp = employeeRepository.findById(id).get();
        employeeRepository.delete(emp);
        
        // employees.remove(id);
        return true;
    }

    @Override
    public String updateEmployee(Long id, Employee employee) {
       EmployeeEntity existingEmployee = employeeRepository.findById(id).get();

       existingEmployee.setName(employee.getName());
       existingEmployee.setEmail(employee.getEmail());
       existingEmployee.setPhNo(employee.getPhNo());

       employeeRepository.save(existingEmployee);
        return "Updated successful";
    }

   

}
