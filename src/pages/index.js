import React from "react";

import Layout from "../layouts/page-layout";
import SEO from "../utils/seo";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Unitech Pest and Bed Bug Services is a full service, professional pest management company located in St. Louis, Missouri.  We stand prepared to eliminate unwanted pests in your home or business."
    />
    <p>
      Unitech Pest and Bed Bug Services is a full service, professional pest
      management company located in St. Louis, Missouri. We stand prepared to
      eliminate unwanted pests in your home or business. Our fast, curteous and
      professional staff will listen to your concerns and promptly answer any
      questions you have regarding our methods of pest removal and the costs
      associated with it.
    </p>
  </Layout>
);

export default IndexPage;
