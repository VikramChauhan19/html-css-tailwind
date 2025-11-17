import React from "react";
import { useState } from "react";
import Card from "./Card";
const Cards = (props) => {
  let allCourses = [];
  const [likedCourses, setLikedCourses] = useState([]);
  let category = props.category;

  function getCourses() {
    if (category === "All") {
      let allCourses = [];

      Object.values(props.courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    } else {
      return props.courses[category];
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-6">
      {getCourses().map((course) => {
        return (
          <Card
            key={course.id}
            {...course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        );
      })}
    </div>
  );
};

export default Cards;
