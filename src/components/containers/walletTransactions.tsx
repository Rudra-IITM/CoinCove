import { CalendarCheck } from "lucide-react"
import { CardContent } from "../ui/card";
import { useScreenSize } from "@/hooks/screenSize";

interface transactionProps {
    profile: string;
    name: string;
    date: string;
    transaction: string;
    status: string;
}

const WalletTransactions = (props: transactionProps) => {
    const screenSize = useScreenSize();

  return (
    <>
        {screenSize.width > 768 ? 
        <CardContent className="flex flex-row items-center pb-0">
            <div className="flex felx-row items-center basis-64">
                <img src={props.profile} alt='profile' className='w-6 h-6 rounded-full inline mr-5' />
                <div className="font-semibold text-sm">
                    {props.name}
                </div> 
            </div>
            <div className="flex flex-row items-center text-sm basis-44">
                <CalendarCheck className="h-5 w-5 mr-1 stroke-slate-400"/>
                {props.date}
            </div>
            <div className="font-semibold text-sm basis-44">
                {props.transaction}
            </div>
            <div className={`${props.status=="Success" ? "bg-green-100" : "bg-red-100"} rounded-xl h-8 w-20 flex flex-row items-center justify-center`}>
                <div className={`${props.status=="Success" ? 'text-green-700' : "text-red-700"} text-xs`}>
                    {props.status}
                </div>
            </div>
        </CardContent>
        :    <CardContent className="w-full flex flex-col items-start justify-start p-0 pb-6">
        <div className="flex flex-row items-center ml-0">
            <img src={props.profile} alt='profile' className='w-6 h-6 rounded-full inline mr-5' />
            <div className="font-semibold text-sm">
                {props.name}
            </div> 
        </div>
        <div className="flex flex-row justify-between items-center p-0">
        <div className="flex flex-row items-center text-sm basis-2/3">
            <CalendarCheck className="h-5 w-5 mr-1 stroke-slate-400"/>
            {props.date}
        </div>
        <div className="font-semibold text-sm basis-1/3">
            {props.transaction}
        </div>
        <div className={`${props.status=="Success" ? "bg-green-100" : "bg-red-100"} rounded-xl h-8 w-20 flex flex-row items-center justify-center basis-1/3 ml-5`}>
            <div className={`${props.status=="Success" ? 'text-green-700' : "text-red-700"} text-xs`}>
                {props.status}
            </div>
        </div>
        </div>
    </CardContent>
}
    </>
  )
}

export default WalletTransactions