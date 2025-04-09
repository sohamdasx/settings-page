import React from "react";

interface NotificationSettingsProps {
  notificationsEnabled: boolean;
  setNotificationsEnabled: (enabled: boolean) => void;
}

const NotificationSettings: React.FC<NotificationSettingsProps> = ({
  notificationsEnabled,
  setNotificationsEnabled,
}) => {
  const handleToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  return (
    <>
      <h2 className="text-xl font-semibold mb-3">Notification Settings</h2>
      <p className="text-gray-600 mb-3">
        We keep the notifications off by default. You can change the settings
        for messages individually or you can reset to default.
      </p>

      <div className="flex items-center justify-between py-3">
        <label htmlFor="notifications" className="text-gray-700">
          Do you want notifications for every message? You will receive
          notification on the registered email address
        </label>
        <div
          className="relative inline-block w-12 h-6 transition duration-200 ease-in-out cursor-pointer ml-2"
          onClick={handleToggle}
        >
          <input
            type="checkbox"
            id="notifications"
            className="sr-only"
            checked={notificationsEnabled}
            onChange={handleToggle}
          />
          <div
            className={`block w-12 h-6 rounded-full ${
              notificationsEnabled ? "bg-black" : "bg-gray-300"
            }`}
          ></div>
          <div
            className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out ${
              notificationsEnabled ? "transform translate-x-6" : ""
            }`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default NotificationSettings;
