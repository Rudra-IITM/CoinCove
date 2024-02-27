import { Bell } from "lucide-react";
import ProfileNavigation from "./profileNavigation";

interface ProfileProps {
    profile: string;
    name: string;
}

const Profile = (props: ProfileProps) => {
  return (
    <div className="flex flex-row  justify-end items-center mt-5">
        <Bell className="h-5 w-5 mr-5 stroke-slate-400"/>
        <img src={props.profile} alt='profile' className='w-6 h-6 rounded-full inline ' />
        <ProfileNavigation {...props}/>
    </div>
  )
}

export default Profile