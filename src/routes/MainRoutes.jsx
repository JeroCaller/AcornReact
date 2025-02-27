import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Main from 'layout/Dashboard';
import Login from 'pages/authentication/login';

// 마이페이지
import MypageView from '../pages/acorn-pages/mypage/MypageView';
import MypageUpdate from '../pages/acorn-pages/mypage/MypageUpdate';
import ErrorBoundary from "../pages/extra-pages/ErrorBoundary";
import {element} from "prop-types";

// =====
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));

const Customer = Loadable(lazy(() => import('pages/acorn-pages/customer/Customer')));
const Member = Loadable(lazy(() => import('pages/acorn-pages/member/Member')));
const Service = Loadable(lazy(() => import('pages/acorn-pages/service/Service')));
const Reservation = Loadable(lazy(() => import('pages/acorn-pages/reservation/Reservation')));
const ProductB = Loadable(lazy(() => import('pages/acorn-pages/product/PRODUCT_B')));
const ProductS = Loadable(lazy(() => import('pages/acorn-pages/product/PRODUCT_S')));
const Order = Loadable(lazy(() => import('pages/acorn-pages/order/Order')));
const Notice = Loadable(lazy(() => import('pages/acorn-pages/notice/Notice')));
// ====================


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  errorElement: <ErrorBoundary />,
  children: [
    {
      path: "",
      element: <Login />,
    },
    {
      path: "/main/*",
      element: <Main />,
      children: [
        {
          path: "",
          element: <DashboardDefault />
        },
        {
          path: "dashboard",
          element: <DashboardDefault />
        },
        {
          path: 'customer/*',
          element: <Customer />
        },
        {
          path: 'member',
          element: <Member />
        },
        {
          path: 'service',
          element: <Service />
        },
        {
          children: [
            {
              path: "reservation",
              element: <Reservation/>
            },
            {
              path: "payment",
              element: <Reservation/>
            },
          ]
        },
        {
          children: [
            {
              path: "productB",
              element: <ProductB/>
            },
            {
              path: "productS",
              element: <ProductS/>
            },
          ]
        },        {
          path: 'order/*',
          element: <Order />
        },
        {
          path: 'notice/*',
          element: <Notice />
        },
        {
          path: 'manager/mypage',
          children: [
            {
              path: "view",
              element: <MypageView />
            },
            {
              path: 'update',
              element: <MypageUpdate />
            },
          ]
        },
      ],
    }
  ],
};

export default MainRoutes;
