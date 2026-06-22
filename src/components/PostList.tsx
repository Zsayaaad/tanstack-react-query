import { Link } from "react-router-dom";
import { Table, Form, ButtonGroup, Button } from "react-bootstrap";
import useGetPosts from "../hooks/useGetPosts";
import { PostStatusType } from "../types";

interface PostListProps {
  selectPostStatus: PostStatusType;
}

const PostList = ({ selectPostStatus }: PostListProps) => {
  const { isLoading, isError, data, error } = useGetPosts(selectPostStatus);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Status</th>
          <th style={{ width: "10%" }}>Top Rate</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((post, index) => (
          <tr key={post.id}>
            <td>{index + 1}</td>
            <td>
              <Link to="/info">{post.title}</Link>
            </td>
            <td>{post.status}</td>
            <td style={{ textAlign: "center" }}>
              <Form.Check type="switch" checked={post.topRate} readOnly />
            </td>
            <td>
              <ButtonGroup aria-label="Basic example">
                <Button variant="danger">Delete</Button>
              </ButtonGroup>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PostList;
