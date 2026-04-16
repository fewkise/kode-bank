import { useLogout } from '@entities/auth/hooks/use-logout';

import { ProfileMain } from './profile-main';

export const ProfileMainConnector = () => {
  const { logout, isPending } = useLogout();

  return <ProfileMain isLoading={isPending} onPress={logout} />;
};
