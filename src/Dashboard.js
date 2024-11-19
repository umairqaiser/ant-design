import React from 'react';
import { Layout, Menu, Card, Avatar, Dropdown } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Legend, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import logo from './assets/logo.svg';
import avatar from './assets/avatar.svg';
import {
  LogoutOutlined,
  LockOutlined,
  DashboardOutlined,
  TeamOutlined,
  BarChartOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const Dashboard = () => {
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    navigate('/login');
  };

  // Avatar dropdown menu
  const avatarMenu = (
    <Menu>
      <Menu.Item key="1" icon={<LockOutlined />}>
        Change Password
      </Menu.Item>
      <Menu.Item key="2" icon={<LogoutOutlined />} onClick={handleLogout}>
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
        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item
            key="1"
            icon={<DashboardOutlined />}
            style={{ color: 'blue', fontWeight: 'bold' }}
            onClick={() => navigate('/')}
          >
            Dashboard
          </Menu.Item>
          <Menu.SubMenu key="2" icon={<BarChartOutlined />} title="Recommendation">
          <Menu.Item key="3" onClick={() => navigate('/buyeropportunities')}>
              Buyer Opportunities
            </Menu.Item>
            <Menu.Item key="4">Seller Opportunities</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="5" icon={<TeamOutlined />} title="Administration">
            <Menu.Item key="6" onClick={() => navigate('/seller')}>
              Seller
            </Menu.Item>

            <Menu.Item key="7" onClick={() => navigate('/buyer')}>
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
          <h2>Matching Service</h2>
          <div>
            <Dropdown overlay={avatarMenu} placement="bottomRight" trigger={['click']}>
              <Avatar src={avatar} style={{ cursor: 'pointer' }} />
            </Dropdown>
          </div>
        </Header>
        <Content style={{ margin: '16px' }}>
          {/* Dashboard Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 mb-6">
            <Card style={{ width: '266px', height: '138px' }}>
              <h3
                style={{
                  fontSize: '14px',
                  fontFamily: 'Lato',
                  lineHeight: '22px',
                  fontWeight: '400',
                }}
              >
                Total Buyers
              </h3>
              <p
                style={{
                  fontSize: '38px',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  lineHeight: '46px',
                  color: 'blue',
                }}
              >
                4
              </p>
              <p
                style={{
                  color: 'black',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '22px',
                }}
              >
                Last run:{' '}
                <span style={{ color: 'green', padding: '10px' }}>
                  2023-12-20 18:25:37
                </span>
              </p>
            </Card>
            <Card style={{ width: '266px', height: '138px' }}>
              <h3
                style={{
                  fontSize: '14px',
                  fontFamily: 'Lato',
                  lineHeight: '22px',
                  fontWeight: '400',
                }}
              >
                Total Sellers
              </h3>
              <p
                style={{
                  fontSize: '38px',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  lineHeight: '46px',
                  color: 'blue',
                }}
              >
                10
              </p>
              <p
                style={{
                  color: 'black',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '22px',
                }}
              >
                Last run:{' '}
                <span style={{ color: 'green', padding: '10px' }}>
                  2023-12-20 18:25:37
                </span>
              </p>
            </Card>
          </div>

          {/* Opportunity Landscape Chart */}
          <Card>
            <h3>Opportunity Landscape</h3>
            <Bar
              data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                  {
                    label: 'Buyers',
                    backgroundColor: '#3b82f6',
                    data: [20, 30, 80, 60, 90, 40],
                  },
                  {
                    label: 'Sellers',
                    backgroundColor: '#22c55e',
                    data: [40, 50, 70, 80, 60, 30],
                  },
                  {
                    label: 'Opportunities',
                    backgroundColor: '#fbbf24',
                    data: [50, 60, 90, 70, 80, 50],
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                },
              }}
            />
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
