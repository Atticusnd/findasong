import bcrypt from 'bcrypt';

const SALTROUNDS = 10;
const encrypt = async (password, saltRounds ) => {
    try {
        const pswdSecured = await bcrypt.hash(password, SALTROUNDS);
        return pswdSecured;
    } catch (error) {
        throw new Error('Not posible to encrypt password');
    }
}

const comparePassword = async (password, passwordSaved) =>{
    return await bcrypt.compare(password, passwordSaved);
}

export {
    encrypt,
    comparePassword,
}