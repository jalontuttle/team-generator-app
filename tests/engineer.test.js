const Engineer = require('../lib/Engineer');


describe('engineer', () => {
    test('Receiving correct name', () => {
        const engineer1 = new Engineer('Chris', 1, 'email@test.com', 'chrisjones');
        expect(engineer1.getName()).toBe('Chris');
    }) 
    test('Receiving correct id', () => {
        const engineer1 = new Engineer('Chris', 1, 'email@test.com', 'chrisjones');
        expect(engineer1.getId()).toBe(1);
    }) 
    test('Receiving correct email', () => {
        const engineer1 = new Engineer('Chris', 1, 'email@test.com', 'chrisjones');
        expect(engineer1.getEmail()).toBe('email@test.com');
    }) 
    test('Receiving correct role', () => {
        const engineer1 = new Engineer('Chris', 1, 'email@test.com', 'chrisjones');
        expect(engineer1.getRole()).toBe('Engineer');
    })
    test('Receiving correct GitHub', () => {
        const engineer1 = new Engineer('Chris', 1, 'email@test.com', 'chrisjones');
        expect(engineer1.getGithub()).toBe('chrisjones');
    })
})