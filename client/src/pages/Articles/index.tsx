import { BackToTop } from 'components/common/BackToTop';
import { PrivateLayout } from 'components/Layout/PrivateLayout';
import React from 'react';

export const Articles: React.FC = () => (
    <PrivateLayout>
        <>
            <h1>Articles page</h1>
            <BackToTop />
        </>
    </PrivateLayout>
);
