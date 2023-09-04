const ImageComponent = (props) => (
  <div>
    <img src={props.src} alt={props.alt} style={{ maxWidth: "100%" }} />;
  </div>
);
export default ImageComponent;
