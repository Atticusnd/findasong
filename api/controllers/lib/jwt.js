import jwt from 'jsonwebtoken';

const privateKey = 'iuwdiudsdsds';
const expirationTime = '1h';

const sign = (id) => {
    if(!id) return null
    const newToken = jwt.sign({ id}, privateKey, { expiresIn: expirationTime });
    console.log(newToken);
    return newToken;
}

const verify = (token) => {
    const { id } = jwt.verify(token, privateKey);
    return id;
}

export {
    sign,
    verify,
}