import { LikeFilled, LikeOutlined } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card, Comment, Tooltip, Typography } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { IArticle, IComment } from 'models/types';
import moment from 'moment';
import React, { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { fetchChangeCommentLike, fetchCreateComment } from 'store/slices/commentSlice/thunk';
import * as yup from 'yup';
import style from './Comment.module.less';

const validationSchema = yup.object().shape({
    comment: yup.string(),
});

type Props = {
    comments: IComment[];
    articleId: IArticle['id'];
};

type FormType = {
    content: string;
};

export const Comments: React.FC<Props> = ({ comments, articleId }) => {
    const userId = useAppSelector((state) => state.userReducer.user?._id);
    const dispatch = useAppDispatch();

    const handleLike = (commentId: IComment['id']) => {
        dispatch(fetchChangeCommentLike({ type: 'addLike', commentId }));
    };

    const handleDislike = (commentId: IComment['id']) => {
        dispatch(fetchChangeCommentLike({ type: 'removeLike', commentId }));
    };

    const {
        handleSubmit,
        control,
        reset,
        formState: { isDirty, isValid, isSubmitting, isSubmitSuccessful },
    } = useForm<FormType>({
        defaultValues: {
            content: '',
        },
        resolver: yupResolver(validationSchema),
        mode: 'onBlur',
        reValidateMode: 'onSubmit',
    });

    useEffect(() => {
        reset();
    }, [isSubmitSuccessful, reset]);

    const onSubmit: SubmitHandler<FormType> = async (data) => {
        await dispatch(fetchCreateComment({ content: data.content, articleId }));
    };

    return (
        <div className={style.commentsWrapper}>
            <Card
                className={style.comments}
                title={<Typography.Title level={4}>Comments</Typography.Title>}
            >
                <Comment
                    content={
                        <form action='submit' onSubmit={handleSubmit(onSubmit)}>
                            <Controller
                                name='content'
                                control={control}
                                render={({ field }) => (
                                    <TextArea className={style.commentField} rows={2} {...field} />
                                )}
                            />

                            <Button
                                disabled={!isDirty || !isValid || isSubmitting}
                                className={style.submitBtn}
                                htmlType='submit'
                                type='primary'
                            >
                                Add Comment
                            </Button>
                        </form>
                    }
                />
                {comments.map((comment) => (
                    <Comment
                        key={comment.id}
                        actions={[
                            <div key='comment-basic-like' className={style.commentAction}>
                                <div>
                                    <Tooltip
                                        title={
                                            comment.likedBy.includes(userId!)
                                                ? 'Remove like'
                                                : 'Like'
                                        }
                                    >
                                        {comment.likedBy.includes(userId!) ? (
                                            <LikeFilled onClick={() => handleDislike(comment.id)} />
                                        ) : (
                                            <LikeOutlined onClick={() => handleLike(comment.id)} />
                                        )}
                                    </Tooltip>
                                </div>
                                <div>
                                    <Typography.Text className={style.text}>
                                        {comment.likes}
                                    </Typography.Text>
                                </div>
                            </div>,
                        ]}
                        datetime={
                            <Tooltip
                                title={`${moment(comment.created).format(
                                    'MMMM Do YYYY, h:mm:ss a',
                                )}`}
                            >
                                <span>{`${moment(comment.created).fromNow()}`}</span>
                            </Tooltip>
                        }
                        author={
                            <Link
                                className={style.authorName}
                                to={`/profile/${comment.author._id}`}
                            >
                                {comment.author.username}
                            </Link>
                        }
                        content={<p>{comment.content}</p>}
                    />
                ))}
            </Card>
        </div>
    );
};
