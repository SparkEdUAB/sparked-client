import React, { useState } from 'react';

import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiFieldPassword,
  EuiSpacer,
  EuiFieldText,
  EuiButton,
  EuiFlexItem
} from '@elastic/eui';
import { useFormInput } from './hooks';

function Login() {
  const password = useFormInput('');
  const email = useFormInput('');
  const [isLoading, setIsLoading] = useState(false);

  function handleLogin() {
    setIsLoading(true); // this will be turned off when we get a response back from the server
  }

  return (
    <EuiPage>
      <EuiPageBody>
        <EuiPageContent verticalPosition="center" horizontalPosition="center">
          <EuiPageContentBody>
            <EuiFieldText
              placeholder="Enter your username or email here "
              {...email}
              aria-label="email"
            />
            <EuiSpacer size="m" />
            <EuiFieldPassword
              placeholder="Enter your password here"
              {...password}
              aria-label="Password"
            />
            <EuiSpacer size="m" />
            <EuiFlexItem grow={false}>
              <EuiButton fill isLoading={isLoading} onClick={handleLogin}>
                {isLoading ? 'working on it ...' : 'Login'}
              </EuiButton>
            </EuiFlexItem>
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
}
export default Login;
