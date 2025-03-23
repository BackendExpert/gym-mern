import { BiSolidDashboard } from "react-icons/bi";
import { BsCalendar2DateFill } from "react-icons/bs";
import { MdWorkHistory } from "react-icons/md";
import { FaChartSimple, FaClipboardUser, FaUsersViewfinder, FaChalkboardUser, FaUsers, FaCreditCard, FaDumbbell  } from "react-icons/fa6";
import { FaFileSignature } from "react-icons/fa";
import { GrSchedules } from "react-icons/gr";



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
        icon: FaUsers,
        link: '#'
    },
    {
        id: 3,
        name: "Trainers",
        icon: FaChalkboardUser,
        link: '#'
    },
    {
        id: 4,
        name: "Membership & Add-ons",
        icon: FaCreditCard,
        link: '#'
    },
    {
        id: 5,
        name: "Check-ins & Attendance",
        icon: FaFileSignature,
        link: '#'
    },
    {
        id: 6,
        name: "Workouts & Classes",
        icon: FaDumbbell,
        link: '#'
    },
    {
        id: 7,
        name: "Reports & Analytics",
        icon: FaChartSimple,
        link: '#'
    },

    // for trainer
    {
        id: 8,
        name: "My Schedule",
        icon: GrSchedules,
        link: '#'
    },
    {
        id: 9,
        name: "Members Assigned",
        icon: FaUsersViewfinder,
        link: '#'
    },
    {
        id: 10,
        name: "Workout Plans",
        icon: FaDumbbell,
        link: '#'
    },
    {
        id: 11,
        name: "Attendance",
        icon: FaFileSignature,
        link: '#'
    },

    // for Member
    {
        id: 12,
        name: "My Membership",
        icon: FaClipboardUser,
        link: '#'
    },
    {
        id: 13,
        name: "Class Schedule",
        icon: BsCalendar2DateFill,
        link: '#'
    },
    {
        id: 14,
        name: "Trainer Sessions",
        icon: FaDumbbell,
        link: '#'
    },
    {
        id: 15,
        name: "Attendance History",
        icon: MdWorkHistory ,
        link: '#'
    },
]

export {sidemenu}