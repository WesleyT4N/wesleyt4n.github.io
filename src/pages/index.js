import React, { useRef } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import About from "../components/about";
import Projects from "../components/project-list";

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

const IndexPage = () => {
  const execScroll = ref => scrollToRef(ref);
  return (
    <Layout onHeaderLinkClick={execScroll}>
      <SEO />
      <About />
      <Projects />
    </Layout>
  );
};

export default IndexPage;
