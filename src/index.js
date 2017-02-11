import './index.css';
import ApplicationFacade from './app/ApplicationFacade';

const appconfig = process.env;
const facade = new ApplicationFacade(appconfig);
facade.start();
