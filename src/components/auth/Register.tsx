import React, { useState } from 'react';

import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiFieldPassword,
  EuiSpacer,
  EuiFieldText,
  EuiSelect,
  EuiButton,
  EuiFlexItem
} from '@elastic/eui';
import { useFormInput } from './hooks';

function Register() {
  const password = useFormInput('');
  const email = useFormInput('');
  const name = useFormInput('');
  const [gender, setGender] = useState('Female');
  const [loadingState, setLoadingState] = useState(false);

  const genderOptions = [
    { value: 'male', text: 'Male' },
    { value: 'female', text: 'Female' }
  ];
  function handleGenderChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setGender(event.target.value);
  }
  function handRegister() {
    setLoadingState(true); // this will be turned off when we get a response back from the server
  }
  return (
    <EuiPage>
      <EuiPageBody>
        <EuiPageContent verticalPosition="center" horizontalPosition="center">
          <EuiPageContentBody>
            <EuiFieldText
              placeholder="Enter your name here "
              {...name}
              aria-label="Name"
            />
            <EuiSpacer size="m" />
            <EuiFieldText
              placeholder="Enter your username or email here "
              {...email}
              aria-label="Email"
            />
            <EuiSpacer size="m" />
            <EuiFieldPassword
              placeholder="Enter your password here"
              {...password}
              aria-label="Password"
            />
            <EuiSpacer size="m" />
            <EuiSelect
              options={genderOptions}
              value={gender}
              onChange={handleGenderChange}
              aria-label="Gender"
            />
            <EuiSpacer size="m" />
            <EuiFlexItem grow={false}>
              <EuiButton fill isLoading={loadingState} onClick={handRegister}>
                {loadingState ? 'working on it ...' : 'Register'}
              </EuiButton>
            </EuiFlexItem>
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
}
export default Register;
