import React from "react";
import Layout from "../components/Layout/Layout";
const About = () => {
    return (
      <Layout title={"About us - Ecommer app"}>
        <div className="row contactus ">
          <div className="col-md-6 ">
            <img
              src="/images/about.jpeg"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-4">
            <p className="text-justify mt-2">
           We offers a convenient and user-friendly shopping experience, providing a diverse selection of products and services at competitive prices. Our mission is to be the one-stop-shop for all your shopping needs, and we are committed to exceptional customer service to ensure satisfaction with every purchase. Whether you're looking for electronics, fashion, beauty, or home goods, Ecommerce App  has got you covered with a seamless shopping experience and secure checkout pr
            </p>
          </div>
        </div>
      </Layout>
    );
  };
  
  export default About;