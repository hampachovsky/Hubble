import React from 'react';
import { PublicLayout } from 'components/Layout/PublicLayout';
import { SignUpForm } from './components/SignUpForm';

export const Register: React.FC = () => (
    <PublicLayout>
        <SignUpForm />
    </PublicLayout>
);
