import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdQuestionAnswer,
  MdQuestionMark,
  MdBook,
  MdRoom,
  MdAssignment,
  MdAssignmentInd,
  MdAssignmentReturned,
  MdReport,
  MdAnalytics,
} from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default';
import UsersPage from 'views/admin/users';
import Profile from 'views/admin/profile';
import DataTables from 'views/admin/dataTables';
import RTL from 'views/admin/rtl';

// Auth Imports
import SignInCentered from 'views/auth/signIn';

const routes = [
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: 'Users',
    layout: '/admin',
    path: '/users',
    icon: (
      <Icon as={MdPerson} width="20px" height="20px" color="inherit" />
    ),
    component: <UsersPage />,
    secondary: true,
  },
  {
    name: 'Questions',
    layout: '/admin',
    icon: <Icon as={MdQuestionMark} width="20px" height="20px" color="inherit" />,
    path: '/data-tables',
    component: <DataTables />,
  },
  {
    name: 'Subjects',
    layout: '/admin',
    icon: <Icon as={MdBook} width="20px" height="20px" color="inherit" />,
    path: '/data-tables',
    component: <DataTables />,
  },
  {
    name: 'Rooms',
    layout: '/admin',
    icon: <Icon as={MdRoom} width="20px" height="20px" color="inherit" />,
    path: '/data-tables',
    component: <DataTables />,
  },
  {
    name: 'Exams',
    layout: '/admin',
    icon: <Icon as={MdAssignment} width="20px" height="20px" color="inherit" />,
    path: '/data-tables',
    component: <DataTables />,
  },
  {
    name: 'Answer Scripts',
    layout: '/admin',
    icon: <Icon as={MdAssignmentReturned} width="20px" height="20px" color="inherit" />,
    path: '/data-tables',
    component: <DataTables />,
  },
  {
    name: 'Reports',
    layout: '/admin',
    icon: <Icon as={MdAnalytics} width="20px" height="20px" color="inherit" />,
    path: '/data-tables',
    component: <DataTables />,
  },
  {
    name: 'Profile',
    layout: '/admin',
    path: '/profile',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: <Profile />,
  },
  {
    name: 'Sign In',
    layout: '/auth',
    path: '/sign-in',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: <SignInCentered />,
  },
  {
    name: 'RTL Admin',
    layout: '/rtl',
    path: '/rtl-default',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <RTL />,
  },
];

export default routes;
