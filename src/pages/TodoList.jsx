import React from "react";

import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import Form from "../components/form/Form";
import List from "../components/list/List";

const TodoList = () => {
  return (
    <Layout>
      <Header></Header>
      <Form></Form>
      <List></List>
    </Layout>
  );
};

export default TodoList;
