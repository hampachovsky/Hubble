import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Button, Input, message, Modal, Select, Typography } from 'antd';
import { SelectValue } from 'antd/lib/select';
import React, { useState } from 'react';
import * as yup from 'yup';
import style from './WriteAritcleModal.module.less';

const { Title } = Typography;

type PropsType = {
  visible: boolean;
  toggleModal: () => void;
};

/* const validateForm = (title: string, content: string) => {
  let error = '';
  if (title.length < 3) {
    error = 'Please enter a title (min 3 characters)';
    return error;
  }
  if (content.length < 1) {
    error = 'Please enter a content';
    return error;
  }
}; */

let schema = yup.object().shape({
  title: yup
    .string()
    .min(3, 'Please enter a title (min 3 characters).')
    .required('Please enter a title'),
  content: yup.string().required('Please enter a content'),
});

export const WriteArticleModal: React.FC<PropsType> = ({ visible, toggleModal }) => {
  const [title, setTitle] = useState<string | number | readonly string[] | undefined>('');
  const [tags, setTags] = useState<SelectValue>([]);
  const [content, setContent] = useState('');

  const onSubmit = () => {
    schema
      .validate({
        title,
        content,
      })
      .catch((error) => {
        message.error(error.errors[0]);
        console.log(error.errors, 'error');
      });
    // validateForm();
    schema.isValid({ title, content }).then((result) => {
      if (result) {
        console.log('title', title, 'tags', tags, 'content', content);
      }
    });
    //.then((val) => console.log(val, 'valid'));
    //toggleModal();
  };

  return (
    <Modal
      title={<Title level={3}>Write Article</Title>}
      visible={visible}
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
