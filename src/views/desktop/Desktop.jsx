import React from 'react'
import {Row,Col,Typography,Button,Divider} from 'antd'
import {CloseCircleOutlined,RightOutlined} from '@ant-design/icons'
import { useHideMenu } from '../../hooks/useHideMenu'
const {Title,Text} = Typography

const Desktop = () => {

  useHideMenu(false)
  const salir = ()=>{
    console.log('salir')
  }

  const nextTicket=()=>{
    console.log('siguiente ticket')
  }
  return (
    <>
      <Row>
         <Col span={20}>  
            <Title level={2}> Mateo </Title>
            <Text> Usted esta trabajando en el escritorio: </Text>
            <Text type='success'>5</Text>
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
      <Row>
        <Col>
          <Text> Esta atentiendo el ticket numero: </Text>
          <Text
            style={{fontSize:30}}
            type='danger'
            >55</Text>
        </Col>
      </Row>
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