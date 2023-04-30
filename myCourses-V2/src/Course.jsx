function Course({ id, content, title, price, removeCourseById }) {
  return (
    <div className="card my-2 p-2 rounded-4 border-secondary">
      <div className="card-header bg-transparent">
        <h2 className="card-header-title">{title}</h2>
        <h4 className="card-header-title fst-italic text-danger">{price}TL</h4>
      </div>
      <div className="card-body">
        <p className="card-content">{content}</p>
      </div>
      <div className="card-footer bg-transparent">
        <button
          className="btn btn-outline-danger w-100 rounded-pill"
          onClick={() => removeCourseById(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Course;
