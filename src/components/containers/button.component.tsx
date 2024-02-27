import { LucideIcon } from "lucide-react"
import { Button } from "../ui/button"
import { IconProps } from "@radix-ui/react-icons/dist/types";

interface ButtonProps {
    title: string;
    icon: LucideIcon | React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
}

const ButtonWrapper = (props: ButtonProps) => {
  return (
    <div className="p-0.5 w-full hover:bg-blue-400 rounded-full">
        <Button className="text-sm text-gray-500 hover:text-white">
            <props.icon className="mr-2 h-4 w-4" /> {props.title}
        </Button> 
    </div>
  )
}

export {ButtonWrapper}