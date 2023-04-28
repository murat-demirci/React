import './Course.css'
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bs5.png";
import Ccsharp from "./images/ccsharp.png";
import Kompleweb from "./images/kompleweb.jpg";

const courseMap = {
  Angular,
  Bootstrap,
  Ccsharp,
  Kompleweb,
}; /*boyle tanimlandiginda Angular:Angular olmus sayilir */

function Course({ courseName }) {
  return (
    <div className='courseDiv'>
      <img src={courseMap[courseName]} alt="" />
    </div>
  );
}

export default Course;
