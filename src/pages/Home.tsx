import { Row, Col } from "react-bootstrap";
// import { useSearchParams } from "react-router-dom";
import PostList from "../components/PostList";
import PostFilter from "../components/PostFilter";
import { PostStatusType } from "../types";
import { useState } from "react";

// const isPostStatusType = (value: string | null): value is PostStatusType =>
//   value === "all" ||
//   value === "published" ||
//   value === "draft" ||
//   value === "block";

const Home = () => {
  // const [searchParams] = useSearchParams();
  // const statusParam = searchParams.get("status");
  // const selectPostStatus: PostStatusType = isPostStatusType(statusParam)
  //   ? statusParam
  //   : "all";
  const [selectPostStatus, setSelectPostStatus] =
    useState<PostStatusType>("all");

  return (
    <Row>
      <Col xs={9}>
        <PostList selectPostStatus={selectPostStatus} />
      </Col>
      <Col>
        <PostFilter
          selectPostStatus={selectPostStatus}
          setSelectPostStatus={setSelectPostStatus}
        />
      </Col>
    </Row>
  );
};

export default Home;
