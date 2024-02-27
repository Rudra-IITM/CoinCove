import { Home, Paperclip, WalletIcon } from "lucide-react"
import { Separator } from "./ui/separator"
import { PaperPlaneIcon, PersonIcon } from "@radix-ui/react-icons"
import mainLogo from '../assets/main.svg'
import { Button } from "./ui/button"

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-gray-100 h-screen">
        <div className="flex flex-row justify-center items-center text-4xl pt-6">
            <img src={mainLogo} alt=""   className="h-16"/>
        </div>
        <Separator className="my-2 pb-5" />
        <div className="flex flex-col">
                <div className="flex flex-row justify-start items-start w-full px-5 py-1">
                    <Button className="flex flex-row justify-start items-center text-sm text-gray-500 w-full p-5 rounded-full hover:bg-blue-400 hover:text-white">
                        <Home className="mr-2 h-4 w-4" /> Home
                    </Button>
                </div>
                <div className="flex flex-row justify-start items-start w-full px-5 py-1">
                    <Button className="flex flex-row justify-start items-center text-sm text-gray-500 w-full p-5 rounded-full hover:bg-blue-400 hover:text-white">
                        <WalletIcon className="mr-2 h-4 w-4" /> My Wallet
                    </Button>
                </div>
                <div className="flex flex-row justify-start items-start w-full px-5 py-1">
                    <Button className="flex flex-row justify-start items-center text-sm text-gray-500 w-full p-5 rounded-full hover:bg-blue-400 hover:text-white">
                        <PaperPlaneIcon className="mr-2 h-4 w-4" /> Transfer
                    </Button>
                </div>
                <div className="flex flex-row justify-start items-start w-full px-5 py-1">
                    <Button className="flex flex-row justify-start items-center text-sm text-gray-500 w-full p-5 rounded-full hover:bg-blue-400 hover:text-white">
                        <Paperclip className="mr-2 h-4 w-4" /> Invoice
                    </Button>
                </div>
                <div className="flex flex-row justify-start items-start w-full px-5 py-1">
                    <Button className="flex flex-row justify-start items-center text-sm text-gray-500 w-full p-5 rounded-full hover:bg-blue-400 hover:text-white">
                        <PersonIcon className="mr-2 h-4 w-4" /> My Account
                    </Button>
                </div>
            </div>
    </div>
  )
}

export default Sidebar