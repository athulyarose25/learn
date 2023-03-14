import React from "react";
import { Row, Col, Layout, Input ,Space,Card,Table,Dropdown,Tag,Button, Form} from "antd";
import  { message } from 'antd';
import { useState } from 'react';
import { ReactComponent as Img } from "./user.svg";
import { Typography } from 'antd';
import { Pagination } from 'antd';


import { FilterTwoTone, CheckOutlined,PlusOutlined, FilePdfOutlined,CheckCircleTwoTone ,FilterFilled ,PlusCircleTwoTone ,MenuOutlined, DownOutlined, UserOutlined} from '@ant-design/icons';

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';
import logo1 from "./odex.png"; 
//import "antd/dist/antd.css";
import { MailOutlined, SearchOutlined } from "@ant-design/icons";
import { TitleSearch } from "./TitleSearch";
const { Text } = Typography;
const { Header, Footer, Sider, Content } = Layout;

const columns = [
    {
      title: 'BL Number',
      dataIndex: 'BL',
      responsive: ['lg'],

   defaultSortOrder: 'descend',
    sorter: (a, b) => a.BL.length - b.BL.length,
    width: '10%',
    render: (BL, record) => (
      <Typography.Text style={{ fontSize: record.size }}>
        {BL}
      </Typography.Text>
    )
  //  sortDirections: ['descend'],
  
  },
  {
    title: 'cosinee',
    dataIndex: 'CON',
    responsive: ['lg'],
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
   // width: '10%'
   width: '1%',
   render: (CON, record) => (
    <Typography.Text style={{ fontSize: record.size }}>
      {CON}
    </Typography.Text>
  )
  },
  {
    title: 'nominated agent',
    responsive: ['lg'],
    dataIndex: 'Nominated',
    //width: '5%%',
    responsive: ['lg'],
    width: '15%',
    render: (Nominated, record) => (
      <Typography.Text style={{ fontSize: record.size }}>
        {Nominated}
      </Typography.Text>
    ),
   /*  filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0, */
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.address - b.address,
  },
  {
    title: 'POL',
    dataIndex: 'POL',
    responsive: ['lg'],
    defaultSortOrder: 'descend',
    responsive: ['lg'],
    sorter: (a, b) => a.POL - b.POL,
   // width: '15%',
    render: (POL, record) => (
      <Typography.Text style={{ fontSize: record.size }}>
        {POL}
      </Typography.Text>
    )
  },
  {
    title: 'POD',
    dataIndex: 'POD',
    responsive: ['lg'],
  
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.POD - b.POD,
  //  width: '15%',
    render: (POD, record) => (
      <Typography.Text style={{ fontSize: record.size }}>
        {POD}
      </Typography.Text>
    )
  },
  {
    title: 'END',
    responsive: ['lg'],
   
    dataIndex: 'End',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.End - b.End,
    //width: '15%',
    render: (End, record) => (
      <Typography.Text style={{ fontSize: record.size }}>
        {End}
      </Typography.Text>
    )
  },
  
  {
    title: 'Instructions',
    responsive: ['lg'],
    key: 'Instruction',
    dataIndex: 'Instruction',
   // width: '10%',
      
    render: (_, { Instruction }) => (
      <>
        {Instruction.map((tag) => {
          let color 
          //= tag=='Completed'  ? 'green' :'Requested' ? 'red':'Overdue'?'red':'white'
          if (tag === 'Completed') {
            color = 'green';
            return (
              <Tag color={color} key={tag} >
                {tag}
               
                <CheckOutlined />
              </Tag>
              
            );
          }
          if (tag === 'Requested') {
            color = 'geekblue';
            return (
              <Tag color={color} key={tag} >
                {tag}
                <PlusOutlined/>
              </Tag>
              
            );
           
          }
          if (tag === 'Overdue') {
            color = 'red';
          }
          return (
            <Tag color={color} key={tag} >
              {tag}
             
            </Tag>
            
          );
        })}
      </>
    ),
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.Instructions - b.Instructions,
  },
   
   
  {
    title: 'Payement',
    responsive: ['lg'],
    key: 'Payement',
    dataIndex: 'Payement',
   // width: '2%',
      
    render: (_, { Payement }) => (
      <>
        {Payement.map((tag) => {
          let color 
          //= tag=='Completed'  ? 'green' :'Requested' ? 'red':'Overdue'?'red':'white'
          if (tag === 'Paid') {
            color = 'green';
          }
          if (tag === 'Print Initiated') {
            color = 'geekblue';
            return (
              <Tag color={color} key={tag} >
                {tag}
                <PlusOutlined/>
              </Tag>
              
            );
          }
          
          return (
            <Tag color={color} key={tag}>
              {tag}
            </Tag>
          );
        })}
      </>
    ),
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.Payement - b.Payement,
  },
  {
    title: 'Release',
    responsive: ['lg'],
    key: 'Release',
    dataIndex: 'Release',
   
    //width: '10%',
    render: (_, { Release }) => (
      <>
        {Release.map((tag) => {
          let color 
          //= tag=='Completed'  ? 'green' :'Requested' ? 'red':'Overdue'?'red':'white'
          if (tag === 'Released') {
            color = 'green';
            return (
              <Tag color={color} key={tag} >
                {tag}
               
                <CheckOutlined />
              </Tag>
              
            );
            
          }
          if (tag === 'Doc.Pending') {
            color = 'red';
          }
          
          return (
            <Tag color={color} key={tag}>
              {tag}
            </Tag>
          );
        })}
      </>
    ),
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.Release - b.Release,
  },
  {
    title: 'Time',
    dataIndex: 'Time',
    responsive: ['lg'],
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
    width: '1%',
    render: (Time, record) => (
      <Typography.Text style={{ fontSize: record.size ,fontFamily:'sans-serif'}}>
        {Time}
      </Typography.Text>
    )
   
  },
  {
    title: 'Payable',
    dataIndex: 'Payable',
    responsive: ['lg'],
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
   // width: '10%',
    render: (Payable, record) => (
      <Typography.Text style={{ fontSize: record.size }}>
        {Payable}
      </Typography.Text>
    )
  },
  {
    title: 'Due',
    dataIndex: 'Due',
    responsive: ['md'],
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
    //width: '10%',
    render: (Due, record) => (
      <Typography.Text style={{ fontSize: record.size }}>
        {Due}
      </Typography.Text>
    )
    
  }
  
  
  
];
const data = [  {
  key: '1',
  BL: 'HLCUMEA2104',
  CON: 'Kerry',
  Nominated: 'Meest',
  POL:'',
  POD:'',
  End:'',
  Instruction: ['Completed'],
  Payement: ['Print Initiated'],
  Release:[],
  Time:'25.1.16 ',
  Payable:'USD 845',
  Due:'USD 730',
   responsive: ['lg'],
  
},
{
  key: '2',
  BL: 'HLCUMEA2105',
  CON: 'Best',
  Nominated: 'Fleetwood',
  POL:'Jebel',
  POD:'New',
  End:'San',
  Instruction: ['Completed'],
  Payement: ['Print Initiated'],
  Release:['Released'],
    responsive: ['lg'],
    Payable:'USD 845',
    Due:'USD 730',
 
},
{
  key: '3',
  BL: 'HLCUMEA2106',
  CON: 'Beest',
  Nominated: 'Emarlad',
  POL:'',
  POD:'',
  End:'',
  Instruction: ['Requested'],
  Payement: ['Print Initiated'],
  Release:['Released'],
   responsive: ['lg'],
   Payable:'',
   Due:'',
 
},
{
  key: '4',
  BL: 'HLCUMEA2105',
  CON: 'Best',
  Nominated: 'boatteng',
  POL:'',
  POD:'',
  End:'',
  Instruction: ['Completed'],
  Payement: ['Print Initiated'],
  Release:['Released'],
     responsive: ['lg'],
     Payable:'',
     Due:'',
  
}
];

