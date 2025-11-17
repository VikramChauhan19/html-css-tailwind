import React from "react";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Spinner from "./components/Spinner";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import { apiUrl, filterData } from "./data";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState(filterData[0].title);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        console.log(output);
        setCourses(output.data);
      } catch (error) {
        toast.error("Something went wrong");
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <NavBar />
      </div>
      <div className="bg-bgDark2">
        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
        </div>

        <div className="w-11/12 max-w-[1200px] flex flex-wrap mx-auto py-4 justify-center items-center min-h-[50vh]">
          {loading ? <Spinner /> : <Cards courses={courses} category={category} />}
        </div>
      </div>
    </div>
  );
};
export default App;
