const Employee = require('../lib/Employee');

describe('employee', () => {
    test('Receiving correct name', () => {
        const employee1 = new Employee('Chris', 1, 'email@test.com');
        expect(employee1.getName()).toBe('Chris');
    }) 
    test('Receiving correct id', () => {
        const employee1 = new Employee('Chris', 1, 'email@test.com');
        expect(employee1.getId()).toBe(1);
    })
    test('Receiving correct email', () => {
        const employee1 = new Employee('Chris', 1, 'email@test.com');
        expect(employee1.getEmail()).toBe('email@test.com');
    })
    test('Receiving correct role', () => {
        const employee1 = new Employee('Chris', 1, 'email@test.com');
        expect(employee1.getRole()).toBe('Employee');
    })
})