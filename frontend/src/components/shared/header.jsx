import { Link } from "react-router-dom";
import { Input, Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { PageHeader } from "@ant-design/pro-layout";

import "./shared.css";

const { Search } = Input;

export function AppHeader() {
  const onSearch = () => {

  }

  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="DNDStays"
        subTitle="Stays with DND"
        extra={[
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />,
          <Link to="login">
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
          </Link>
        ]}
        avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
      ></PageHeader>
    </div>
  )
}