import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.png"
            alt="contactus"
            style={{ width: "60%" }}
          />
        </div>
        <div className="col-md-4">
          <p>#Payment security is of utmost importance</p>
          <p>#No personal information to third parties</p>
          <p>#Stay informed, stay connected</p>
          <p>#Data is treated with utmost confidentiality</p>
          <p>#Personal information secure is our top priority</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
