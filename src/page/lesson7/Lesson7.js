import React from 'react';
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

function Lesson7() {
    return(
        <>
            <div>redux demo</div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </>
    );
}

export default  Lesson7;

