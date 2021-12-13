import bcrypt from 'bcrypt';

const encrypt = async (password, saltRounds ) => {
    try {
        const pswdSecured = await bcrypt.hash(password, saltRounds);
        return pswdSecured;
    } catch (error) {
        throw new Error('Not posible to encrypt password');
    }
}

const comparePassword = async (passwordSaved, password) =>{
    return await bcrypt.compare(passwordSaved, password);
}

exports = {
    encrypt,
    comparePassword,
}