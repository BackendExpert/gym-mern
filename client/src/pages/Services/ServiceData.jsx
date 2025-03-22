import { FaDumbbell, FaUsers, FaBoxesStacked   } from "react-icons/fa6";
import { MdSpatialTracking } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";


const servicedata = [
    {
        id: 1,
        name: 'Workout & Training Management',
        img: 'https://wallpapercave.com/wp/wp4838603.jpg',
        icon: FaDumbbell,
        desc: 'Optimize your fitness training sessions with our advanced workout tracking system.',
        services: [
            {id: 1, name: 'Create and customize workout plans for members.'},
            {id: 1, name: 'Assign exercises based on fitness levels and goals.'},
            {id: 1, name: 'Track progress with real-time updates and analytics.'},
        ]
    },

    {
        id: 2,
        name: 'Membership & Subscription Management',
        img: 'https://wallpapercave.com/wp/wp2482799.jpg',
        icon: FaUsers,
        desc: 'Easily manage members with an automated and secure system.',
        services: [
            {id: 1, name: 'Simple online registration and profile creation.'},
            {id: 1, name: 'Automated subscription renewals and reminders.'},
            {id: 1, name: 'Secure storage of member information.'},
        ]
    },


    {
        id: 3,
        name: 'Class & Session Scheduling',
        img: 'https://wallpapercave.com/wp/wp2482798.jpg',
        icon: FaDumbbell,
        desc: 'Provide members with an interactive scheduling system for classes and training sessions',
        services: [
            {id: 1, name: 'Manage group fitness classes, personal training, and special events.'},
            {id: 1, name: 'Online booking and automated reminders for upcoming sessions.'},
            {id: 1, name: 'Real-time updates on class availability.'},
        ]
    },

    {
        id: 4,
        name: 'Performance & Progress Tracking',
        img: 'https://wallpapercave.com/w200/wCNanCt.jpg',
        icon: MdSpatialTracking,
        desc: 'Help members stay motivated with detailed fitness tracking tools.',
        services: [
            {id: 1, name: 'Monitor progress on strength, endurance, and body transformation.'},
            {id: 1, name: 'Generate visual reports on workouts and nutrition.'},
            {id: 1, name: 'Trainer feedback system for performance improvement.'},
        ]
    },


    {
        id: 5,
        name: 'Health & Nutrition Guidance',
        img: 'https://wallpapercave.com/wp/wp8834029.jpg',
        icon: FaHeartbeat,
        desc: 'Offer personalized health and wellness support to your members.',
        services: [
            {id: 1, name: 'Provide diet plans and nutrition tracking tools.'},
            {id: 1, name: 'Access to certified trainers and dieticians.'},
            {id: 1, name: 'Monitor calorie intake and macronutrient distribution.'},
        ]
    },

    {
        id: 6,
        name: 'Product Sales & Inventory Management',
        img: 'https://wallpapercave.com/w200/wp3699399.jpg',
        icon: FaBoxesStacked,
        desc: 'Sell fitness-related products and manage stock efficiently.',
        services: [
            {id: 1, name: 'Online store for gym gear, supplements, and apparel.'},
            {id: 1, name: 'Inventory tracking to avoid stock shortages.'},
            {id: 1, name: 'Secure checkout and payment processing.'},
        ]
    },

    {
        id: 7,
        name: 'Gym Analytics & Business Insights',
        img: 'https://wallpapercave.com/w200/wp8834037.jpg',
        icon: FaDumbbell,
        desc: 'Access valuable insights to enhance gym operations.',
        services: [
            {id: 1, name: 'Real-time dashboards with key performance indicators.'},
            {id: 1, name: 'Member engagement reports and revenue tracking.'},
            {id: 1, name: 'AI-driven insights for business growth.'},
        ]
    },

    {
        id: 8,
        name: 'Customer Support & Service Updates',
        img: 'https://wallpapercave.com/w200/wp2639542.jpg',
        icon: TfiHeadphoneAlt,
        desc: 'We ensure continuous improvements and provide top-notch support.',
        services: [
            {id: 1, name: 'Regular software updates with new features and security enhancements.'},
            {id: 1, name: '24/7 customer support for troubleshootin'},
            {id: 1, name: 'Customized solutions for gym owners and trainers.'},
        ]
    },



]

export {servicedata}