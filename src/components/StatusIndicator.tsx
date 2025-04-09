import React from "react";

const StatusIndicator: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4">
      <div className="bg-green-100 text-green-800 px-4 py-2 rounded-md shadow-md">
        Changes are saved automatically
      </div>
    </div>
  );
};

export default StatusIndicator;
