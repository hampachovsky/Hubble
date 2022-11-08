import React from 'react';
import { PublicLayout } from 'components/Layout/PublicLayout';
import { SignInForm } from './components/SignInForm';

export const Login: React.FC = () => (
    <PublicLayout>
        <SignInForm />
    </PublicLayout>
);
