import React, { FC } from 'react';
import { RegisterWrapper } from './Register.styled';

interface RegisterProps {}

const Register: FC<RegisterProps> = () => (
 <RegisterWrapper data-testid="Register">
    Register Component
 </RegisterWrapper>
);

export default Register;
