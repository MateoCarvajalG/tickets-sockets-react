import React from 'react'
import {Row,Col,Typography,Button,Divider} from 'antd'
import {DownloadOutlined} from '@ant-design/icons'
import { useHideMenu } from '../../hooks/useHideMenu'
import { useContext } from 'react'
import { SocketContext } from '../../context/SocketContext'
import { useState } from 'react'

const {Title,Text} = Typography

const AddTicket = () => {
  useHideMenu(true)

  const {socket} = useContext(SocketContext)
  const [lastTicket, setLastTicket]= useState({})
  const newTicket =()=>{
    socket.emit('new-ticket',null,(ticket)=>{
      setLastTicket(ticket)
    })
  }
  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Title level={3}>
            Presione el boton para generar un nuevo ticket
          </Title>
          <Button
            type='primary'
            shape='round'
            icon = {<DownloadOutlined/>}
            size="large"
            onClick={newTicket}
          >
           Nuevo Ticket 
          </Button>
        </Col>
      </Row>
      <Row style={{marginTop:100}}>
        <Col span={14} offset={6} align="center">
          <Text level={2}>
            Su numero
          </Text>
          <br />
          <Text type='success' style={{fontSize:55}}>
            {lastTicket.number}
          </Text>
        </Col>
      </Row>
    </>
  )
}

export default AddTicket