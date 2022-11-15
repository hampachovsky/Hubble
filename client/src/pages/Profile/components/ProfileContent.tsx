import { Space, Spin } from 'antd';
import { BackToTop } from 'components/common/BackToTop';
import { useAppSelector } from 'hooks/redux';
import { ArticleCard } from 'pages/Articles/components/ArticleCard';
import React from 'react';
import { selectAllArticles, selectArticlesIsLoading } from 'store/slices/articlesSlice/selectors';
/*
const getProfileContent = (path: string) => {
    switch (path) {
        case ProfileRoutesPath.RATED: {
            return (
                <ArticleCard
                    id=''
                    title=''
                    content=''
                    author={{
                        _id: '',
                        username: '',
                    }}
                    tags={[]}
                    likes={0}
                    likedBy={[]}
                    comments={[]}
                    category={{ id: '1', categoryName: 's' }}
                    created={'2022-11-14T09:19:39.308Z' as unknown as Date}
                />
            );
        }
        default: {
            return (
                <Space direction='vertical' size='large'>
                    <ArticleCard
                        id=''
                        title=''
                        content=''
                        author={{
                            _id: '',
                            username: '',
                        }}
                        tags={[]}
                        likes={0}
                        likedBy={[]}
                        comments={[]}
                        category={{ id: '2', categoryName: 's' }}
                        created={'2022-11-14T09:19:39.308Z' as unknown as Date}
                    />
                    <ArticleCard
                        id='qwe'
                        title='wwwwwwwwwww'
                        content='lorem wqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq wqrwqr wqr wqrwqtqw fqw rwqe wqer wq'
                        author={{
                            _id: '3',
                            username: 'adminsw',
                        }}
                        tags={['qwe', 'rrr', 'nnn']}
                        likes={0}
                        likedBy={[]}
                        comments={[]}
                        category={{ id: '3', categoryName: 's' }}
                        created={'2022-11-14T09:19:39.308Z' as unknown as Date}
                    />
                </Space>
            );
        }
    }
};
 */
export const ProfileContent: React.FC = () => {
    const articles = useAppSelector(selectAllArticles);
    const isLoading = useAppSelector(selectArticlesIsLoading);
    return (
        <div style={{ paddingTop: 20, display: 'flex', justifyContent: 'center' }}>
            <Spin spinning={isLoading}>
                <Space direction='vertical' align='center' size='large'>
                    {articles.map((article) => (
                        <ArticleCard
                            id={article.id}
                            title={article.title}
                            content={article.content}
                            key={article.id}
                            tags={article.tags}
                            created={article.created}
                            comments={article.comments}
                            author={article.author}
                            likes={article.likes}
                            likedBy={article.likedBy}
                            category={article.category}
                        />
                    ))}
                </Space>
                <BackToTop />
            </Spin>
        </div>
    );
};
