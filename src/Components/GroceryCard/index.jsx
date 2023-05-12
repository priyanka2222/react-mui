import { useEffect, useState } from 'react'
import { getGrocery } from '../../APIs/getGrocery'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const GroceryCard = () => {
    const [data, setData] =useState([])

    useEffect(() => {
        async function fetchData () {
            const result = await getGrocery();
            console.log("Data : ",result);
            setData(result)
        }
        fetchData()
    }, [])

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

  return (
    <div>
      <div>
      <Slider {...settings}>
      {data != null && data.length ? data.map((item) => {
        return(
            <div key={item.id}>
            <h2>{item.name}</h2>
            <img src="https://th.bing.com/th/id/OIP.SrWVb_iROGBxJkzt1nu8QAHaE7?w=210&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt={item.name} style={{display: "block",
marginLeft: "auto",
marginRight: "auto",
width: "20%", height: "10%"}}/>
            <p>Catogery : {item.category}</p>
            <p>inStock : {item.inStock ? "true": "false"}</p>
        </div>)
      }) : <span>Loading</span>}
    </Slider>
    </div>
    <br/><br/>
   </div>
  )
}

export default GroceryCard
