// import { Form } from "react-bootstrap";

import { Form, useSubmit } from "react-router-dom";

// import { PostStatusType } from "../types";

// interface PostFilterProps {
//   selectPostStatus: PostStatusType;
//   setSelectPostStatus: (value: PostStatusType) => void;
// }

const PostFilter = () => {
  const submit = useSubmit();

  return (
    <>
      <h5>Filter By Status</h5>
      <Form>
        <select
          name="status"
          className="form-select"
          onChange={(e) => {
            submit(e.currentTarget.form);
          }}
        >
          <option value="all">Select Status</option>
          <option value="published">Publish</option>
          <option value="draft">Draft</option>
          <option value="block">Blocked</option>
        </select>
      </Form>
    </>
  );
};

export default PostFilter;
