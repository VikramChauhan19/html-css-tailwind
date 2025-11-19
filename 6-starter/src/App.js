import React from "react";
import Testimonials from "./components/Testimonials";

const App = () => {
  return <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
    <div className="text-center">
      <h1 className="text-4xl font-bold">Our Testimonials</h1>
      <div className="bg-violet-500  h-[4px] w-[140px] mx-auto my-4"></div>
      <Testimonials />
    </div>
  </div>;
};

export default App;
