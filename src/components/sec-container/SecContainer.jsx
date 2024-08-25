import React from "react";

const SecContainer = ({ classes = "", children }) => {
  return (
    <section className={classes}>
      <div className="container mx-auto px-3">{children}</div>
    </section>
  );
};

export default SecContainer;
