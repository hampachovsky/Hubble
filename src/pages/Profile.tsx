import { ProfileContent } from 'components/Profile/ProfileContent';
import { ProfileHeader } from 'components/Profile/ProfileHeader';
import React from 'react';

export const Profile: React.FC = () => {
  return (
    <div>
      <ProfileHeader />
      <ProfileContent />
    </div>
  );
};
