import {sign, verify} from '../jwt.js';

describe('JWT sign and verify', () => {
    const jwt = sign('1234');
    it('Test if has no parameters', () => {
        expect(sign()).toBeNull();
    });
    it('Should return a valid string format', () => {
        expect(jwt).toEqual(expect.stringMatching(/^[\w-]*\.[\w-]*\.[\w-]*$/));
    })
    it('Sould verify return ID 1234 form a JWT signed', () => {
        expect('1234').toEqual(verify(jwt));
    });
});