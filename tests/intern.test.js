const Intern = require('../lib/Intern');


describe('intern', () => {
    test('Receiving correct name', () => {
        const intern1 = new Intern('Chris', 1, 'email@test.com', 'Ohio State');
        expect(intern1.getName()).toBe('Chris');
    }) 
    test('Receiving correct id', () => {
        const intern1 = new Intern('Chris', 1, 'email@test.com', 'Ohio State');
        expect(intern1.getId()).toBe(1);
    }) 
    test('Receiving correct email', () => {
        const intern1 = new Intern('Chris', 1, 'email@test.com', 'Ohio State');
        expect(intern1.getEmail()).toBe('email@test.com');
    }) 
    test('Receiving correct role', () => {
        const intern1 = new Intern('Chris', 1, 'email@test.com', 'Ohio State');
        expect(intern1.getRole()).toBe('Intern');
    })
    test('Receiving correct GitHub', () => {
        const intern1 = new Intern('Chris', 1, 'email@test.com', 'Ohio State');
        expect(intern1.getSchool()).toBe('Ohio State');
    })
})