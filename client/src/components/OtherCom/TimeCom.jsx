import { useState, useEffect } from "react";

const TimeCom = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();

    // Define Peak and Off-Peak hours
    const MorningPeak = (hours === 5 && minutes >= 30) || (hours > 5 && hours < 9);
    const AfternoonPeak = (hours === 15 && minutes >= 30) || (hours > 15 && hours < 21);
    
    // Format date-time as per your requirement
    const formattedDate = dateTime.toLocaleString();

    return (
        <div className="text-lg font-bold text-orange-500">
            <center>
                {
                    MorningPeak || AfternoonPeak ?
                        <div className="bg-red-500 py-4 px-8 rounded-lg">
                            <h1 className="text-white font-semibold">{formattedDate}</h1>
                        </div>
                        :
                        <div className="bg-green-500 py-4 px-8 rounded-lg">
                            <h1 className="text-white font-semibold">{formattedDate}</h1>
                        </div>
                }
            </center>

            <div className="mt-6">
                {
                    MorningPeak || AfternoonPeak ?
                        <div className="text-center">
                            <h1 className="">Peak Hours</h1>
                            <p className="text-white">Now GYM usage is Very Busy</p>
                        </div>
                        :
                        <div className="text-center">
                            <h1 className="">Off-Peak Hours</h1>
                            <p className="text-white">Now GYM usage is Not Busy</p>
                        </div>
                }
            </div>

            <div className="bg-[#0a0a0a] mt-8 p-4 rounded-lg">
                <h1 className="font-semibold">Peak and OFF Peak Hours</h1>
                <table className="w-full mt-4">
                    <thead>
                        <tr className="h-8 bg-orange-500 text-white">
                            <th>Time</th>
                            <th>Time Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-white">
                        <tr className="h-12 border-b border-white">
                            <th>5.30 AM - 9.00 AM</th>
                            <th className="font-semibold text-red-500">Morning Peak Hours</th>
                        </tr>
                        <tr className="h-12 border-b border-white">
                            <th>9.00 AM - 4.30 PM</th>
                            <th className="font-semibold text-green-500">Off-Peak Hours</th>
                        </tr>
                        <tr className="h-12 border-b border-white">
                            <th>4.30 PM - 9.00 PM</th>
                            <th className="font-semibold text-red-500">Afternoon Peak Hours</th>
                        </tr>
                        <tr className="h-12 border-b border-white">
                            <th>9.00 PM - 5.30 AM</th>
                            <th className="font-semibold text-green-500">Off-Peak Hours</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TimeCom;
