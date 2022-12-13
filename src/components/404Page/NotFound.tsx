import { Player } from "@lottiefiles/react-lottie-player";
import Button from "../Button/Button";

import "./styles.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <div className="notfound-animation-container">
          <Player
            className="notfound-animation-player"
            src="https://assets5.lottiefiles.com/packages/lf20_ghfpce1h.json"
            loop
            autoplay
          />
        </div>
        <div className="notfound-speration"></div>
        <div className="notfound-message">
          <h1 className="notfound-title">404</h1>
          <p style={{ fontSize: "50px" }}>OOPS!</p>
          <p style={{ fontSize: "30px" }}>Looks you like are lost...!</p>
          <p style={{ fontSize: "20px" }}>
            We can't seems to find the page you are looking for
          </p>
          <p style={{ fontSize: "20px" }}>
            This might be a inernal error or this URL might not exist
          </p>
          <p style={{ fontSize: "20px" }}>Check Again or</p>
          <Button title="go home" onClick={() => {}} type="filled" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
