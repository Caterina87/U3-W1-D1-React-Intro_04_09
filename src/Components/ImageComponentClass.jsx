import React from "react";
class ImageComponentClass extends React.Component {
  render() {
    console.log("CLASS PROPS", this.props);

    return (
      <div>
        <img src={this.props.src} alt={this.props.alt} style={{ maxWidth: "100%" }} />;
      </div>
    );
  }
}

export default ImageComponentClass;
