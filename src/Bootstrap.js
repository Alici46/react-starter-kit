import { Button, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Bootstrap() {
    return (
        <div>
            <h3>Bootstrap komponentleri</h3>
            <Button variant="primary">Primary</Button>
            <Button variant="danger">Primary</Button>
            <Tabs
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="home" title="Home">
                    Tab content for Home
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    Tab content for Profile
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                    Tab content for Contact
                </Tab>
            </Tabs>
        </div>
    );

}
export default Bootstrap;