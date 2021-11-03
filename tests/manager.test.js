const Manager = require('../lib/Manager');


describe('manager', () => {
    test('Receiving correct name', () => {
        const manager1 = new Manager('Chris', 1, 'email@test.com', 201);
        expect(manager1.getName()).toBe('Chris');
    }) 
    test('Receiving correct id', () => {
        const manager1 = new Manager('Chris', 1, 'email@test.com', 201);
        expect(manager1.getId()).toBe(1);
    })
    test('Receiving correct email', () => {
        const manager1 = new Manager('Chris', 1, 'email@test.com', 201);
        expect(manager1.getEmail()).toBe('email@test.com');
    })
    test('Receiving correct role', () => {
        const manager1 = new Manager('Chris', 1, 'email@test.com', 201);
        expect(manager1.getRole()).toBe('Manager');
    })
    test('Receiving correct office number', () => {
        const manager1 = new Manager('Chris', 1, 'email@test.com', 201);
        expect(manager1.getOfficeNumber()).toBe(201);
    })
})