import React from 'react';
import { Form, Input, Select, Button } from 'antd';

const NewSeller = () => {
  const { Option } = Select;

  const onFinish = (values) => {
    console.log('Form Submitted:', values);
    // Here you can add the logic for saving the seller details
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto' }}>
      <h2>Add New Seller</h2>
      <Form layout="vertical" onFinish={onFinish} style={{backgroundColor: }}>
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter the name!' }]}>
          <Input placeholder="Enter seller name" />
        </Form.Item>

        <Form.Item label="Industry" name="industry" rules={[{ required: true, message: 'Please select the industry!' }]}>
          <Select placeholder="Select industry">
            <Option value="Tech">Tech</Option>
            <Option value="Finance">Finance</Option>
            <Option value="Health">Health</Option>
          </Select>
        </Form.Item>

        <Form.Item label="State" name="state" rules={[{ required: true, message: 'Please select the state!' }]}>
          <Select placeholder="Select state">
            <Option value="Delaware">Delaware</Option>
            <Option value="Texas">Texas</Option>
            <Option value="California">California</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Revenue" name="revenue" rules={[{ required: true, message: 'Please enter revenue!' }]}>
          <Input placeholder="Enter revenue" />
        </Form.Item>

        <Form.Item label="No of Employees" name="employees" rules={[{ required: true, message: 'Please enter the number of employees!' }]}>
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
    </div>
  );
};

export default NewSeller;
