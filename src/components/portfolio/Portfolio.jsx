import React from 'react'
import './portfolio.css'
import ProttoyImg from '../../assets/prottoy.webp'
import OngroceryImg from '../../assets/ongrocery.webp'
import SimplexImg from '../../assets/simplex.webp'
import GetBetalImg from '../../assets/get_betal.webp'
import EasytraxWebImg from '../../assets/easytrax-web.webp'
import EasytraxAppImg from '../../assets/easytrax-app.webp'
import EasytraxEmailImg from '../../assets/easytrax-email.webp'
import HidmonaImg from '../../assets/hidmona.png'
import BCSConfidenceImg from '../../assets/bcs-confidence.png'



const recentWorkData = [
  {
    id: 1,
    title: "Interactive Learning Platform in Bangladesh",
    category: "Prottoy",
    image: ProttoyImg,
    webUrl: "https://prottoy.com.bd",
    androidUrl: "https://play.google.com/store/apps/details?id=bd.com.prottoy",
    iOSUrl: "",
  },
  {
    id: 2,
    title: "Grocery Shopping App in Canada",
    category: "Ongrocery",
    image: OngroceryImg,
    webUrl: "https://www.ongrocery.com/",
    androidUrl: "https://play.google.com/store/apps/details?id=com.zatiq.expresscart",
    iOSUrl: "https://apps.apple.com/us/app/expresscart/id1522292588",
  },
  {
    id: 3,
    title: "Money Transferring Platform among Countries",
    category: "Hidmona",
    image: HidmonaImg,
    webUrl: "https://hidmona.ch/",
    androidUrl: "https://play.google.com/store/apps/details?id=com.mahmud.hidmona",
    iOSUrl: "https://apps.apple.com/ro/app/hidmona-money-transfer/id1629064572?platform=iphone",
  },
  {
    id: 3,
    title: "BCS Confidence teachers routine management system based on Flutter (Android|Website)",
    category: "BCS Confidence",
    image: BCSConfidenceImg,
    webUrl: "",
    androidUrl: "",
    iOSUrl: "",
  },
  {
    id: 3,
    title: "Money Transferring Platform among Countries",
    category: "GetBetal",
    image: GetBetalImg,
    webUrl: "https://www.getbetal.com/",
    androidUrl: "https://play.google.com/store/apps/details?id=com.getbetal.se",
    iOSUrl: "https://apps.apple.com/us/app/getbetal-money-transfer/id1573647213?platform=iphone",
  },
  {
    id: 4,
    title: "Easytrax GPS Tracking",
    category: "EasyTrax",
    image: EasytraxAppImg,
    webUrl: "https://www.easytrax.com.bd/",
    androidUrl: "https://play.google.com/store/apps/details?id=com.bd.easytraxstandard",
    iOSUrl: "https://apps.apple.com/us/app/easytrax-gps-tracking-pro/id1543232436?platform=iphone"
  },
  {
    id: 5,
    title: "Practice App for Business Analysis Course",
    category: "Simplex",
    image: SimplexImg,
    webUrl: "",
    androidUrl: "https://play.google.com/store/apps/details?id=com.simplex.mahmud.cbapsimplified",
    iOSUrl: "",
  },
  {
    id: 6,
    title: "Website Front End Development by HTML, CSS & JavaScript",
    category: "Easytrax",
    image: EasytraxWebImg,
    webUrl: "https://crm.easytrax.com.bd/crm/registration",
    androidUrl: "",
    iOSUrl: "",
  },
  {
    id: 7,
    title: "Email Template by HTML, CSS & JavaScript",
    category: "Easytrax",
    image: EasytraxEmailImg,
    webUrl: "",
    androidUrl: "",
    iOSUrl: "",
  },

]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Protfolio</h2>

      <div className="container portfolio__container">


        {
          recentWorkData.map(({id, image, title, category, webUrl, androidUrl, iOSUrl})=>{
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={ image }  alt="" />
                </div>
                <h3>{category}</h3>
                <h5>{title}</h5>
                {webUrl!=="" || androidUrl!=="" || iOSUrl!==""? <div className="portfolio__item-cta">
                  {webUrl !== ""? <a className='btn' href={webUrl} target='_blank' rel="noreferrer">Website</a> : ""}
                  {androidUrl !== ""? <a className='btn' href={androidUrl} target='_blank' rel="noreferrer">Android</a> : ""}
                  {iOSUrl !== ""? <a className='btn' href={iOSUrl} target='_blank' rel="noreferrer">iOS</a> : ""}
                </div> : "" }
              </article>
            )
          })
        }

      </div>

    </section>
  )
}

export default Portfolio