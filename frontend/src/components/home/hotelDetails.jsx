import axios from "axios";
import { useEffect } from "react";

const url = "http://localhost:3000/stay?page=1&recordCount=10&countryCode=HK";

export default function HotelDetails() {
    useEffect(() => {
        console.log("hoteldetails");
        axios.get(url, {
            withCredentials: true,
            headers: {
                "Content-type": "application/json",
            }
        }).then(res => {

        }).catch(err => {
        })
    }, [])

    return <div>
        <span>Hotel details</span>
    </div>
}