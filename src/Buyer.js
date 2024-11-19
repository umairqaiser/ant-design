import React, { useState } from 'react';
import { Layout, Table, Button, Dropdown, Menu, Avatar, Modal, Form, Input, Select } from 'antd';
import {
  PlusOutlined,
  UploadOutlined,
  EllipsisOutlined,
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
const { Option } = Select;

const Buyer = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Handle modal open/close
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Handle form submission
  const handleFinish = (values) => {
    console.log('Form Submitted:', values);
    setIsModalVisible(false); // Close the modal after form submission
  };

  // Data for the table
  const dataSource = [
    {
      key: '1',
      buyerId: '8996635',
      companyName: 'Anthony',
      industry: 'Tech',
      state: 'Delaware',
      city: 'United States',
      revenue: '$60,000',
      employees: 200,
      about: 'Processed',
    },
    {
      key: '2',
      buyerId: '8996636',
      companyName: 'Smith Inc.',
      industry: 'Finance',
      state: 'Texas',
      city: 'United States',
      revenue: '$80,000',
      employees: 300,
      about: 'Pending',
    },
    {
      key: '3',
      buyerId: '8996637',
      companyName: 'Drake Inc.',
      industry: 'Tech',
      state: 'London',
      city: 'United Kingdom',
      revenue: '$65,000',
      employees: 350,
      about: 'Done',
    },
  ];

  // Columns for the table
  const columns = [
    { title: 'Buyer ID', dataIndex: 'buyerId', key: 'buyerId' },
    { title: 'Company Name', dataIndex: 'companyName', key: 'companyName' },
    { title: 'Industry', dataIndex: 'industry', key: 'industry' },
    { title: 'State', dataIndex: 'state', key: 'state' },
    { title: 'City', dataIndex: 'city', key: 'city' },
    { title: 'Revenue', dataIndex: 'revenue', key: 'revenue' },
    { title: 'Employees', dataIndex: 'employees', key: 'employees' },
    { title: 'About', dataIndex: 'about', key: 'about' },
    {
      title: 'Actions',
      key: 'actions',
      render: () => (
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="1">Edit</Menu.Item>
              <Menu.Item key="2">Delete</Menu.Item>
            </Menu>
          }
          trigger={['click']}
        >
          <Button icon={<EllipsisOutlined />} type="text" />
        </Dropdown>
      ),
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
            <Menu.Item key="3">Buyer Opportunities</Menu.Item>
            <Menu.Item key="4">Seller Opportunities</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="5" icon={<TeamOutlined />} title="Administration">
            <Menu.Item key="6" style={{ color: 'blue', fontWeight: 'bold' }} onClick={() => navigate('/seller')}>
              Seller
            </Menu.Item>
            <Menu.Item key="6" style={{ color: 'blue', fontWeight: 'bold' }} onClick={() => navigate('/buyer')}>
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
          <h2>Buyer</h2>
          <div>
            <Dropdown overlay={avatarMenu} placement="bottomRight" trigger={['click']}>
              <Avatar src={avatar} style={{ cursor: 'pointer' }} />
            </Dropdown>
          </div>
        </Header>

        <Content style={{ margin: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'end', marginBottom: '16px' }}>
            <Button icon={<UploadOutlined />} style={{ marginRight: '8px' }}>
              Upload CSV
            </Button>
            <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
              Add New Seller
            </Button>
          </div>
          <Table dataSource={dataSource} columns={columns} />

          {/* Add New Seller Modal */}
          <Modal
            title="Add New Seller"
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={null}
          >
            <Form layout="vertical" onFinish={handleFinish}>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter the name!' }]}
              >
                <Input placeholder="Enter seller name" />
              </Form.Item>
              <Form.Item
                label="Industry"
                name="industry"
                rules={[{ required: true, message: 'Please select the industry!' }]}
              >
                <Select placeholder="Select industry">
                  <Option value="Tech">Tech</Option>
                  <Option value="Finance">Finance</Option>
                  <Option value="Health">Health</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="State"
                name="state"
                rules={[{ required: true, message: 'Please select the state!' }]}
              >
                <Select placeholder="Select state">
                  <Option value="Delaware">Delaware</Option>
                  <Option value="Texas">Texas</Option>
                  <Option value="California">California</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Revenue"
                name="revenue"
                rules={[{ required: true, message: 'Please enter revenue!' }]}
              >
                <Input placeholder="Enter revenue" />
              </Form.Item>
              <Form.Item
                label="No of Employees"
                name="employees"
                rules={[{ required: true, message: 'Please enter the number of employees!' }]}
              >
                <Input type="number" placeholder="Enter number of employees" />
              </Form.Item>
              <Form.Item label="About" name="about">
                <Input.TextArea rows={4} placeholder="Enter additional details" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Buyer;
