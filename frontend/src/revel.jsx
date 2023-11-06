import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function PasswordInput() {
  const [userData, setUserData] = useState({ password: '' });
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div className="input">
      <label>Password</label>
      <input
        type={passwordShown ? "text" : "password"}
        name="password"
        value={userData.password}
        required
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      />
      <i onClick={togglePasswordVisiblity}>
        {passwordShown ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
      </i>
    </div>
  );
}

export default PasswordInput;
