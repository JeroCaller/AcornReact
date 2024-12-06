import { createBrowserRouter } from 'react-router-dom';

// project import
import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';
import AdminRoutes from './AdminRoutes';

// ==============================|| ROUTING RENDER ||============================== //

const router = createBrowserRouter([MainRoutes, LoginRoutes, AdminRoutes], { basename: import.meta.env.VITE_APP_BASE_NAME });

export default router;
