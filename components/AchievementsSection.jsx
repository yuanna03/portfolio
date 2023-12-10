<<<<<<< HEAD
import React from "react";

const achievementsList = [
    {
        id: "projects", // Add unique keys for each element
        metric: "Projects",
        value: "2",
    },
    {
        id: "awards",
        metric: "Awards",
        value: "1",
    },
    {
        id: "years",
        metric: "Years",
        value: "1",
    }
];

const AchievementsSection = () => {
    return (
        <div className="xl:gap-3 sm:py-3 xl:px-12">
            <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between">
                {achievementsList.map((achievement) => (
                    <div
                        key={achievement.id} // Provide a unique key prop
                        className="flex flex-col items-center justify-center mx-4"
                    >
                        <h2 className="text-white text-4xl font-bold">
                            {achievement.value}
                        </h2>
                        <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AchievementsSection;
=======
import React from "react";

const achievementsList = [
    {
        metric: "Projects",
        value: "2",
    },
    {
        metric: "Awards",
        value: "1",
    },
    {
        metric: "Years",
        value: "1",
    }

];
const AchievementsSection = () => {
    return(
        <div className=" xl:gap-3 sm:py-3 xl:px-12">
            <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between">
            {achievementsList.map((achievement) => {
                return(
                    <div 
                        className="flex flex-col items-center justify-center mx-4">
                        <h2 className="text-white text-4xl font-bold">
                            {achievement.value}
                        </h2>
                        <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
                    </div>
                )
            }
            )}
            </div>
            </div>
    )
}
export default AchievementsSection;
>>>>>>> bd6b8b5a2e9f1ed020626a07e215639db395c947
