import { useState } from "react";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";

function Courses({ courses }) {
  const [index, setindex] = useState(0);
  const { content, title, price } = courses[index];

  const checkIndex = (newIndex) => {
    if (newIndex < 0) {
      return courses.length - 1;
    }
    if(newIndex > courses.length - 1){
      return 0;
    }
    return newIndex;
  };
  const prevCourse = () => {
    setindex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  const nextCourse = () => {
    setindex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const getRandomCourse = ()=>{
    let randomNumber = Math.floor(Math.random()*courses.length);
    if (randomNumber === index) {
      randomNumber = index+1;
    }

    setindex(checkIndex(randomNumber));
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="text-center">
        <h2 className="display-2 mb-3 user-select-none">My Courses</h2>
        <button className="rounded-pill btn btn-outline-warning mb-3"
        onClick={getRandomCourse}>
          Get Random Course!
        </button>
      </div>
      <div className="table-group-divider container w-100 d-flex flex-wrap gap-3 justify-content-center">
        <button
          className="bg-transparent border-0 text-danger fs-3"
          onClick={prevCourse}
        >
          <AiOutlineDoubleLeft />
        </button>
        <div className="card my-2 p-2 rounded-4 border-secondary overflow-auto">
          <div className="card-header bg-transparent">
            <h2 className="card-header-title user-select-none">{title}</h2>
            <h4 className="card-header-title fst-italic text-danger user-select-none">
              {price}TL
            </h4>
          </div>
          <div className="card-body">
            <p className="card-content">{content}</p>
          </div>
        </div>
        <button
          className="bg-transparent border-0 text-danger fs-3"
          onClick={nextCourse}
        >
          <AiOutlineDoubleRight />
        </button>
      </div>
    </div>
  );
}

export default Courses;
