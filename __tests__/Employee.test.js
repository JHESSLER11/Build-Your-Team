const Employee = require('../lib/Employee')

describe('Employee Class', () => {
    test('creates an employee', () => {
        const employee = new Employee()
        expect(employee).toBeInstanceOf(Employee);
    })
    test('name property returns correct name', () => {
        const employee = new Employee('bob', '1', 'hessler@email.com');
        const employeeName = employee.name;
        const employeeId = employee.id;
        const employeeEmail = employee.email
        expect(employeeName).toEqual('bob')
        expect(employeeId).toEqual('1')
        expect(employeeEmail).toEqual('hessler@email.com')
    })
  })