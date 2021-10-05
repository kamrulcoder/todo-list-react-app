
import './App.css';
import { Form, Button, Row, Col, ListGroup } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faMarker } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


function App() {


  // store value  usestate create 
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [todoId, setTodoId] = useState(0)


  // handle sumit function start 
  const handleSubmit = e => {
    e.preventDefault();
    // edit value submit logic and function 
    if (todoId) {
      const findTodoItem = todos.find(tod => tod.id === todoId);
      const updateTod = todos.map(t => t.id === findTodoItem.id ? (t = { id: t.id, todo }) : ({ id: t.id, todo: t.todo }));
      setTodos(updateTod)
      setTodo("")
      setTodoId(0)
      return

    }


    // value  add function 
    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("")
    }
  }


  // delete function 
  const deleteItem = id => {
    const newTodos = todos.filter(tod => tod.id !== id)
    setTodos(newTodos)
  }


  // edit function start 
  const editItem = (id) => {
    const findItem = todos.find(tod => tod.id === id)
    setTodo(findItem.todo)
    setTodoId(id)
  }

  return (
    <div className="container">
      <div className="todo">
        <div className="toListBox">
          <Form onSubmit={handleSubmit} >
            <Row>
              <Col lg={10}>
                <Form.Control value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="Add Your  New  Todo" />
              </Col>
              <Col>
                <Button size="block" variant="primary" type="submit">{todoId ? (<FontAwesomeIcon icon={faMarker} />) : (<FontAwesomeIcon icon={faPlus} />)}    </Button>
              </Col>
            </Row>
          </Form>
          <ListGroup className="mt-3 list">
            {
              todos.length > 0 ? (
                todos.map(todoItem => (
                  <ListGroup.Item key={todoItem.id} className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">{todoItem.todo}</p>
                    <div>
                      <span onClick={() => editItem(todoItem.id)}> <FontAwesomeIcon icon={faEdit} /></span>
                      <span onClick={() => deleteItem(todoItem.id)} > <FontAwesomeIcon icon={faTrash} /></span>
                    </div>
                  </ListGroup.Item>
                ))

              ) : (
                <div className="text-center">
                  <p>No Data </p>
                </div>
              )
            }
          </ListGroup>
        </div>
      </div>
    </div>
  );
}

export default App;
