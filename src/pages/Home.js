import React from "react";
import Nav from "../containers/nav/Nav";
import Header from "../containers/header/Header";
import Content from "../containers/pres/Content";
import Form from "../containers/form/Form";
import Openclass from "../containers/openclass/Openclass";

const Home = () => {
  return (
    <section className="all">
      <Nav />
      <Header />
      <Content />
      <Openclass />
      <Form />
    </section>
  );
};

export default Home;
