import React, { useState,useEffect} from 'react';
import { createStore } from 'redux'
import todoApp from '../../redux/reducers/todo'
import {addTodo, toggleTodo,setVisibilityFilter,VisibilityFilters} from "../../redux/actions/todo";

let store = createStore(todoApp)

function Lesson6() {

    const [list,setList] = useState([])
    const [status,setStatus] = useState([])

    function change (){
        let data = store.getState()
        let todos = data.todos
        setList(todos)
        let filter = data.visibilityFilter
        setStatus(filter)
    }

    useEffect(() => {
        change ()
    });
    return(
        <>
            <h1 >
            </h1>
            <div>
                redux 2 实现书签
            </div>
            <p>
                {status}
            </p>
            <ul>
                {list.length>0?list.map((item,index)=> (
                    <li key={index}>{item.text}, {item.completed?'完成阅读':'未完成阅读'}</li>
                )):<li>暂无书籍</li>}
            </ul>
            <br/>
            <div>
                <p>
                    <button onClick={() => {
                        store.dispatch(addTodo('Learn about actions'));
                        change();
                    }}>
                        button1
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={() => {
                        store.dispatch(addTodo('Learn about store'))
                        change();
                    }}>
                        button2
                    </button>
                </p>
                <p>
                    <button onClick={() =>{
                        store.dispatch(toggleTodo(0))
                        change();
                    }}>
                        button3
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={() =>{
                        store.dispatch(toggleTodo(1))
                        change();
                    }}>
                        button4
                    </button>
                </p>
                <p>
                    <button onClick={() =>{
                        store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL));
                        change();
                    }}>
                        button5
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={() =>{
                        store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
                        change();
                    }}>
                        button6
                    </button>
                </p>
            </div>
            <hr/>
        </>
    );
}
export default  Lesson6;

