import Profile from './Profile/Profile';
import user from './Profile/user';
import Statistics from './Statistics/Statistics';
import statsData from './Statistics/data';

const App = () => (
  <div>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statsData} />
    <Statistics stats={statsData} />
  </div>
);

export default App;
