import React from 'react'
import {Row,Col,Typography,Button,Divider,List,Card,Tag} from 'antd'
import {DownloadOutlined} from '@ant-design/icons'
import { useHideMenu } from '../../hooks/useHideMenu';
import { useState } from 'react';
import { useContext } from 'react';
import { SocketContext } from '../../context/SocketContext';
import { useEffect } from 'react';
import { getLast } from '../../helpers/getLastTIckets';

const {Title,Text} = Typography

const Cola = () => {
  useHideMenu(true)
  const [tickets,setTickets]=useState([])
  const {socket} = useContext(SocketContext)
  
  useEffect(()=>{
   socket.on('assigned-ticket',(assigned)=>{
    console.log(assigned)
    setTickets(assigned)
   }) 
   return()=>{
    socket.off('assigned-ticket')
   }
  },[socket])

  useEffect(()=>{
    getLast().then((res)=>{
      setTickets(res)
    })
  },[])

  return (
  <>
    <Title level={1}>Atentiendo al cliente</Title>
    <Row>
      <Col span={12}>
        <List
          dataSource={tickets.slice(0,3)}
          renderItem={item=>(
            <List.Item>
              <Card
                style={{width:300, marginTop:10}}
                actions={[
                  <Tag color="volcano">{item.agente}</Tag>,
                  <Tag color="magenta">Escritorio:{item.desktop}</Tag>
                ]}
              >
                <Title>
                  No. {item.number}
                </Title>
              </Card>
            </List.Item>
          )}
        />
      </Col>
      <Col span={12}>
        <Divider> Historial</Divider>
        <List
          dataSource={tickets.slice(3)}
          renderItem={item=>(
            <List.Item>
              <List.Item.Meta 
                title={`ticket No. ${item.number}`}
                description={
                  <>
                  <Text type='secondary'>En el escritorio: </Text>
                  <Tag color='magenta'>{item.desktop}</Tag>
                  <Text type='secondary'>Agente: </Text>
                  <Tag color='magenta'>{item.agente}</Tag>
                  </>
                }
              />
            </List.Item>
          )}
        >

        </List>
      </Col>
    </Row>
  </>
  )
}

export default Cola