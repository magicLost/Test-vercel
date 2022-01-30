import { Link } from "gatsby";
import React from "react";

/* 
  This is main page
  It exists for one purpose - when user first time came to our site - we do not load firestore
  This page has two states: 
   - not auth widget
   - loading - check auth status 
*/

const IndexPage = () => {
  console.log("GATSBY_HELLO", process.env.GATSBY_HELLO);
  console.log("HELLO", process.env.HELLO);

  return (
    <main>
      <h4 style={{ textAlign: "center" }}>Hello from home page</h4>
      <p>
        <Link to="/faq">Ответы на вопросы.</Link>.
      </p>
    </main>
  );
};

export default IndexPage;
