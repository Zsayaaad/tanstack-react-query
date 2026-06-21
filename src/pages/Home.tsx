import { Row, Col } from "react-bootstrap";
import PostList from "../components/PostList";
import PostFilter from "../components/PostFilter";
// import { useState } from "react";
// import { PostStatusType } from "../types";

const Home = () => {
  // const [selectPostStatus, setSelectPostStatus] =
  //   useState<PostStatusType>("all");

  return (
    <Row>
      <Col xs={9}>
        <PostList />
      </Col>
      <Col>
        <PostFilter
        // selectPostStatus={selectPostStatus}
        // setSelectPostStatus={setSelectPostStatus}
        />
      </Col>
    </Row>
  );
};

export default Home;
