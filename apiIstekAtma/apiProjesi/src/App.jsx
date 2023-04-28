import SerachHeader from "./SearchHeader";
import searchImages from "./api";
import {useState} from 'react';
import "./App.css";
import ImageList from "./components/ImageList";

function App() {

  const [images, setimages] = useState([])
  const handleSubmit =async (value) => {
    const result = await searchImages(value);
    setimages(result);
  };
  return (
    <div className="App">
      <SerachHeader search={handleSubmit} />
      <ImageList imagePlaceHolder = {images}/>
    </div>
  );
}

export default App;
