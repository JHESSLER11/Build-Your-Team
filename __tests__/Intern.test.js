const Intern = require('../lib/Intern')

describe('Intern Class', () => {
    test('creates an Intern', () => {
        const intern = new Intern()
        expect(intern).toBeInstanceOf(Intern);
    })
    test('name, id, email, and school run correctly', () => {
        const intern = new Intern('will', '3', 'will@email.com', 'Western');
        const internName = intern.name;
        const internID = intern.id;
        const internEmail = intern.email;
        const internSchool = intern.school
        expect(internName).toEqual('will')
        expect(internID).toEqual('3')
        expect(internEmail).toEqual('will@email.com')
        expect(internSchool).toEqual('Western')
    })
  })