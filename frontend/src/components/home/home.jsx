import HotelListSection from './hotel-list-section';
import HotelDetailSection from './hotel-detail-section';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
    let showDetails = false;
    return (
        <Container>
            <Row>
                <Col><HotelListSection/></Col>
                { showDetails && <Col><HotelDetailSection/></Col>}
            </Row>
        </Container>
    )
}