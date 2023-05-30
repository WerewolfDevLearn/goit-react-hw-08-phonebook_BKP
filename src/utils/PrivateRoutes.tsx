import { Outlet, Navigate } from 'react-router-dom';
import routes from '../components/routes';

interface IPrivateRoutes {
  flag: boolean;
}
export default function PrivateRoutes({ flag }: IPrivateRoutes) {
  return flag ? <Outlet /> : <Navigate to={routes.login} />;
}
