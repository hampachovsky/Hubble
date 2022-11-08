import { Layout, Typography } from 'antd';
import React from 'react';

export const Footer: React.FC = () => (
    <Layout.Footer style={{ textAlign: 'center' }}>
        <Typography.Text>
            © Hubble 2022 Created by <strong>Oleksandr Novak</strong>
        </Typography.Text>
    </Layout.Footer>
);
