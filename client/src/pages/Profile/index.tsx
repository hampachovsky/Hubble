import { Space, Spin } from 'antd';
import { PrivateLayout } from 'components/Layout/PrivateLayout';
import { ProfileRoutesPath } from 'constants/routes';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { selectArticlesIsLoading } from 'store/slices/articlesSlice/selectors';
import { fetchLikedArticles, fetchOwnArticles } from 'store/slices/articlesSlice/thunk';
import { ProfileContent } from './components/ProfileContent';
import { ProfileHeader } from './components/ProfileHeader';

export const Profile: React.FC = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(selectArticlesIsLoading);
    useEffect(() => {
        if (location.pathname === ProfileRoutesPath.ARTICLES) dispatch(fetchOwnArticles());
        if (location.pathname === ProfileRoutesPath.RATED) dispatch(fetchLikedArticles());
    }, [dispatch, location.pathname]);
    return (
        <PrivateLayout>
            <Spin spinning={isLoading}>
                <Space align='center' direction='vertical'>
                    <ProfileHeader />
                    <ProfileContent />
                </Space>
            </Spin>
        </PrivateLayout>
    );
};
