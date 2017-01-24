/* eslint-disable no-console */

// import nodemailer from 'nodemailer';
import xoauth2 from 'xoauth2';

import config from '../../config/config';
const serverConfig = config.getConfigByEnv();


const generator = xoauth2.createXOAuth2Generator({
  user: serverConfig.gmail.client_user,
  clientId: serverConfig.gmail.client_id,
  clientSecret: serverConfig.gmail.secret,
  refreshToken: serverConfig.gmail.refresh_token,
  accessToken: serverConfig.gmail.access_token,
});

generator.on('token', (token) => {
  console.log('New token for %s: %s', token.user, token.accessToken);
});

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     xoauth2: generator,
//   },
// });

const gmail = (req, res, next) => {

  if (serverConfig.gmail.isActive) {
    if (req.body.name === '' || req.body.email === '' || req.body.message === '') {
      return res.status(401).json({ message: 'All fields are required' });
    }
    
    console.log('Message sent');
    res.end('sent');
    
  } else {
    res.end('gmail is currently disabled');
  }
};

export default gmail;