const onChange = ( filters, sorter, extra) => {
  console.log('params', filters, sorter, extra);
};
const handleButtonClick = (e) => {
    message.info('Click on left button.');
    console.log('click left button', e);
  };
  
  const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };
  
  const items = [
    {
      label: '1st menu item',
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: '2nd menu item',
      key: '2',
      icon: <UserOutlined />,
    },
    {
      label: '3rd menu item',
      key: '3',
      icon: <UserOutlined />,
      danger: true,
    },
    {
      label: '4rd menu item',
      key: '4',
      icon: <UserOutlined />,
      danger: true,
      disabled: true,
    },
  ];
const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  

export default function AppHeader() {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
      };
      const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
      };
      function showTotal(total) {
        return `1 to 10 items of30`;
      }
  return (
    
   
    <div className="space-align-container"
    style={{
        marginTop: 0}}
    >

      
      <Layout style={{ height: 1200 }}>
     
        <Header
          style={{
            backgroundColor: '#F5F5F5',
            width: '100%',
            height:'5%'
           
          }}
        >
       {/*    <Row
           align="middle"
           style={{
             height: 10,
            
             paddingTop: 10}}>
          <Col><MenuOutlined/></Col>
        </Row> */}
          <Row
            align="bottom"
            style={{
              height: 100,
             
              paddingTop: 40,
       // fontSize: '1px'
         
            
            }}
          >
           
         <div
                style={{
                   
                    position:'absolute',
                  //  bottom: '9px',
                  //  left: '0.7', 
                   top: '35px', //change image position
               //  bottom:'9',
                   width: '80',
           
                    
                }}
              >
                    
          <img src={logo1} style={{ height: 150, width: 150 }} alt='pr'/>

              </div>
                          
              
      
 
 
     <Col  md={17} align='middle'     >
     
       <Space direction="vertical" align="right" >
        <Space wrap>
        
        <label align="middle" >carrier</label>
     
     <Dropdown menu={menuProps}>
<Button>

 habad lybad
 <DownOutlined />

</Button>
</Dropdown>

         <TitleSearch/>
      
 
        </Space>
        </Space> 
        
        </Col>


            {/*  <Dropdown menu={menuProps}>
     <Button>
       
         habad lybad
         <DownOutlined />
       
     </Button>
   </Dropdown> */}
   
       
   
    
 <div >
          <Form >
       
          <Col style={{ textAlign: "right", marginLeft: 20 ,padding:10,}}    >
             <Form.Item  
             
             /* label={ <p style={{fontSize:"10px",  marginLeft:'1px', marginTop:'2px' ,marginRight:'64px'}}>Credit Balance</p> } labelCol={{span:24}} */  >
               
            {/* make credit card down */}
              <label style={{fontSize:"10px" ,marginLeft: 11,marginTop:'10px' ,marginLeft: 7}} >Credit Balance</label>
            
            
             
             {/* <Dropdown.Button size="small" menu={menuProps} onClick={handleButtonClick}   >
         
             <Text type="danger">USD10.0</Text>
             <DownOutlined />
    </Dropdown.Button> */}
    
      <br />

      
     <Dropdown menu={menuProps} style={{marginRight: 5 }} >
<Button size="small" style={{  border:'none' , background: 'transparent' }}  danger >

<Text style={{fontSize:"10px"}} type="danger" >USD600.00</Text>

 <DownOutlined  />

</Button>
</Dropdown>
    </Form.Item>
     
    </Col >   
   
             </Form>
           
             </div> 
             
            <Col  style={{  textAlign: "top", marginLeft: 100 ,marginBottom: '30px' }} >
           
           <Text style={{fontSize:"11px", marginTop:'10px'}}>Test User</Text>  
           
           {/* <Text style={{fontSize:"11px", marginTop:'10px'}}disabled>Reliance Industries</Text> */}   
            {/* <Text>Test User</Text> */}
         
            </Col>
           
              <div
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: "#545B64",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  marginLeft: 14,
                  marginBottom:'30px'
                }}
              >
               
              <Img style={{ height: 19, width: 16 }} />
                
              </div>
            
          </Row>
         
          
         
          <Row
             align="middle"
             style={{
               height: 100,
              
               paddingTop: 20}}
        // fontSize: '1px'
          >
           <Col  span={24} 
              style={{
                display: "-ms-grid",
                justifyContent: "left",
                alignItems: "center",
                height: 46
                
         /* 
                width: '70px',
                             height: '70px',
                margin: '6px',
            
                   strokeWidth: "200 */
                  // stroke: "white" 
           
              }}>
             <div style={{ padding: 1 }}>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
    <Card  size="small">
     
    <FilterTwoTone  twoToneColor="red"  style={{  margin: '4px',
display:'inline-block',
  borderStyle:'double' ,
  borderWidth: 'medium',       /* sets border width on all sides */
  borderColor: 'whitesmoke'
    }}/>
    <Space>
     <PlusCircleTwoTone twoToneColor="#52c41a"  style={{ 
  borderStyle:'double' ,
  borderWidth: 'medium',       /* sets border width on all sides */
  borderColor: 'whitesmoke'
    }}/>
     <MenuOutlined color="red" style={{  
  borderStyle:'double' ,
  borderWidth: 'medium',       /* sets border width on all sides */
  borderColor: 'whitesmoke'
    }}/>
     <CheckCircleTwoTone twoToneColor="#52c41a" style={{  
  borderStyle:'double' ,
  borderWidth: 'medium',       /* sets border width on all sides */
  borderColor: 'whitesmoke'
    }} />
        <MailOutlined style={{  margin: '1px',
	display:'inline-block',
  borderStyle:'medium' ,
  borderWidth: 'double',       /* sets border width on all sides */
  borderColor: 'whitesmoke'
    }}/>
        </Space>
                 </Card>
    </Space>
    </div>
    </Col>
            
          </Row>
          <Row>
       {/*       <Title level={5}>h5. Ant Design</Title> */}
      
          <Table rowSelection={rowSelection} columns={columns} dataSource={data} onChange={onChange}
         
     
          
           style={{overflow: 'hidden', width: '350%', fontSize: '2px' }}
         // font-family='Arial'
          size='small'
          pagination={false}
         
  bordered 
          />
         
          
             <Pagination   
      
      pageSize={10}
      defaultCurrent={1} 
      total={30} 
 
      responsive='true'
     
    /> 

 
         

   
          </Row>
         
         {/*  <p style={{textAlign: 'center' ,align:'top'}}> 1 to 10 Items of 30     </p> */}
        </Header>
   
    <CDBSidebar textColor="#333" backgroundColor="#F5F5F5" maxWidth="60px" minWidth="60px">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
             </CDBSidebarHeader>
        <CDBSidebarContent >
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note">Components</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="credit-card" iconType="solid" textFontSize="14px">
              Sales
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{padding: '20px 5px'}}
          >
                  </div>
        </CDBSidebarFooter>
      </CDBSidebar>


     
      {/*   <Content style={{ marginTop: 233 }}>Main Content</Content> */}
        {/* <Footer>Footer</Footer> */}
      </Layout>
 
      
    
    </div>
  );
}
