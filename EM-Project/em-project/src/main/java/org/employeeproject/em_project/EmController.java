package org.employeeproject.em_project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class EmController {

    // EmployeeService employeeService = new EmployeeServiceImpl();
    // Dependency Injection
    @Autowired
    EmployeeService employeeService;

    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
            return employeeService.readEmployees();
    }

    @GetMapping("/employees/{id}")
    public Employee getEmployeesById(@PathVariable Long id) {
            return employeeService.readEmployee(id);
    }

    @PostMapping("/addEmployee")
    public String createEmployee(@RequestBody Employee employee) {
        // employees.add(employee);
        return employeeService.creatEmployee(employee);

        
    }

    @DeleteMapping("/deleteEmployee/{id}")
    public String deleteEmployee(@PathVariable Long id) {
        if (employeeService.deleteEmployee(id)){
            return "Deleted Successfully";
        }     
        return "Not found";
    }

    @PutMapping("/editEmployee/{id}")
    public String updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        return employeeService.updateEmployee(id,employee);
    }

}
