import Course from "./Course";

function Courses({ courses,removeCourseById }) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div>
        <h2 className="display-2 mb-3">My Courses</h2>
      </div>
      <div className="table-group-divider container w-100 d-flex flex-wrap gap-3 justify-content-center">
        {
            courses.map((course)=>{
                return (<Course key={course.id} {...course} removeCourseById = {removeCourseById}/>)
            })
        }
      </div>
    </div>
  );
}

export default Courses;
