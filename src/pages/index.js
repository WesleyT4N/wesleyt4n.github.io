import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import About from "../components/about";
import Experience from "../components/experience";
import Projects from "../components/project";

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

const IndexPage = () => {
  const execScroll = ref => scrollToRef(ref);
  return (
    <Layout onHeaderLinkClick={execScroll}>
      <SEO />
      <About />
      <Experience />
      <Projects />
    </Layout>
  );
};

export default IndexPage;
