import React from "react";
import Input from "react-rainbow-components/components/Input";
import "../../styles/styles.css";

function Register() {
  const inputStyles = {
    width: 300
  };
  return (
    <div className="register-page">
      <div className="rainbow-m-vertical_x-large rainbow-m_auto">
        <div className="rainbow-align-content_center rainbow-flex_wrap">
          <Input
            placeholder="Enter your name"
            type="text"
            className="rainbow-p-around_medium"
            style={inputStyles}
          />
            <br />
          <Input
            placeholder="**********"
            type="password"
            className="rainbow-p-around_medium"
            style={inputStyles}
          />
        </div>
      </div>
    </div>
  );
}
export default Register;
