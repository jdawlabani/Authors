import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditAuthor = (props) => {
  const { id } = useParams();
  const [authorName, setAuthorName] = useState("");
  const [errors, setErrors] = useState({});
  const [authorNotFoundError, setAuthorNotFoundError] = useState("");

  const navigate = useNavigate()

  console.log(id);
  useEffect(() => {
    axios.get(`http://localhost:8000/api/author/${id}`)
    .then((response) => {
        console.log(response.data);
        setAuthorName(response.data.name);
      })
      .catch((err) => {
        console.log(err.response);
        setAuthorNotFoundError(`Author not found using that ID`);
      });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:8000/api/author/${id}`, { name: authorName })
      .then((response) => {
        console.log(response);
        navigate('/')
      })
      .catch((err) => {
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  };
  return (
    <form onSubmit={submitHandler} className='bg-dark text-light'>
      {authorNotFoundError && (
        <h2>
          {authorNotFoundError} <Link to="/new">Click here to add author</Link>
        </h2>
      )}
      <Link to="/">Home</Link>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
        <input
          type="text"
          id="name"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default EditAuthor;
