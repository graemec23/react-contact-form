import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import compression from 'compression';
import api from '../api';
import config from './config';

const serverConfig = config.getConfigByEnv();

const expressConfig = (app) => {
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, '../views'));
  app.set('x-powered-by', false);
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use('/static', express.static(path.join(__dirname, '../../client/dist'), {
    maxAge: serverConfig.cacheTime,
  }));
  app.use('/api/v1', api);
};

export default expressConfig;
