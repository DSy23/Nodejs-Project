import React from 'react';
import Layout from "../components/Layout/Layout";

const Policy = () => {
    return (
      <Layout title={"Privacy Policy"}>
        <div className="row contactus ">
          <div className="col-md-6 ">
            <img
              src="/images/contactus.jpeg"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-4">
            <p> We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and disclose information that is provided to us by users of our website. By using our website, you agree to the terms of this Privacy Policy.

Collection of Information:
We collect personal information such as your name and email address when you subscribe to our newsletter or contact us through our website. We also collect non-personal information, such as your IP address and browsing history, through the use of cookies and similar technologies.

</p>
            
          </div>
        </div>
      </Layout>
    );
  };
  
  export default Policy;