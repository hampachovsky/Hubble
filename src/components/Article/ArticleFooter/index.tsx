import {
  BookOutlined,
  DownOutlined,
  MessageOutlined,
  RetweetOutlined,
  UpOutlined,
} from '@ant-design/icons';
import { Col, Row, Space, Typography } from 'antd';
import React from 'react';
import style from './ArticleFooter.module.less';

const { Text } = Typography;

export const ArticleFooter: React.FC = () => {
  return (
    <div>
      <Row align='middle' justify='start' className={style.articleFooter}>
        <Col span={14} className={style.leftControlls}>
          <Space direction='horizontal' align='center'>
            <div className={style.controllItem}>
              <MessageOutlined />
              <Text className={style.text}>23</Text>
            </div>
            <div className={style.controllItem}>
              <BookOutlined />
            </div>
            <div className={style.controllItem}>
              <RetweetOutlined />
              <Text className={style.text}>1</Text>
            </div>
          </Space>
        </Col>
        <Col span={10} className={style.rightControlls}>
          <UpOutlined />
          <Text className={style.text}>0</Text>
          <DownOutlined />
        </Col>
      </Row>
    </div>
  );
};
