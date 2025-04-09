import React, { useState } from "react";
import { User } from "../types/interfaces";
import { Search, X } from "lucide-react";

interface UserListProps {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const UserList: React.FC<UserListProps> = ({ users, setUsers }) => {
  const [searchUser, setSearchUser] = useState<string>("");

  const addUser = () => {
    if (searchUser.trim()) {
      const newUser = { id: Date.now().toString(), name: searchUser };
      setUsers([...users, newUser]);
      setSearchUser("");
    }
  };

  const removeUser = (id: string) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="mb-8">
      <label className="block text-gray-700 mb-2">
        Add users to get particular notifications
      </label>
      <div className="flex items-center">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search size={16} className="text-gray-500" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Search Users"
            value={searchUser}
            onChange={(e) => setSearchUser(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && searchUser.trim() && addUser()
            }
          />
        </div>
        {searchUser.trim() && (
          <button
            type="button"
            className="ml-3 px-4 py-2 bg-black text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={addUser}
          >
            Add
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mt-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center bg-gray-100 px-3 py-1 rounded-full"
          >
            <span className="text-sm">{user.name}</span>
            <button
              type="button"
              className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => removeUser(user.id)}
            >
              <X size={16} className="cursor-pointer" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
