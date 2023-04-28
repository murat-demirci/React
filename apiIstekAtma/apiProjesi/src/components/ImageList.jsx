import ImageItem from "./ImageItem";
import './ImageItem.css'

function ImageList({ imagePlaceHolder }) {
  return (
    <div className="imagesDiv">
      {imagePlaceHolder.map((image, index) => {
        return <ImageItem key={index} image={image} />;
      })}
    </div>
  );
}

export default ImageList;
