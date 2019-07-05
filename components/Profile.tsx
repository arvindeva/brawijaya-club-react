import React from 'react';
import { User } from '../generated/apolloComponents';

interface ProfileProps {
  me: User;
}

const Profile: React.FC<ProfileProps> = ({ me }) => (
  <div>
    <h2>Hi there, {me.username}</h2>
    <p>Email: {me.email}</p>
  </div>
);

export default Profile;
