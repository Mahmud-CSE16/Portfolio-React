import React from "react";
import "./portfolio.css";
import ProttoyImg from "../../assets/prottoy.webp";
import OngroceryImg from "../../assets/ongrocery.webp";
import SimplexImg from "../../assets/simplex.webp";
import GetBetalImg from "../../assets/get_betal.webp";
import EasytraxWebImg from "../../assets/easytrax-web.webp";
import EasytraxAppImg from "../../assets/easytrax-app.webp";
import EasytraxEmailImg from "../../assets/easytrax-email.webp";
import HidmonaImg from "../../assets/hidmona.png";
import ZatiqImg from "../../assets/zatiq.jpeg";
import ZatiqEasyImg from "../../assets/zatiqeasy.jpeg";
import BoomImg from "../../assets/boom.jpeg";
import MyCashImg from "../../assets/mycash.jpeg";
import StartWithFiveImg from "../../assets/startwithfive.jpeg";
import BCSConfidenceImg from "../../assets/bcs-confidence.png";

const recentWorkData = [
  {
    id: 1,
    title: "Building the Fintech Ecosystem of Bangladesh",
    category: "Zatiq Ltd",
    image: ZatiqImg,
    webUrl: "https://zatiq.com/",
    androidUrl: "",
    iOSUrl: "",
  },
  {
    id: 2,
    title: "Zatiq Easy - eCommerce Builder",
    category: "Zatiq Ltd",
    image: ZatiqEasyImg,
    webUrl: "https://zatiqeasy.com/",
    androidUrl: "https://play.google.com/store/apps/details?id=com.zatiq.easybill&hl=en",
    iOSUrl: "https://apps.apple.com/us/app/zatiq-easy-ecommerce-builder/id6463710574",
  },
  {
    id: 3,
    title: "MyCash is modern Mobile based Money Transfer system with Amtel Ltd",
    category: "Amtel Ltd",
    image: MyCashImg,
    webUrl: "",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.amtel.mycash.subscriber",
    iOSUrl: "",
  },
  {
    id: 4,
    title: "Money Transferring Platform among Countries",
    category: "Hidmona",
    image: HidmonaImg,
    webUrl: "https://hidmona.ch/",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.mahmud.hidmona",
    iOSUrl:
      "https://apps.apple.com/ro/app/hidmona-money-transfer/id1629064572?platform=iphone",
  },
  {
    id: 5,
    title: "Interactive Learning Platform in Bangladesh",
    category: "Prottoy",
    image: ProttoyImg,
    webUrl: "https://prottoy.com.bd",
    androidUrl: "https://play.google.com/store/apps/details?id=bd.com.prottoy",
    iOSUrl: "",
  },
  {
    id: 6,
    title: "Grocery Shopping App in Canada",
    category: "Ongrocery",
    image: OngroceryImg,
    webUrl: "https://www.ongrocery.com/",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.zatiq.expresscart",
    iOSUrl: "https://apps.apple.com/us/app/expresscart/id1522292588",
  },
  {
    id: 7,
    title: "Start With Five - Real Estate Investing",
    category: "Start With Five LLC",
    image: StartWithFiveImg,
    webUrl: "https://www.startwithfiveapp.com/",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.startwithfive.app",
    iOSUrl:
      "https://apps.apple.com/us/app/start-with-five-investing/id6446306183",
  },
  {
    id: 8,
    title: "Boom - Find your buyers",
    category: "Boom",
    image: BoomImg,
    webUrl: "https://myboom.ca/",
    androidUrl: "https://play.google.com/store/apps/details?id=ca.myboom.app",
    iOSUrl: "https://apps.apple.com/us/app/boom-find-your-buyers/id1668120325",
  },
  {
    id: 9,
    title:
      "BCS Confidence teachers routine management system based on Flutter (Android|Website)",
    category: "BCS Confidence",
    image: BCSConfidenceImg,
    webUrl: "",
    androidUrl: "",
    iOSUrl: "",
  },
  {
    id: 10,
    title: "Money Transferring Platform among Countries",
    category: "GetBetal",
    image: GetBetalImg,
    webUrl: "https://www.getbetal.com/",
    androidUrl: "https://play.google.com/store/apps/details?id=com.getbetal.se",
    iOSUrl:
      "https://apps.apple.com/us/app/getbetal-money-transfer/id1573647213?platform=iphone",
  },
  {
    id: 11,
    title: "Easytrax GPS Tracking",
    category: "EasyTrax",
    image: EasytraxAppImg,
    webUrl: "https://www.easytrax.com.bd/",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.bd.pro.easytraxstandard",
    iOSUrl:
      "https://apps.apple.com/us/app/easytrax-gps-tracking-pro/id1543232436?platform=iphone",
  },
  {
    id: 12,
    title: "Practice App for Business Analysis Course",
    category: "Simplex",
    image: SimplexImg,
    webUrl: "",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.simplex.mahmud.cbapsimplified",
    iOSUrl: "",
  },
  {
    id: 13,
    title: "Website Front End Development by HTML, CSS & JavaScript",
    category: "Easytrax",
    image: EasytraxWebImg,
    webUrl: "https://crm.easytrax.com.bd/crm/registration",
    androidUrl: "",
    iOSUrl: "",
  },
  {
    id: 14,
    title: "Email Template by HTML, CSS & JavaScript",
    category: "Easytrax",
    image: EasytraxEmailImg,
    webUrl: "",
    androidUrl: "",
    iOSUrl: "",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Protfolio</h2>

      <div className="container portfolio__container">
        {recentWorkData.map(
          ({ id, image, title, category, webUrl, androidUrl, iOSUrl }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{category}</h3>
                <h5>{title}</h5>
                {webUrl !== "" || androidUrl !== "" || iOSUrl !== "" ? (
                  <div className="portfolio__item-cta">
                    {webUrl !== "" ? (
                      <a
                        className="btn"
                        href={webUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Website
                      </a>
                    ) : (
                      ""
                    )}
                    {androidUrl !== "" ? (
                      <a
                        className="btn"
                        href={androidUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Android
                      </a>
                    ) : (
                      ""
                    )}
                    {iOSUrl !== "" ? (
                      <a
                        className="btn"
                        href={iOSUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        iOS
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  ""
                )}
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
