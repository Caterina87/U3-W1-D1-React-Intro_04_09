import "./App.css";
import ButtonComponent from "./Components/ButtonComponent";
import ImageComponent from "./Components/ImageComponent";
import ImageComponentClass from "./Components/ImageComponentClass";

function App() {
  return (
    <div className="App">
      <ButtonComponent btnText="Bottone 1" />
      <ButtonComponent btnText="Bottone 2" />
      <ButtonComponent btnText="Bottone 3" />
      <ImageComponent
        src="https://images.pexels.com/photos/17984660/pexels-photo-17984660/free-photo-of-bianco-e-nero-donna-danzando-vestito.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="Ballerina"
      />
      <ImageComponentClass
        src="https://images.pexels.com/photos/17999161/pexels-photo-17999161/free-photo-of-persone-arte-strada-animale.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="Gatto"
      />
    </div>
  );
}

export default App;
