
import {Form, Button, FloatingLabel} from "react-bootstrap";
import {useState} from 'react'
import axios from 'axios'

function CommentReactBootstrap() {
    const [formData, setFormData] = useState({name: "", email:  "", number: "", message: ""})

    const handleChange = (event) => {
        const property = event.target.name
        const value = event.target.value
        setFormData({...formData, [property]: value})
    }

    const handleSend = (event) => {
        event.preventDefault()
        axios({
            method: "post",
            url: "https://jsonplaceholder.typicode.com/posts",
            data: formData
        }).then(result => console.log(result))
    }


  return(
    <Form onSubmit={handleSend}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control onChange={handleChange} type="text" placeholder="Name" name="name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control onChange={handleChange}  type="email" placeholder="Email" name="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" onChange={handleChange}  placeholder="Number" name="number"/>
        </Form.Group>
        <FloatingLabel controlId="floatingTextarea2" label="Mensaje">
                <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: '100px' }}
            name="message"
            onChange={handleChange} 
            />  
        </FloatingLabel>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I want to recieve notifications" />
        </Form.Group>
      <Button variant="primary" type="submit">
       Send
      </Button>
    </Form>
  );
}

export default CommentReactBootstrap;
