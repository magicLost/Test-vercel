import { Link } from "gatsby";
import * as React from "react";
//import Container from "@mui/material/Container";

const Faq = () => {
  return (
    <>
      <div className="my-4">
        <h4 style={{ textAlign: "center" }}>FAQ по работе сайта</h4>
        <p>
          <Link to="/">Домой.</Link>.
        </p>
      </div>
    </>
  );
};

export default Faq;
