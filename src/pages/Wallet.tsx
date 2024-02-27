import Sidebar from '@/components/sidebar';
import { MyWallet } from '@/components/myWallet';
import { Dashboard } from '@/components/dashboard';
import { SheetDemo } from '@/components/containers/toggleSidebar';
import { useScreenSize } from '@/hooks/screenSize';
import Profile from '@/components/containers/profile.container';
import reactLogo from '@/assets/react.svg';

const Wallet = () => {

  const screenSize = useScreenSize()

  return (
    <>
    {screenSize.width > 768 ? 
    <div className=' flex flex-row h-screen'>
      <div className='basis-1/6'>
        <Sidebar />
      </div>
      <div className='basis-2/6 border-gray-100 border-r-2'>
        <MyWallet />
      </div>
      <div className='basis-3/6'>
        <Dashboard />
      </div>
    </div>
    :     
    <div className=' flex flex-col h-screen'>
      <div className='basis-1/6 flex flex-row justify-between items-center'>
        <SheetDemo />
        <Profile profile={reactLogo} name='Rudra Pratap Singh'/>
      </div>
      <div className='basis-2/6 border-gray-100 border-r-2'>
        <MyWallet />
      </div>
      <div className='basis-3/6'>
        <Dashboard />
      </div>
    </div>    
    }
    </>
  )
}

export default Wallet;
