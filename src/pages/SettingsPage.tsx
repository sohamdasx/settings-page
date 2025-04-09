import React, { useState, useEffect } from "react";
import { User, Category, CustomReply } from "../types/interfaces";
import NotificationSettings from "../components/NotificationSettings";
import UserList from "../components/UserList";
import CategoryList from "../components/CategoryList";
import CustomReplies from "../components/CustomReplies";
import { useDebounce } from "../hooks/useDebounce";

const SettingsPage: React.FC = () => {
  const [notificationsEnabled, setNotificationsEnabled] =
    useState<boolean>(true);

  const [users, setUsers] = useState<User[]>([
    { id: "1", name: "Narendra Modi" },
    { id: "2", name: "Narendra Modi" },
    { id: "3", name: "Narendra Modi" },
  ]);

  const [categories, setCategories] = useState<Category[]>([
    { id: "1", name: "Hiring" },
    { id: "2", name: "Budget 2025" },
    { id: "3", name: "Resignation" },
  ]);

  const [customReplies, setCustomReplies] = useState<CustomReply[]>([
    { id: "1", text: "Sorry, I won't be able to attend" },
    { id: "2", text: "Let's move forward on the conversation" },
  ]);

  const saveSettings = async () => {
    try {
      console.log("Saving settings to API...");
      console.log({
        notificationsEnabled,
        users,
        categories,
        customReplies,
      });

      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.log("Settings saved successfully!");
    } catch (error) {
      console.error("Error saving settings:", error);
    }
  };

  const debouncedSaveSettings = useDebounce(saveSettings, 1000);

  useEffect(() => {
    debouncedSaveSettings();
  }, [notificationsEnabled, users, categories, customReplies]);

  return (
    <div className="max-w-4xl lg:mx-auto sm:mx-8 mx-4 p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-semibold mb-5">Application Settings</h1>
      <hr className="mb-5" />

      <NotificationSettings
        notificationsEnabled={notificationsEnabled}
        setNotificationsEnabled={setNotificationsEnabled}
      />

      <div className="border-gray-200 my-6 border-dotted"></div>

      <UserList users={users} setUsers={setUsers} />

      <div className="border-gray-200 my-6 border-t"></div>

      <CategoryList categories={categories} setCategories={setCategories} />

      <CustomReplies
        customReplies={customReplies}
        setCustomReplies={setCustomReplies}
      />

      <div className="fixed bottom-4 right-4">
        <div className="bg-green-100 text-green-800 px-4 py-2 rounded-md shadow-md">
          Changes are saved automatically
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
