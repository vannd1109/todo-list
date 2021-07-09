import {Tab, Nav, Row, Col} from 'react-bootstrap';
import SettingInfo from './SettingInfo';
import SettingPassword from './SettingPassword';

function Setting(props) {
    let user = JSON.parse(localStorage.getItem('userInfo'));
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="system">
        <Row>
        <Col sm={3}>
        <Nav variant="pills" className="flex-column">
        <Nav.Item>
        <Nav.Link eventKey="system">Cấu hình hệ thống</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="info">Thông tin tài khoản</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="password">Thay đổi mật khẩu</Nav.Link>
        </Nav.Item>
        </Nav>
        </Col>
        <Col sm={9}>
        <Tab.Content>
        <Tab.Pane eventKey="system">
        hệ thống
        </Tab.Pane>
        <Tab.Pane eventKey="info">
            <SettingInfo user={user}/>
        </Tab.Pane>
        <Tab.Pane eventKey="password">
            <SettingPassword />
        </Tab.Pane>
        </Tab.Content>
        </Col>
        </Row>
        </Tab.Container>
        )
}

export default Setting;