import {
  BookOutlined,
  DownOutlined,
  MessageOutlined,
  RetweetOutlined,
  UpOutlined,
} from '@ant-design/icons';
import { Col, Row, Space, Typography } from 'antd';
import React from 'react';
import style from './Articles.module.less';

const { Text } = Typography;

export const CardFooter = () => {
  return (
    <div>
      <Row align='bottom' justify='start' className={style.cardFooter}>
        <Col span={12} className={style.leftControlls}>
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
        <Col span={12} className={style.rightControlls}>
          <UpOutlined />
          <Text className={style.text}>0</Text>
          <DownOutlined />
        </Col>
      </Row>
    </div>
  );
};
