import axios from "axios";

const url = "http://localhost:3000/stay?page=1&recordCount=10&countryCode=HK";

export default function HotelDetails() {
    axios.get(url, {
        withCredentials: true,
        headers: {
            "Content-type": "application/json",
        }
    }).then(res => {
        console.log("------res", res);
    }).catch(err => {
        console.log("error", err);
    })

    return <div>
        <span>Hotel details</span>
    </div>
}