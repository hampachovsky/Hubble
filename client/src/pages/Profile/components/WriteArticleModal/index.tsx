import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Button, Input, message, Modal, Select, Typography } from 'antd';
import { SelectValue } from 'antd/lib/select';
import { ArticlePayloadType } from 'api/articleAPI';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useState } from 'react';
import { fetchCreateArticle } from 'store/slices/articlesSlice/thunk';
import * as yup from 'yup';
import style from './WriteArticleModal.module.less';

const { Title } = Typography;

type Props = {
    open: boolean;
    toggleModal: () => void;
};

const schema = yup.object().shape({
    title: yup
        .string()
        .min(3, 'Please enter a title (min 3 characters).')
        .required('Please enter a title'),
    content: yup.string().required('Please enter a content'),
    category: yup.string().required('Please choose a category'),
});

export const WriteArticleModal: React.FC<Props> = ({ open, toggleModal }) => {
    const categories = useAppSelector((state) => state.categoryReducer.categories);
    const dispatch = useAppDispatch();
    const [title, setTitle] = useState<string>('');
    const [tags, setTags] = useState<SelectValue>([]);
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');

    const categoryOptions = categories?.map((categ) => ({
        label: categ.categoryName,
        value: categ.categoryName,
    }));

    const handleChangeCategory = (val: string) => {
        const selectedCategory = categories!.filter((categ) => categ.categoryName === val);
        setCategory(selectedCategory[0].id);
    };

    const onSubmit = () => {
        schema
            .validate({
                title,
                content,
                category,
            })
            .catch((error) => {
                message.error(error.errors[0]);
            });
        schema.isValid({ title, content, category }).then((result) => {
            if (result) {
                dispatch(
                    fetchCreateArticle({
                        title,
                        tags,
                        content,
                        categoryId: category,
                    } as ArticlePayloadType),
                );
                toggleModal();
                message.success('Article created successfully');
            }
        });
    };

    return (
        <Modal
            title={<Title level={3}>Write Article</Title>}
            open={open}
            width={1000}
            onCancel={toggleModal}
            footer={[
                <Button key='submit' type='primary' loading={false} onClick={onSubmit}>
                    Submit
                </Button>,
            ]}
        >
            <div className={style.formItem}>
                <Title level={5}>Title</Title>
                <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    name='title'
                    placeholder='Article title'
                />
            </div>
            <div className={style.formItem}>
                <Title level={5}>Tags</Title>
                <Select
                    mode='tags'
                    placeholder='Tags'
                    value={tags}
                    style={{ width: '100%' }}
                    onChange={(value: SelectValue) => setTags(value)}
                />
            </div>
            <div className={style.formItem}>
                <Title level={5}>Category</Title>
                <Select
                    style={{ width: 120 }}
                    onChange={handleChangeCategory}
                    options={categoryOptions}
                />
            </div>

            <div className={style.formItem}>
                <Title level={5}>Content</Title>
                <CKEditor
                    editor={ClassicEditor}
                    data={content}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setContent(data);
                    }}
                />
            </div>
        </Modal>
    );
};
