import axios from "axios";
const crypto = require('crypto');
const algorithm = 'aes-256-ctr';
const password = 'gfhtyopmf';
import { userLogin, addLogin } from './LoginAction'

export const userRegister = user => {
  const encryptPass = encrypt(user.password)
  return axios.post("/api/users/register", user).then(res => {
    localStorage.setItem("email", res.data.email);
    localStorage.setItem("pass", encryptPass);
    return userLogin({ email: res.data.email, password: user.password })
      .then(user => addLogin(user.data))
  })
}



export const encrypt = function (texto) {
  let cipher = crypto.createCipher(algorithm, password)
  let crypted = cipher.update(texto, 'utf8', 'hex')
  crypted += cipher.final('hex');
  return crypted;
}

export const decrypt = function (texto) {
  let decipher = crypto.createDecipher(algorithm, password)
  let decrypted = decipher.update(texto, 'hex', 'utf8')
  decrypted += decipher.final('utf8');
  return decrypted;
}






