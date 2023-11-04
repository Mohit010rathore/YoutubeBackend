import crypto from 'crypto'
//to encrpt a password

const SECRET = 'MOHIT-REST-API';

//lets create a random token
export const random = () => crypto.randomBytes(128).toString('base64');

//create authentication 
export const authentication = (salt:string, password:string) =>{
    return crypto.createHmac('sha256',[salt,password].join('/')).update(SECRET).digest
}

