import {useState} from 'react'
import axios from "axios"
import './style.css'

function CommentForm() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    select: "",
    comment: "",
    check: false
  })
  const [postError, setPostError] = useState(false)

  const disabled = !(userData.email.length && userData.password.length && userData.select.length && userData.comment.length)
  // const [email, setEmail] = useState("")

  const handleChange = function(event){
      console.log(event.target.checked)
      const property = event.target.name
      const value = event.target.value
      setUserData({...userData, [property]: value})
  }

  const handleChecked = function(event){
    const property = "check"
    const value = event.target.checked
    setUserData({...userData, [property]: value})
}

  const handleSubmit = function(event){
    event.preventDefault()
    axios(
      {
        url: "http://localhost:5000/api/v1",
        method: "POST",
        data: userData
      }
    ).then(result => console.log(result.data))
    .catch(
      err => setPostError(true)
    )
  }


  console.log(userData)


  return (
    <section className="form-container" style={{marginTop:"60px"}}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={handleChange}
            type="email"
            className="form-control"
            name="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onChange={handleChange}
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <label for="selectOptions">Seleccionar</label>
        <select id="selectOptions" name="select" className="form-select selectOptions" aria-label="Default select example" onChange={handleChange}>
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div className="mb-3">
          <label for="floatingTextarea">Comments</label>
          <textarea
            onChange={handleChange}
            name="comment"
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
          ></textarea>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" name="check" onChange={handleChecked}/>
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>

        <button disabled={disabled} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {postError && <div class="alert alert-danger" role="alert">
        Hubo un error en el envio de informacion
      </div>}
    </section>
  );
}

export default CommentForm;
