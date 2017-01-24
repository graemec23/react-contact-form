
import express from 'express';
import gmail from './gmail';

const mail = express.Router();

mail.post('/gmail', gmail);

mail.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

export default mail;
