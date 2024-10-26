import React from "react";
import { Row } from "react-bootstrap";

const Leetcode = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="yellow">LeetCode</strong> Stats
      </h1>
      <img 
  src="https://leetcard.jacoblin.cool/MohitJaiswal10?theme=dark&font=Syne%20Mono&ext=heatmap&animation=true&border=3&radius=15"
  alt="LeetCode Stats" 
  style={{ maxWidth: "100%", height: "auto" }} 
/>
    </Row>
  );
}

export default Leetcode;
