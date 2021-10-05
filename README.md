## Simple TodoList project  in React 
> ## The steps to project 

<details>
<summary>1. একটা ফর্ম,  ইনপুট  নিতে হবে </summary>

```javascript

<Form onSubmit={handleSubmit}>
<Row>
    <Col lg={10}>
    <Form.Control value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="Add Your  New  Todo" />
    </Col>
    <Col>
    <Button size="block" variant="primary" type="submit"> {editId ? (<FontAwesomeIcon icon={faMarker} />) : (<FontAwesomeIcon icon={faPlus} />)}   </Button>
    </Col>
</Row>
  </Form>
```
</details>
<br/>

<details>
<summary>2. লিস্ট গ্রুপ নিতে  হবে  </summary>

```javascript

    <ListGroup.Item key={singleTodos.id} className="d-flex justify-content-between align-items-center">
        <p className="mb-0">{singleTodos.todo}</p>
        <div>
        <span onClick={() => handleEdit(singleTodos.id)}> <FontAwesomeIcon icon={faEdit} /></span>
        <span onClick={() => handleDelete(singleTodos.id)}> <FontAwesomeIcon icon={faTrash} /></span>
        </div>
    </ListGroup.Item>
```
</details>
<br>
<details>
<summary>3. UseState  তিনটা  নিতে  হবে  </summary>

```javascript
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([])
  const [editId, setEditId] = useState(0)
```
</details>
<br>
<details>
<summary>4. ফর্ম সাবমিট করার সময়  কাজ করার জন্য  ফাঙ্কশন নিতে  হবে</summary>

```javascript
<Form onSubmit={handleSubmit}>
```

```javascript

  // submit Function  start 
  const handleSubmit = (e) => {
    e.preventDefault();
    if(editId){
    const editTodo = todos.find(tod => tod.id === editId);
    const updateTodos = todos.map(t => t.id === editTodo.id
      ? (t = { id: t.id, todo }) :
      { id: t.id, todo: t.todo }
    )
      setTodos(updateTodos)
      setEditId(0)
      setTodo("")
      return 

    }
    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
    }
    setTodo("")
  }

```
</details>
<br>
<details>
<summary>5. ইনপুট  ভ্যালু চেঞ্জ  করার জন্য আরেকটা   ফাঙ্কশন  নিতে হবে </summary>

```javascript
<Form.Control value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="Add Your  New  Todo" />

```
</details>
<br>
<details>
<summary>6. সিঙ্গেল লিস্ট  কে ডিলিট করার জন্য  ফাঙ্কশন করতে হবে </summary>

```HTML
 <span onClick={() => handleDelete(singleTodos.id)}> <FontAwesomeIcon icon={faTrash} /></span>
```
```javascript
  // handleDelete fucntion start 
  const handleDelete = id => {
    const newTodos = todos.filter(list => list.id !== id);
    setTodos([...newTodos])
  }

```


</details>
<br>
<details>
<summary>7. সিঙ্গেল লিস্ট  কে এডিট  করার জন্য  ফাঙ্কশন করতে হবে </summary>

```javascript

  // edit tos function start 
  const handleEdit = (id) => {
    const editValue = todos.find(editValue => editValue.id === id)
    setTodo(editValue.todo)
    setEditId(id)
  }

```
</details>
<br>
<details>
<summary>8. এডিট করার সময় সাবমিট এর ফাঙ্কশন এ লজিক ফাঙ্কশন এর মাধ্যমে এডিট সম্পূর্ণ করতে হবে </summary>

```javascript
    if(editId){
    const editTodo = todos.find(tod => tod.id === editId);
    const updateTodos = todos.map(t => t.id === editTodo.id
      ? (t = { id: t.id, todo }) :
      { id: t.id, todo: t.todo }
    )
      setTodos(updateTodos)
      setEditId(0)
      setTodo("")
      return 
    }
```
</details>
<br>




 



