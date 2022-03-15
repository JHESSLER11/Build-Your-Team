const Manager = require('../lib/Manager')

describe('Manager Class', () => {
    test('creates a Manager', () => {
        const manager = new Manager()
        expect(manager).toBeInstanceOf(Manager);
    })
    test('name, id, email, and Github run correctly', () => {
        const manager = new Manager('boss', '1', 'boss@email.com', '6');
        const managerName = manager.name;
        const managerID = manager.id;
        const managerEmail = manager.email;
        const managerOffice = manager.OfficeNumber
        expect(managerName).toEqual('boss')
        expect(managerID).toEqual('1')
        expect(managerEmail).toEqual('boss@email.com')
        expect(managerOffice).toEqual('6')
    })
  })