import React from 'react'
import { Button, Form, Input ,InputNumber, Typography,Divider } from 'antd';
import {SaveOutlined} from '@ant-design/icons';
import {Navigate, useNavigate} from 'react-router-dom'
import { useHideMenu } from '../../hooks/useHideMenu';
import { useState } from 'react';
import { getUsuarioStorage } from '../../helpers/getUsuarioStorage';
import { useEffect } from 'react';

const{Title,Text} = Typography


const Login = () => {
  useHideMenu(false)
  
  const [usuario] = useState(getUsuarioStorage)
  const navigate = useNavigate ()

  const onFinish = ({agente,escritorio}) => {
      localStorage.setItem('agente',agente)
      localStorage.setItem('escritorio',escritorio)
      navigate('/desktop')
  };

  const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
  };

  useEffect(()=>{
    if(usuario.agente && usuario.escritorio){
      return navigate('/desktop')
    }
  },[])

  return (
    <>
    <Title level={2}>Ingresar</Title>
    <Text>Ingrese su nombre y numero de escritorio</Text>
    <Divider/>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 14 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Nombre del agente"
        name="agente"
        rules={[{ required: true, message: 'Por Favor ingrese su nombre'}]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Escritorio"
        name="escritorio"
        rules={[{ required: true, message: 'Ingrese el numero de escritorio' }]}
      >
        <InputNumber min={1} max={99} />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 14 }}>
        <Button type="primary" htmlType="submit" shape='round'>
            <SaveOutlined />
          Ingresar
        </Button>
      </Form.Item>
    </Form>
    </>
  )
}

export default Login