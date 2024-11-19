import React from 'react';
import { Layout, Table, Button, Dropdown, Menu, Avatar } from 'antd';
import {
  PlusOutlined,
  UploadOutlined,
  DashboardOutlined,
  TeamOutlined,
  BarChartOutlined,
  LockOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import logo from './assets/logo.svg';
import avatar from './assets/avatar.svg';

const { Header, Sider, Content } = Layout;

const BuyerOpportunities = () => {
  const navigate = useNavigate();

  // Dummy data for the table
  const dataSource = [
    {
      key: '1',
      similarityScore: 'Anthony',
      buyerId: '8996635',
      companyName: 'Anthony',
      companyIndustry: 'Tech',
      state: 'Delover',
      city: 'United States',
      revenue: '$60,000',
      employees: '200',
      about: 'processed',
    },
    {
      key: '2',
      similarityScore: 'Anthony',
      buyerId: '8996635',
      companyName: 'Anthony',
      companyIndustry: 'Tech',
      state: 'Delover',
      city: 'United States',
      revenue: '$60,000',
      employees: '200',
      about: 'processed',
    },
  ];

  // Define table columns
  const columns = [
    {
      title: 'Similarity Score',
      dataIndex: 'similarityScore',
      key: 'similarityScore',
    },
    {
      title: 'Buyer ID',
      dataIndex: 'buyerId',
      key: 'buyerId',
    },
    {
      title: 'Company Name',
      dataIndex: 'companyName',
      key: 'companyName',
    },
    {
      title: 'Company Industry',
      dataIndex: 'companyIndustry',
      key: 'companyIndustry',
    },
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'Revenue',
      dataIndex: 'revenue',
      key: 'revenue',
    },
    {
      title: 'Employees',
      dataIndex: 'employees',
      key: 'employees',
    },
    {
      title: 'About',
      dataIndex: 'about',
      key: 'about',
    },
  ];

  // Avatar dropdown menu
  const avatarMenu = (
    <Menu>
      <Menu.Item key="1" icon={<LockOutlined />}>
        Change Password
      </Menu.Item>
      <Menu.Item key="2" icon={<LogoutOutlined />} onClick={() => navigate('/login')}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sider style={{ backgroundColor: '#ffffff' }}>
        <div className="logo">
          <img
            src={logo}
            alt="Logo"
            style={{ margin: '16px auto', display: 'block', width: '40px', height: '40px' }}
          />
        </div>
        <Menu theme="light" defaultSelectedKeys={['6']} mode="inline">
          <Menu.Item key="1" icon={<DashboardOutlined />} onClick={() => navigate('/')}>
            Dashboard
          </Menu.Item>
          <Menu.SubMenu key="2" icon={<BarChartOutlined />} title="Recommendation">
            <Menu.Item
              key="6"
              style={{ color: 'blue', fontWeight: 'bold' }}
              onClick={() => navigate('/buyeropportunities')}
            >
              Buyer Opportunities
            </Menu.Item>
            <Menu.Item key="4">Seller Opportunities</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="5" icon={<TeamOutlined />} title="Administration">
            <Menu.Item
              key="7"
              style={{ color: 'blue', fontWeight: 'bold' }}
              onClick={() => navigate('/seller')}
            >
              Seller
            </Menu.Item>
            <Menu.Item
              key="8"
              style={{ color: 'blue', fontWeight: 'bold' }}
              onClick={() => navigate('/buyer')}
            >
              Buyer
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Sider>

      {/* Main Layout */}
      <Layout>
        <Header
          style={{
            background: '#fff',
            padding: '0 16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h2>Buyer Opportunities</h2>
          <Dropdown overlay={avatarMenu} placement="bottomRight" trigger={['click']}>
            <Avatar src={avatar} style={{ cursor: 'pointer' }} />
          </Dropdown>
        </Header>

        <Content style={{ margin: '16px', padding: '16px', background: '#fff' }}>
          <p>Lorem ipsum dolor sit amet consectetur. Tortor odio imperdiet a nam facilisis.</p>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
            <Button type="primary" icon={<UploadOutlined />} style={{ marginRight: '8px' }}>
              Export CSV
            </Button>
          </div>
          <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 5 }} bordered />
        </Content>
      </Layout>
    </Layout>
  );
};

export default BuyerOpportunities;
