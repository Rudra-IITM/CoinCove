import Actions from './containers/actions.container'
import Chart from './containers/statistics.container'
import WalletTransactions from './containers/walletTransactions'
import reactLogo from '../assets/react.svg';
import { Card } from './ui/card';
import Profile from './containers/profile.container';
import { useScreenSize } from '@/hooks/screenSize';

const Dashboard = () => {
  const walletTransaction = [{
    profile: reactLogo, 
    name: 'Rudra', 
    date: 'Jan 16, 2023', 
    transaction: '-$835.00', 
    status: 'Success',
  }, {
    profile: reactLogo, 
    name: 'Rudra Pratap Singh', 
    date: 'Jan 14, 2023', 
    transaction: '+$835.25', 
    status: 'Pending',
  }, {
    profile: reactLogo, 
    name: 'Rudra', 
    date: 'Jan 16, 2023', 
    transaction: '-$835.00', 
    status: 'Success',
  }, {
    profile: reactLogo, 
    name: 'Rudra', 
    date: 'Jan 16, 2023', 
    transaction: '-$835.00', 
    status: 'Success',
  }, {
    profile: reactLogo, 
    name: 'Rudra', 
    date: 'Jan 16, 2023', 
    transaction: '-$835.00', 
    status: 'Success',
  }]

  const screenSize = useScreenSize();

  return (
    <div className='flex flex-col'>
      {screenSize.width < 768 ? null :
        <div className='p-5 '>
            <Profile profile={reactLogo} name='Rudra Pratap Singh' />
        </div>
      }
        <div className='p-5'>
            <Actions />
        </div>
        <div className='p-5'>
            <Chart />
        </div>
        <div>
        <div className='p-5'>
          <Card>
            <div className={`font-semibold text-lg ml-6 ${screenSize.width < 768? 'p-0 pb-5': 'p-5'} pb-2 pt-8`}>
                Wallet Transactions
            </div>
            {walletTransaction.map((prop, index) => (
              <div key={index} className='px-5 py-2'>
                  <WalletTransactions {...prop}/>
              </div>
            ))}
          </Card>
        </div>
        </div>
    </div>
  )
}

export { Dashboard }