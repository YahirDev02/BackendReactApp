import { Application } from 'express';
import UserNetwork from '../network/user';
import Routers from '../utils/constants/routes.json';

function routes(app: Application){
    app.use(Routers.userv1, UserNetwork);
}

export default routes;