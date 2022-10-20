/* eslint-disable linebreak-style */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import AuthLayout from './layouts/Auth';
import ErrorLayout from './layouts/Error';
import DashboardLayout from './layouts/Dashboard';
import AdminLayout from './layouts/Admin';
import OverviewView from './views/FuelOverview';
import TemperatureView from './views/TemperatureOverview';
import CNCView from './views/LedOverview';
import ColdChainView from './views/ColdChainOverview';
import LiquidView from './views/LiquidOverview';
import PresentationView from './views/Landing';
import AdminView from './views/AdminOverview';
import QaView from './views/QaOverview';
import FaView from './views/FaOverview';
import EmView from './views/EmOverview';
import WtView from './views/WtOverview';
import EnvView from './views/EnvOverview';
import HtView from './views/HumidityTemperatureOverview';
import SecurityView from './views/SecurityOverview';
import AdminSettingsView from './views/AdminOverview/components/Settings';
import RectifierOverview from 'views/RectifierOverview';
import TubwellOverview from './views/TubewellOverview';
import LightOverview from './views/LightOverview';
import GeyserOverview from './views/GeyserOverview';
import Temperature_Overview from 'views/Temperature_Overview';
import TesComponent from './test folder/app';
import GasOverview from 'views/GasOverview';
import HybridGeyserOverview from 'views/HybridGeyserOverview';
import ModulesOverview from 'views/ModulesOverview';
import Complaints from 'views/Complaints';
import Register from 'views/Register';
import Email from 'views/Email';
const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/landing" />
  },
  
  {
    path: '/test',
    exact: true,
    component: TesComponent
  },

  {
    path: '/admin',
    component: AdminLayout,
    routes: [
      {
        path: '/admin/users',
        exact: true,
        component: AdminView
      },
      {
        path: '/admin/Modules',
        exact: true,
        component: ModulesOverview
      },
      {
        path: '/admin/complaints',
        exact: true,
        component: Complaints
      },
      {
        path: '/admin/email',
        exact: true,
        component: Email
      },
      {
        path: '/admin/settings',
        exact: true,
        component: AdminSettingsView
      },
      {
        path: '/admin/register',
        exact: true,
        component: lazy(() => import('views/Register'))
      }
    ]
  },
  {
    path: '/auth',
    component: AuthLayout,
    routes: [
      {
        path: '/auth/login',
        exact: true,
        component: lazy(() => import('views/Login'))
      },
      {
        path: '/auth/register',
        exact: true,
        component: lazy (()=> import('views/RegisterUser'))
      },

      {
        path: '/auth/admin/login',
        exact: true,
        component: lazy(() => import('views/AdminLogin'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    path: '/errors',
    component: ErrorLayout,
    routes: [
      {
        path: '/errors/error-401',
        exact: true,
        component: lazy(() => import('views/Error401'))
      },
      {
        path: '/errors/error-404',
        exact: true,
        component: lazy(() => import('views/Error404'))
      },
      {
        path: '/errors/error-500',
        exact: true,
        component: lazy(() => import('views/Error500'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    path: '/landing',
    component: PresentationView
  },
  {
    route: '*',
    component: DashboardLayout,
    routes: [
      {
        path: '/overview',
        exact: true,
        component: OverviewView
      },
      {
        path: '/fuel',
        exact: true,
        component: OverviewView
      },
      {
        path: '/temperature',
        exact: true,
        component: TemperatureView
      },
      {
        path: '/ht',
        exact: true,
        component: HtView
      },
      {
        path: '/security',
        exact: true,
        component: SecurityView
      },
      {
        path: '/rectifier',
        exact: true,
        component: RectifierOverview
      },
      {
        path: '/geyser',
        exact: true,
        component: GeyserOverview
      },
      {
        path: '/tubewell',
        exact: true,
        component: TubwellOverview
      },
      {
        path: '/light',
        exact: true,
        component: LightOverview
      },
      {
        path: '/cnc',
        exact: true,
        component: CNCView
      },
      {
        path: '/em',
        exact: true,
        component: EmView
      },
      {
        path: '/tank',
        exact: true,
        component: WtView
      },
      {
        path: '/env',
        exact: true,
        component: EnvView
      },
      {
        path: '/tempsys',
        exact: true,
        component: Temperature_Overview
      },
      {
        path: '/gassys',
        exact: true,
        component: GasOverview
      },
      {
        path: '/coldChain',
        exact: true,
        component: ColdChainView
      },
      {
        path: '/fa',
        exact: true,
        component: FaView
      },
      {
        path: '/liquid',
        exact: true,
        component: LiquidView
      },
      {
        path: '/geyser_hybrid',
        exact: true,
        component: HybridGeyserOverview
      },
      {
        path: '/waterQa',
        exact: true,
        component: QaView
      },
      {
        path: '/profile/:id',
        exact: true,
        component: lazy(() => import('views/Profile'))
      },
      {
        path: '/profile/:id/:tab',
        exact: true,
        component: lazy(() => import('views/Profile'))
      },
      {
        path: '/settings',
        exact: true,
        component: lazy(() => import('views/Settings'))
      },
      {
        path: '/settings/:tab',
        exact: true,
        component: lazy(() => import('views/Settings'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  }
];

export default routes;
