import React from "react";
import { Input, Button } from "react-rainbow-components";
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
            placeholder="Enter your email"
            type="email"
            className="rainbow-p-around_medium"
            style={inputStyles}
          />
          <br />
          <Input
            placeholder="Enter your password"
            type="password"
            className="rainbow-p-around_medium"
            style={inputStyles}
          />
          <br />

          <Input
            className="rainbow-m-around_medium"
            type="radio"
            label="Female"
            style={inputStyles}
          />
          <Input
            className="rainbow-m-around_medium"
            type="radio"
            label="Male"
            style={inputStyles}
          />
          <Button
            isLoading={false}
            label="Register"
            variant="brand"
            className="rainbow-m-around_medium"
          />
        </div>
      </div>
    </div>
  );
}
export default Register;
