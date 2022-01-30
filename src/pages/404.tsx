import React, { CSSProperties } from "react";
import { Link } from "gatsby";

// markup
const NotFoundPage = () => {
  return (
    <main className="p-12">
      <h5
        style={{
          textAlign: "center",
          paddingBottom: "20px",
        }}
      >
        Страница не найдена.
      </h5>
      <p style={{ maxWidth: "600px", margin: "auto", textIndent: "15px" }}>
        К сожалению{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        страницы с таким именем не существует...
        <Link to="/"> Вернуться на главную страницу.</Link>.
      </p>
      <p
        style={{
          maxWidth: "600px",
          margin: "auto",
          textAlign: "center",
          paddingTop: "15px",
        }}
      >
        <Link to="/">Вернуться на главную страницу.</Link>.
      </p>
    </main>
  );
};

/*  <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br /> */

export default NotFoundPage;
