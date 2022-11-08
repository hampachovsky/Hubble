import { UpOutlined } from '@ant-design/icons';
import { BackTop } from 'antd';
import React from 'react';

export const BackToTop: React.FC = () => (
    <BackTop>
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#1e1f26',
                color: '#ffffff',
                height: '40px',
            }}
        >
            <UpOutlined style={{ fontSize: '20px' }} />
        </div>
    </BackTop>
);
