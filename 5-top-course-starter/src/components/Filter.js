import React from "react";

const Filter = (props) => {
  let category = props.category;
  let setCategory = props.setCategory;
  function clickHandler(title) {
    setCategory(title);
  }
  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {props.filterData.map((item) => {
        return (
          <button
            onClick={() => clickHandler(item.title)}
            className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 transition-all duration-300 ${
              category === item.title
                ? "bg-opacity-60 border-white border"
                : "bg-opacity-30 border-transparent "
            }`}
            key={item.id}
          >
            {item.title}
          </button>
        );
      })}
    </div>
  );
};
export default Filter;
