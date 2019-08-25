import React, { useState } from 'react';

import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiFieldPassword,
  EuiSpacer
} from '@elastic/eui';

function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }
  function onEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }
  return (
    <EuiPage>
      <EuiPageBody>
        <EuiPageContent verticalPosition="center" horizontalPosition="center">
          <EuiPageContentBody>
            <EuiFieldPassword
              placeholder="Enter your username or email here "
              value={email}
              onChange={onEmailChange}
              aria-label="Use aria labels when no actual label is in use"
            />
            <EuiSpacer size="m" />
            <EuiFieldPassword
              placeholder="Enter your password here"
              value={password}
              onChange={onChange}
              aria-label="Use aria labels when no actual label is in use"
            />
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
}
export default Login;
