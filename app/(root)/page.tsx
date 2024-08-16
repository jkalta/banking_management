import RightSidebar from '@/components/RightSidebar';
import HeaderBox from '../../components/HeaderBox';
import TotalBalanceBox from '../../components/TotalBalanceBox';

const Home = () => {
  const loggedIn = { firstName: 'Jitesh', lastName: 'Kalta', email: 'jiteshkalta@gmail.com' };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={20000.6}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 10000 }, { currentBalance: 10000 }]}
      />
    </section>
  )
}

export default Home