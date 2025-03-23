import { BiSolidDashboard } from "react-icons/bi";
import { BsGearFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { BiBuildings } from "react-icons/bi";
import { FaBuildingShield } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";


const sidemenu = [
    {
        id: 1,
        name: "Dashboard",
        icon: BiSolidDashboard,
        link: '/Dashboard/Home'
    },
    {
        id: 2,
        name: "Members",
        icon: MdWork,
        link: '#'
    },
    {
        id: 3,
        name: "Trainers",
        icon: BiBuildings,
        link: '#'
    },
    {
        id: 4,
        name: "Membership & Add-ons",
        icon: FaBuildingShield,
        link: '#'
    },
    {
        id: 5,
        name: "Check-ins & Attendance",
        icon: FaUsers,
        link: '#'
    },
    {
        id: 6,
        name: "Workouts & Classes",
        icon: BsGearFill,
        link: '#'
    },
    {
        id: 7,
        name: "Reports & Analytics",
        icon: BsGearFill,
        link: '#'
    },

    // for trainer
    {
        id: 8,
        name: "My Schedule",
        icon: BsGearFill,
        link: '#'
    },
    {
        id: 9,
        name: "Members Assigned",
        icon: BsGearFill,
        link: '#'
    },
    {
        id: 10,
        name: "Workout Plans",
        icon: BsGearFill,
        link: '#'
    },
    {
        id: 11,
        name: "Attendance",
        icon: BsGearFill,
        link: '#'
    },

    // for Member
    {
        id: 12,
        name: "My Membership",
        icon: BsGearFill,
        link: '#'
    },
    {
        id: 13,
        name: "Class Schedule",
        icon: BsGearFill,
        link: '#'
    },
    {
        id: 14,
        name: "Trainer Sessions",
        icon: BsGearFill,
        link: '#'
    },
    {
        id: 15,
        name: "Attendance History",
        icon: BsGearFill,
        link: '#'
    },
]

export {sidemenu}