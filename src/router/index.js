import Home from '../Pages/Home.js';
import About from '../Pages/About-us.js';
import Contact from '../Pages/Contact-us.js';
import {Routes, Route } from'react-router-dom'; 
import TodoList from '../Pages/Todo.js';
import TodoCreate from '../Pages/TodoCreate.js';
import TodoEdit from '../Pages/TodoEdit.js';

function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/todo" element={<TodoList />} />
      <Route path="/todo/Create" element={<TodoCreate />} />
      <Route path="/todo/:id/edit" element={<TodoEdit />} />
      
    </Routes>
  );
}


export default MyRouter;