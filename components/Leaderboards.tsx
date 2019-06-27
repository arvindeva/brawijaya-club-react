import React from 'react';
import styled from 'styled-components';
import { LeaderboardsComponent } from '../generated/apolloComponents';

const StyledLeaderboards = styled.div``;

const Leaderboards = () => {
  return (
    <StyledLeaderboards>
      <LeaderboardsComponent>
        {({ loading, error, data }) => {
          if (loading) return <p>loading</p>;
          if (error) return <p>error</p>;
          return (
            <div>
              <h1>LEADERBOARDS</h1>
              {data &&
                data.leaderboards.map(entry => {
                  return (
                    <div key={entry.id}>
                      <h1>{entry.user.username}</h1>
                      <p>{entry.name}</p>
                      <p>{entry.weight}</p>
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
