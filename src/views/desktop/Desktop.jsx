import React, { useEffect, useState } from 'react'
import {Row,Col,Typography,Button,Divider} from 'antd'
import {CloseCircleOutlined,RightOutlined} from '@ant-design/icons'
import { useHideMenu } from '../../hooks/useHideMenu'
import { getUsuarioStorage } from '../../helpers/getUsuarioStorage'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { SocketContext } from '../../context/SocketContext'
const {Title,Text} = Typography

const Desktop = () => {

  const navigate = useNavigate()
  const {socket} = useContext(SocketContext)

  const [usuario] = useState(getUsuarioStorage)
  const [ticket,setTicket]=useState(null)
  useHideMenu(false)
  const salir = ()=>{
    localStorage.clear()
    navigate('/',{ replace: true })
  }

  const nextTicket=()=>{
    socket.emit('next-ticket-to-work',usuario,(ticket)=>{
      setTicket(ticket)
    })
  }
  
  useEffect(()=>{
    if(!usuario.agente && !usuario.escritorio){
      return navigate('/')
    }
  },[])
  return (
    <>
      <Row>
         <Col span={20}>  
            <Title level={2}> {usuario.agente} </Title>
            <Text> Usted esta trabajando en el escritorio: </Text>
            <Text type='success'>{usuario.escritorio}</Text>
         </Col>
         <Col span={4} align="right">
            <Button
            shape='round'
            type='danger'
            onClick={salir}>
              <CloseCircleOutlined/>
              Salir
            </Button>
         </Col>
      </Row>
      <Divider/>
      {
        ticket && (
        <Row>
          <Col>
            <Text> Esta atentiendo el ticket numero: </Text>
            <Text
              style={{fontSize:30}}
              type='danger'
              >{ticket.number}</Text>
          </Col>
        </Row>
        )
      }
      <Row>
        <Col offset={18} span={6} align="right">
          <Button
            onClick={nextTicket}
            shape="round"
            type='primary'
          >
            <RightOutlined/>
            Siguiente
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default Desktop