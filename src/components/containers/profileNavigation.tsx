import { NavigationMenuContent, NavigationMenuLink } from "@radix-ui/react-navigation-menu"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu"

interface navigationProps {
    profile: string;
    name: string;
}

const ProfileNavigation = (props: navigationProps) => {
  return (
    <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
            <NavigationMenuTrigger className="font-semibold text-md">{props.name}</NavigationMenuTrigger>
            <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>  
            <NavigationMenuContent>
                Hello World
            </NavigationMenuContent>  
            <NavigationMenuContent>
                Hello World
            </NavigationMenuContent>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
  )
}

export default ProfileNavigation