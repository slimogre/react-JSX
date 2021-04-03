
import myImage from "./isrc.jpg"

import './style.css';

function App() {
  return (
    <div className="App">
      <div>
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title red">Slim El Ghoul</h1>
    <br />
    <img src={myImage} width={1000} height={400} />
    <br />
    <img src="/ipublic.jpg" width={1000} height={400}/>
  </div>
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
</div>

    </div>
  );
}

export default App;
