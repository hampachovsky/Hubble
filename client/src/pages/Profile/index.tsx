import { Space } from 'antd';
import { PrivateLayout } from 'components/Layout/PrivateLayout';
import { ProfileRoutesPath } from 'constants/routes';
import { useAppDispatch } from 'hooks/redux';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchLikedArticles, fetchOwnArticles } from 'store/slices/articlesSlice/thunk';
import { ProfileContent } from './components/ProfileContent';
import { ProfileHeader } from './components/ProfileHeader';

export const Profile: React.FC = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (location.pathname === ProfileRoutesPath.ARTICLES) dispatch(fetchOwnArticles());
        if (location.pathname === ProfileRoutesPath.RATED) dispatch(fetchLikedArticles());
    }, [dispatch, location.pathname]);
    return (
        <PrivateLayout>
            <Space align='center' direction='vertical'>
                <ProfileHeader />
                <ProfileContent />
            </Space>
        </PrivateLayout>
    );
};
