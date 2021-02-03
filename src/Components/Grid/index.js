import React from "react";

// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names
export function Container({ fluid, children }) {
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ fluid, flex, reverse, jca, fill, h100, wrap, custom, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}${flex ? " d-flex" : ""}${reverse ? " flex-row-reverse" : ""}${jca ? " justify-content-around" : ""}${fill ? " flex-fill" : ""}${h100 ? " h-100" : ""}${wrap ? " flex-wrap" : ""}${custom ? " rowCustom" : ""}`}>{children}</div>;
}

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, flex, reverse, collapse, flexCol, aic, custom, custom1, custom2, children }) {
  return (
    <div
      className={
        `
        ${size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
        ${flex ? " d-flex" : ""}${flexCol ? " flex-column" : ""}${reverse ? " flex-row-reverse" : ""}${aic ? " align-items-center" : ""}${collapse ? " collapse" : ""}${custom ? " colCustom" : ""}${custom1 ? " colCustom1" : ""}${custom2 ? " colCustom2" : ""}`}
    >
      {children}
    </div>
  );
}
