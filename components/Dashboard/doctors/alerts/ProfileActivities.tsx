import React from "react";

type Activity = {
  id: number;
  name: string;
  description: string;
  time: string;
  image: string;
};

const activities: Activity[] = [
  {
    id: 1,
    name: "Dr. Emily Johnson",
    description: "updated Patient Records",
    time: "10 minutes ago",
    image: "#",
  },
  {
    id: 2,
    name: "Nurse Mark Smith",
    description: "administered medication",
    time: "30 minutes ago",
    image: "#",
  },
];

const RecentActivities = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Recent Activities
      </h2>
      <ul className="space-y-3">
        {activities.map((activity) => (
          <li key={activity.id} className="flex items-center gap-4">
            <img
              src={activity.image}
              alt={activity.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <p className="text-gray-800 font-semibold">
                {activity.name}{" "}
                <span className="font-normal">{activity.description}</span>
              </p>
              <p className="text-gray-500 text-sm">{activity.time}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <a
          href="/activities"
          className="text-[#125872] hover:text-[#4398b8] font-semibold transition-colors duration-200"
        >
          View all activities
        </a>
      </div>
    </div>
  );
};

export default RecentActivities;