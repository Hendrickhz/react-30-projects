import React, { useState } from "react";
import Course from "./Course";
import courses from "./../db/courses.json";
const Courses = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="search course "
        className="p-3 rounded text-black"
      />
      <ul className=" flex mt-3 flex-wrap gap-8">
        {courses
          .filter((course) => {
            if (search == "") {
              return course;
            } else if (
              course.title
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
            ) {
              return course;
            }
          })
          .map((course) => (
            <Course course={course} />
          ))}
      </ul>
    </div>
  );
};

export default Courses;
