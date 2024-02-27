import { BarChart } from '@mui/x-charts/BarChart';
import { Card } from '@mui/material';
import { useScreenSize } from '@/hooks/screenSize';

const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300, 3434, 2300];
const xLabels = [
  'Jan 10',
  'Jan 11',
  'Jan 12',
  'Jan 13',
  'Jan 14',
  'Jan 15',
  'Jan 16',
  'Jan 17',
  'Jan 18',
];
const yLables = [
  '20 k',
  '5 k',
  '3 k',
  '0 k',
];

export default function Chart() {

  const screenSize = useScreenSize();

  return (
    <Card className='flex flex-col items-center justify-center'>
      <div className='flex flex-row justify-between items-center w-full p-5'>
        <div className='text-lg font-semibold ml-5'>
          Statistics
        </div>
        <div className='flex flex-row justify-between items-center'>
        </div>
      </div>
      <div className='flex flex-row justify-center items-center'>
        <BarChart
          width={screenSize.width < 768 ?  screenSize.width - 20 : 700}
          height={300}
          series={[
            { data: pData,  id: 'pvId' },
          ]}
          xAxis={[{ data: xLabels, scaleType: 'band'}]}
          yAxis={[{ data: yLables, scaleType: 'band'}]}
        />
      </div>
    </Card>
  );
}