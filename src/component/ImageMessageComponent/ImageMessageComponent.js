import React from 'react';
import Bredcom from '../Bredcom/Bredcom';
import Header from '../header/Main';
import { Link } from 'react-router-dom';


const ImageTextComponent = ({ imageUrl, heading, description }) => {
 return (
    <>
      <div className="message-image-text-component">
        <div className="message-image-container">
          <img src={imageUrl} alt="Component Image" />
        </div>
        <div className="message-text-container">
          <h2>{heading}</h2>
          <p style={{ color: 'black' }}>
            "It is my honour and privilege to be associated with Beaconhouse International College (BIC). For many decades now, Beaconhouse has been at the forefront of K-12 teaching and learning. We are tremendously proud of the contributions our students have made to Pakistan and the wider world. BIC continues this commitment to exceptional quality education and extends it to higher education. We have combined our extensive national experience with some of the West’s leading institutions to bring unique transnational education programs to Pakistani students. This synthesis of experience should provide students with the springboard they need to be valuable contributors to the global economy in the 21st century. BIC has accelerated rapidly in both its program offerings and locations in the last two years. Along with offering BTEC level 3-5 qualifications from Pearson, the institution now offers a variety of exceptional undergraduate and postgraduate programs in association with our international partners. Along with a range of humanities and business programs, we are proud to be the first institution in Pakistan to provide international mechanical, electrical, and civil engineering programs approved by the Higher Education Commission. What’s more, all programs are designed to help students develop real-life skills as a core part of their educational journey. In order to do this, the institution has an in-house integrated incubation program focusing on core skills like design thinking, business development, and fundraising. It is our hope that this combination of practical training and exceptional theory will allow BIC students to stand out amongst their peers and carve out exceptional careers for themselves. I am glad you have ventured to our website, and hope that you will find our new vision for higher education interesting and compelling."
          </p>
        </div>
      </div>
    </>
  );
}

export default ImageTextComponent;
