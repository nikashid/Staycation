import axios from "axios";
import { useEffect, useState } from "react";

import HotelList from "./hotel-list";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./home.scss";

export default function HotelListSection() {
  const [hotelList, setHotelList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  //const hotelListDeffered = useDeferredValue(hotelList);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      const url = `${process.env.REACT_APP_LOCAL_API_DOMAIN}/stay?page=${pageNumber}&recordCount=20&countryCode=BR&searchText=${searchText}`;
      axios
        .get(url, {
          withCredentials: true,
          headers: {
            "Content-type": "application/json",
          },
        })
        .then((res) => {
          if (pageNumber === 1) {
            setHotelList(res.data);
          } else {
            setHotelList((h) => [...h, ...res.data]);
          }
          //setHotelList(res.data);
        })
        .catch((err) => {
          console.log("error fetching stay list", err);
        });
    }, 500);
    return () => clearTimeout(timeOut);
  }, [searchText, pageNumber]);

  const handleChange = (event) => {
    setPageNumber(1);
    setSearchText(event.target.value);
  };

  const loadMore = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <Container className="hotelList">
      <Col className="colHotelList">
        <Row className="searchbox">
          <Form.Control
            type="text"
            placeholder="Search your favourite hotel, location"
            value={searchText}
            onChange={handleChange}
          ></Form.Control>
        </Row>
        <Row>
          <HotelList hotelList={hotelList}></HotelList>
        </Row>
        <Row className="loadMoreBtn">
          {!!hotelList.length && (
            <Button variant="primary" onClick={loadMore}>
              Load More
            </Button>
          )}
        </Row>
      </Col>
    </Container>
  );
}
