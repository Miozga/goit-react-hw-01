import friends from './FriendsList/Friends.json';
import FriendList from './FriendsList/FriendsList';
import TransactionHistory from './HistoryTransaction/TransactionHistory';
import transactions from './HistoryTransaction/transactions';
import Profile from './Profile/Profile';
import user from './Profile/user';
import Statistics from './Statistics/Statistics';
import statsData from './Statistics/statistic';

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
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
