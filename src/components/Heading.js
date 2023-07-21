import { svgDataHeader } from "../svgs/backgroundSVG";
import "./Heading.css";

const Heading = () => {
  const divStyle = {
    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
      svgDataHeader
    )}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="heading-container" style={divStyle}>
      <div className="heading-content">
        <h2>Why trust us</h2>
        <p>
          Get Short Link in secure by default. We build, manage, and implement
          security best practices into the platform so you don't have to.
        </p>
      </div>
    </div>
  );
};

export default Heading;
