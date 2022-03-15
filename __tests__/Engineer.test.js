const Engineer = require('../lib/Engineer')

describe('Engineer Class', () => {
    test('creates an Engineer', () => {
        const engineer = new Engineer()
        expect(engineer).toBeInstanceOf(Engineer);
    })
    test('name, id, email, and Github run correctly', () => {
        const engineer = new Engineer('sam', '2', 'sam@email.com', 'https://github.com/sam');
        const engineerName = engineer.name;
        const engineerID = engineer.id;
        const engineerEmail = engineer.email;
        const engineerGit = engineer.Github
        expect(engineerName).toEqual('sam')
        expect(engineerID).toEqual('2')
        expect(engineerEmail).toEqual('sam@email.com')
        expect(engineerGit).toEqual('https://github.com/sam')
    })
  })