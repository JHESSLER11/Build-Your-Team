const Employee = require('../lib/Employee')

describe('Employee Class', () => {
    test('creates an employee', () => {
        const employee = new Employee()
        expect(employee).toBeInstanceOf(Employee);
    })
    test('name property returns correct name', () => {
        const employee = new Employee('bob');
        const employeeName = employee.name;
        expect(employeeName).toEqual('bob')

    })
  })