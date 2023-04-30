import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Courses from "./Courses";
import Loading from "./Loading";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchCourses = async () => {
    setLoading(true);
    try {
      setCourses((await axios.get("http://localhost:3000/courses")).data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
        {courses.length === 0 ? (
          <div className="text-center">
            <h2>All Courses Have Been Deleted!</h2>
            <button className="btn btn-outline-warning rounded-pill" onClick={()=>{fetchCourses()}}>Refresh</button>
          </div>
        ):(<Courses courses={courses} />)}
        </>
      )}
    </div>
  );
}

export default App;
