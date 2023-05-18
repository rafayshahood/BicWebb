import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import img3 from "../../assets/images/Events/Robotics.jpg"
import img5 from "../../assets/images/ShepComponentImages/BicIsbLib.jpg"
import img1 from "../../assets/images/Events/FashionDesigning.jpg"
import img4 from "../../assets/images/Events/Cinema.jpg"
import img2 from "../../assets/images/Events/WomensDay.JPG"
import img6 from "../../assets/images/Events/FashionDesigning.jpg"
import img7 from "../../assets/images/ShepComponentImages/BicIsbLib.jpg"
import img8 from "../../assets/images/Events/Robotics.jpg"
import img9 from "../../assets/images/Events/Cinema.jpg"

function Gallery() {

    const Data = [
        
        {img : img1, category : "Lab"},
    
        {img : img2, category : "Lounge"},

        {img : img3, category : "Lab"},
    
        {img : img4, category : "Library"},
    
        {img : img5, category : "Library"},

        {img : img6, category : "Lab"},

        {img : img7, category : "Library"},

        {img : img8, category : "Lab"},

        {img : img9, category : "Library"},

      ]

      const [current, setcurrent] = useState(Data);

      const Filter = (category) =>{
          const arr = [];
          if(category === "View All"){
          setcurrent(Data)
          }
          else{
          Data.map((item)=> {
              if(item.category === category){
              arr.push(item);
              }
          })
          setcurrent(arr);
          }
      };


  return (
    <>
        <section id="work" className="pt-150 pb-105">
            <div className="container">
                <div className="portfolio ">
                <div className="row align-items-end">
                    <div className="col-lg-12">
                    <div className="my-masonry text-center mb-50 wow fadeInRight  animated" data-animation="fadeInRight" data-delay=".4s" >
                        <div className="button-group filter-button-group ">
                        <button className="active" data-filter="*" onClick={()=> Filter("View All")} > View All </button>
                        <button data-filter=".Lab" onClick={()=> Filter("Lab")} >Lab</button>
                        <button data-filter=".Lounge" onClick={()=> Filter("Lounge")} >Lounge</button>
                        <button data-filter=".Library" onClick={()=> Filter("Library")} >Library </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="grid col3 row wow fadeInUp  animated" data-animation="fadeInUp" data-delay=".4s" >
                    {current.map( (item, Index)=> ( 
                        <div className="grid-item financial col-4" key={Index}>
                            <Link>
                                    <img src={item.img} alt="img" className="img" />
                            </Link>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Gallery