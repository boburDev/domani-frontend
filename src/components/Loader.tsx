// components/Loader.tsx
import React from "react";

const Loader = () => {
  return (
    <div className="flex z-50 justify-center items-center h-screen">
      <div className="border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
    </div>
  );
};

export default Loader;
