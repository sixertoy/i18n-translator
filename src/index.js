import './index.css';
import { version } from './../package.json';
import ApplicationFacade from './app/ApplicationFacade';

const appconfig = process.env;
const facade = new ApplicationFacade(appconfig);
facade.start(version);
