import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardFooter } from '../ui/card';

interface balanceProps {
  balance: number;
  currency: string;
  country: string;
  verified: boolean;
  countryLogo: string;
  darkTheme?: boolean;
  icon: LucideIcon;
}

const BalanceContainer = (props: balanceProps) => {
  return (
    <Card className={`rounded-2xl ${props.darkTheme ? 'bg-black': ''} hover:border-black`}>
      <div className={`p-6 flex flex-row justify-between w-full items-center pb-4`}>
        <div className='text-base text-gray-500'>Balance</div>
        <div className='flex gap-3 justify-between items-center'>
          <img src={props.countryLogo} alt='country-logo' className='w-6 h-6 rounded-full' />
          <div className={`text-sm font-bold ${props.darkTheme ? 'text-white': ''}`}>{props.country}</div>
        </div>
      </div>
      <CardContent className='flex flex-row justify-start mt-0 items-end pb-4'>
          <props.icon className={`w-8 h-9 stroke-2 ${props.darkTheme ? 'stroke-white': ''}`} />
          <div className={`text-4xl font-bold ${props.darkTheme ? 'text-white': ''}`}> {props.balance} {' '}</div>
          <div className='ml-2 text-lg font-bold text-gray-500'>{props.currency}</div>
      </CardContent>
      <CardFooter className={`${(props.verified) ? 'text-green-500': 'text-red-500'}`}>
        {props.verified ? 'Verified *' : 'Pending verification'}
      </CardFooter>
    </Card>
  );
};

export default BalanceContainer;