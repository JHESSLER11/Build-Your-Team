const Engineer = require('../lib/Engineer')

describe('Engineer Class', () => {
    test('creates an Engineer', () => {
        const engineer = new Engineer()
        expect(engineer).toBeInstanceOf(Engineer);
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