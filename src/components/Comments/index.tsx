import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Comment, Tooltip, Typography } from 'antd';
import { useFormik } from 'formik';
import TextArea from 'rc-textarea';
import React, { createElement, useState } from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import style from './Comment.module.less';

const validationSchema = yup.object().shape({
  comment: yup.string(),
});

type FormInitialValuesType = {
  comment: string;
};

const mockData = [1, 2, 3, 4, 5];

export const Comments: React.FC = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState<string | null>(null);

  const handleLike = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const handleDislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };

  const actions = [
    <Tooltip key='comment-basic-like' title='Like'>
      <span className={style.commentAction} onClick={handleLike}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className='comment-action'>{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key='comment-basic-dislike' title='Dislike'>
      <span className={style.commentAction} onClick={handleDislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span>{dislikes}</span>
      </span>
    </Tooltip>,
    [<span key='comment-reply'>Reply to</span>],
  ];

  const formik = useFormik({
    initialValues: {
      comment: '',
    } as FormInitialValuesType,
    validationSchema: validationSchema,
    validateOnBlur: true,
    onSubmit: (values, actions) => {
      console.log(values);
      actions.setSubmitting(false);
    },
  });

  return (
    <div className={style.commentsWrapper}>
      <Card
        className={style.comments}
        title={<Typography.Title level={4}>Comments</Typography.Title>}
      >
        <Comment
          avatar={<Avatar src='https://joeschmoe.io/api/v1/random' alt='Han Solo' />}
          content={
            <form onSubmit={formik.handleSubmit}>
              <TextArea
                className={style.commentField}
                name='comment'
                rows={2}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.comment}
              />
              <Button htmlType='submit' type='primary'>
                Add Comment
              </Button>
            </form>
          }
        />
        {mockData.map((item, index) => {
          return (
            <Comment
              key={item}
              actions={actions}
              author={
                <Link className={style.authorName} to={`/profile/${item}`}>
                  Han Solo {item}
                </Link>
              }
              avatar={<Avatar src='https://joeschmoe.io/api/v1/random' alt='Han Solo' />}
              content={
                <p>
                  We supply a series of design principles, practical patterns and high quality
                  design resources (Sketch and Axure), to help people create their product
                  prototypes beautifully and efficiently.
                </p>
              }
            >
              <Comment
                key={index}
                actions={actions}
                author={
                  <Link className={style.authorName} to={`/profile/${item}`}>
                    Han Solo {item}
                  </Link>
                }
                avatar={
                  <Avatar shape='square' src='https://joeschmoe.io/api/v1/random' alt='Han Solo' />
                }
                content={<p>We supply a series of design principles.</p>}
              />
            </Comment>
          );
        })}
      </Card>
    </div>
  );
};
