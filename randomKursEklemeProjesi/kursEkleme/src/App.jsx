import { useState } from "react";
import Course from "./Course";
import "./App.css";

function getRandomCourse() {
  const courseArr = ["Angular", "Bootstrap", "Ccsharp", "Kompleweb"];
  return courseArr[
    Math.floor(Math.random() * courseArr.length)
  ]; /*0-3 arasi sayi uretir */
}

function App() {
  const [courses, setCourses] = useState([]);

  const handleClick = () => {
    setCourses([
      ...courses,
      getRandomCourse(),
    ]); /*...courses, daha onceki degerleri de dahil et 
    yeni geleni de sona ekle */
  };

  const courseList = courses.map((course, index) => {
    return <Course key={index} courseName={course} />;
  });
  return (
    <>
      <div className="App">
        <button className="btn" onClick={handleClick}>
          Kurs ekle
        </button>
        <div className="courseList">{courseList}</div>
      </div>
    </>
  );
}

export default App;
