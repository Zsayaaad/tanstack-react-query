import { Form, useSubmit } from "react-router-dom";
import { PostStatusType } from "../types";

interface PostFilterProps {
  selectPostStatus: PostStatusType;
  setSelectPostStatus: (value: PostStatusType) => void;
}

const PostFilter = ({
  selectPostStatus,
  setSelectPostStatus,
}: PostFilterProps) => {
  const submit = useSubmit();

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value as PostStatusType;

    // 1. Update the parent/local state
    setSelectPostStatus(newValue);

    // 2. Submit the form to React Router (updates URL search params/triggers loader)
    submit(e.currentTarget.form);
  };

  return (
    <>
      <h5>Filter By Status</h5>
      <Form>
        <select
          name="status"
          className="form-select"
          // defaultValue={selectPostStatus}
          // onChange={(e) => submit(e.currentTarget.form)}
          value={selectPostStatus} // Changed from defaultValue to value
          onChange={handleStatusChange}
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
