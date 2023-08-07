import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { uuid4 as v4 } from "uuid4";

const HotelList = function (props) {
  return props.hotelList?.map((item) => (
    <Card key={v4()} style={{ width: "18rem" }}>
      <Card.Img className="cardImg" variant="top" src={item.image} />
      <Card.Body className="cardBody">
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.summary}</Card.Text>
        <Button variant="primary">Check Availability</Button>
      </Card.Body>
    </Card>
  ));
};

export default HotelList;
