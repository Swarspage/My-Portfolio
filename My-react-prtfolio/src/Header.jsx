import React, { useState, useEffect } from "react";
function Header() {
  const [timeOnly, setTimeOnly] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const indiaTime = new Date().toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
      });
      setTimeOnly(indiaTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <header className="m-0 px-4 sm:px-6 md:px-10 max-w-full h-16 sm:h-20 flex items-center justify-between text-gray-50 font-[Quicksand]">
        <div className="time-date text-sm sm:text-base">IN {timeOnly}</div>
        <div className="time-date flex items-center justify-center text-sm sm:text-base">
          <img className="h-5 w-5 sm:h-7 sm:w-7 mr-1 sm:mr-2" src="./src/assets/location.png" alt="" />
          <span className="hidden xs:inline">Pune, India</span>
          <span className="xs:hidden">Pune</span>
        </div>
      </header>
    </>
  );
}
export default Header;
