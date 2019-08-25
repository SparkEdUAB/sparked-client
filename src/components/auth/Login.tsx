import React from 'react';

import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiFieldPassword,
  EuiSpacer,
  EuiFieldText
} from '@elastic/eui';
import { useFormInput } from './hooks';

function Login() {
  const password = useFormInput('');
  const email = useFormInput('');

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
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
}
export default Login;
