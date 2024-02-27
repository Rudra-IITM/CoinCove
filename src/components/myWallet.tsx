import { IndianRupeeIcon, Plus } from "lucide-react"
import BalanceContainer from "./containers/balance.container"
import indiaLogo from '../assets/india.jpeg';
import { Button } from "./ui/button";
import { useScreenSize } from "@/hooks/screenSize";

const MyWallet = () => {

    const props = [
        {
          balance: 1123123,
          currency: "IND",
          country: "IND",  
          verified: true,
          countryLogo: indiaLogo,
          darkTheme: true,
          icon: IndianRupeeIcon
      },
        {
          balance: 1123123,
          currency: "USD",
          country: "USD",
          verified: false,
          countryLogo: indiaLogo,
          darkTheme: false,
          icon: IndianRupeeIcon
        },    
        {
          balance: 3424234,
          currency: "EUR",
          country: "EUR",
          verified: true,
          countryLogo: indiaLogo,
          darkTheme: false,
          icon: IndianRupeeIcon
        },
      ]

      const screenSize = useScreenSize()

  return (
    <>
        <div className={`flex flex-row items-center justify-between ${screenSize.width > 768 ? 'pt-8 pb-8 pr-5 pl-10' : 'py-4 px-5'}`}>
            <div className="text-2xl font-semibold">
                My Wallets
            </div>
            <Button variant="ghost" className="">
                <Plus className="h-8 w-8 stroke-2" />
            </Button>
        </div >
        {props.map((prop, index) => (
          <div key={index} className={`pb-4 pt-4 h-50 mb-0 pr-5 ${screenSize.width > 768 ? 'pl-10' : 'pl-5'} hover:bg-blue-200 hover:border-r-blue-400 hover:border-r-8`}>
              <BalanceContainer {...prop}/>
          </div>
        ))}
        <div>
            <div className={`flex flex-row justify-center items-center ${screenSize.width > 768 ? null : 'pt-3'}`}>
                <Button className={`text-base text-blue-400 border-blue-400 border w-80 p-6 rounded-full hover:bg-blue-400 hover:text-white`}>
                    Add New Wallet
                </Button>
            </div>
        </div>
    </>
  )
}

export {MyWallet}