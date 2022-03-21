import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, HeartOutlined } from '@ant-design/icons';
import pdf_to_image_png from '../../assets/images/card/pdf_to_image.png'
import history from '../../utils/history';

const { Meta } = Card;

export default () => {
    return <Card
    style={{ width: 300, boxShadow: '0px 6px 16px -8px rgba(0, 0, 0, 0.08), 0px 9px 28px 0px rgba(0, 0, 0, 0.05), 0px 12px 48px 16px rgba(0, 0, 0, 0.03)' }}
    cover={
      <img
        alt="example"
        height={175}
        src={pdf_to_image_png}
      />
    }
    actions={[
      <HeartOutlined key="heart" />,
      <EditOutlined key="edit" />,
      <span onClick={() => history.push('/convert')} >进入</span>,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="PDF转图片"
      description="PDF --> PNG"
    />
  </Card>
}