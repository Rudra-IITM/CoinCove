import { useScreenSize } from '@/hooks/screenSize';
import { Card, CardHeader } from '../ui/card'

const Actions = () => {
  const screenSize = useScreenSize();

  return (
    <Card className='flex flex-col'>
        <CardHeader className='flex flex-row justify-start pb-0'>
            <div className='text-md font-semibold'>
              Actions
            </div>
        </CardHeader>
        <div className='flex flex-row justify-around p-5'>
            <Card className={`${screenSize.width < 768 ? 'h-16 w-16': 'h-20 w-36'} rounded-2xl`}>

            </Card>
            <Card className={`${screenSize.width < 768 ? 'h-16 w-16': 'h-20 w-36'} rounded-2xl`}>
                
            </Card>
            <Card className={`${screenSize.width < 768 ? 'h-16 w-16': 'h-20 w-36'} rounded-2xl`}>
                
            </Card>
            <Card className={`${screenSize.width < 768 ? 'h-16 w-16': 'h-20 w-36'} rounded-2xl`}>
            </Card>
        </div>
    </Card>
  )
}

export default Actions