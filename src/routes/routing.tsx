import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import DefaultLayout from '@/components/common/Layout/DefaultLayout';
import SubLayout from '@/components/common/Layout/SubLayout';
import OAuthPage from '@/pages/Login/OAuthPage';
import MyPage from '@/pages/my/MyPage';
import NotFoundPage from '@/pages/NotFound/NotFoundPage';
import OnBoardingPage from '@/pages/OnBoarding/OnBoardingPage';
import SettingsPage from '@/pages/settings/SettingsPage';
import VoteCommentDetailPage from '@/pages/Vote/VoteCommentDetailPage';
import VotePage from '@/pages/Vote/VotePage';
import VoteRegistPage from '@/pages/Vote/VoteRegistPage';

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/votes/:shareUrl',
        element: <VotePage />,
      },
      {
        path: '/votes/:shareUrl/comments',
        element: <VoteCommentDetailPage />,
      },
      {
        path: '/oauth',
        element: <OAuthPage />,
      },
    ],
  },
  {
    element: <SubLayout />,
    children: [
      { path: '/', element: <App /> },
      { path: '/onboarding', element: <OnBoardingPage /> },
      {
        path: '/votes/regist',
        element: <VoteRegistPage />,
      },
      {
        path: '/user/:userId',
        element: <MyPage />,
      },
      {
        path: '/settings',
        element: <SettingsPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
