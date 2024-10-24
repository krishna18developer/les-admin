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
import QuestionsPage from 'views/admin/questions';

// Auth Imports
import SignInCentered from 'views/auth/signIn';
import SubjectsPage from 'views/admin/subjects';
import RoomsPage from 'views/admin/rooms';
import ExamsPage from 'views/admin/exams';
import AnswerScriptsPage from 'views/admin/answerscripts';
import ReportsPage from 'views/admin/reports';

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
    path: '/questions',
    component: <QuestionsPage />,
  },
  {
    name: 'Subjects',
    layout: '/admin',
    icon: <Icon as={MdBook} width="20px" height="20px" color="inherit" />,
    path: '/subjects',
    component: <SubjectsPage />,
  },
  {
    name: 'Rooms',
    layout: '/admin',
    icon: <Icon as={MdRoom} width="20px" height="20px" color="inherit" />,
    path: '/rooms',
    component: <RoomsPage />,
  },
  {
    name: 'Exams',
    layout: '/admin',
    icon: <Icon as={MdAssignment} width="20px" height="20px" color="inherit" />,
    path: '/exams',
    component: <ExamsPage />,
  },
  {
    name: 'Answer Scripts',
    layout: '/admin',
    icon: <Icon as={MdAssignmentReturned} width="20px" height="20px" color="inherit" />,
    path: '/answer-scripts',
    component: <AnswerScriptsPage />,
  },
  {
    name: 'Reports',
    layout: '/admin',
    icon: <Icon as={MdAnalytics} width="20px" height="20px" color="inherit" />,
    path: '/reports',
    component: <ReportsPage />,
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
];

export default routes;
