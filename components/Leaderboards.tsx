import React from 'react';
import styled from 'styled-components';
import { LeaderboardsComponent } from '../generated/apolloComponents';

const StyledLeaderboards = styled.div``;

const Leaderboards: React.FC = () => {
  return (
    <StyledLeaderboards>
      <h1>Public Leaderboards</h1>
      <LeaderboardsComponent>
        {({ loading, error, data }) => {
          if (loading) return <p>loading</p>;
          if (error) return <p>error</p>;
          return (
            <div>
              {data &&
                data.leaderboards.map(entry => {
                  return (
                    <div key={entry.id}>
                      <h1>{entry.user.username}</h1>
                      <p>Weight: {entry.weight}kg</p>
                      <p>Sets: {entry.sets}</p>
                      <p>Reps: {entry.reps}</p>
                    </div>
                  );
                })}
            </div>
          );
        }}
      </LeaderboardsComponent>
    </StyledLeaderboards>
  );
};

export default Leaderboards;
