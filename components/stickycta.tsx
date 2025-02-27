"use client";
import { FaCalendarAlt } from "react-icons/fa";
import MagicButton from "./MagicButton";

const StickyCTA = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
      <div className="rotate-90 origin-right">
        <MagicButton
          title="Schedule A Meeting"
          icon={<FaCalendarAlt />}
          position="right"
          otherClasses="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 text-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default StickyCTA;
