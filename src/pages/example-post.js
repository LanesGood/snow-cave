import * as React from "react";
import GlobalLayout from '../layouts/global';
import { StaticImage } from "gatsby-plugin-image";

const ExamplePost = () => {
  return (
    <GlobalLayout pageTitle="Example Post">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../../static/img/BRI_dashboard.png"
      />
    </GlobalLayout>
  );
};

export default ExamplePost;
