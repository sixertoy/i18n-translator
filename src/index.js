import './index.css';
import pkg from './../package.json';
import ApplicationFacade from './app/ApplicationFacade';

const appconfig = process.env;
const facade = new ApplicationFacade(appconfig);
facade.start(pkg);
