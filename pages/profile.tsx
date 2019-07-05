import React from 'react';

import Layout from '../components/Layout';
import { MeComponent } from '../generated/apolloComponents';
import PleaseSignIn from '../components/PleaseSignIn';
import Profile from '../components/Profile';

const ProfilePage: React.FC = () => (
  <Layout title="Profile">
    <MeComponent>
      {({ data }) => (
        <div>
          <h1>Profile</h1>
          {data && data.me && data.me.username ? (
            <Profile me={data.me} />
          ) : (
            <PleaseSignIn />
          )}
        </div>
      )}
    </MeComponent>
  </Layout>
);

export default ProfilePage;
