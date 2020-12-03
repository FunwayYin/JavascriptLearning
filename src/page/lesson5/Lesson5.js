import React, { useState,useEffect} from 'react';
import { createStore } from 'redux';

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            if(state===10){
                return 10
            }
            return state + 1;
        case 'DECREMENT':
            if (state===0){
                return 0
            }
            return state - 1;
        default:
            return state;
    }
}

let store = createStore(counter);

function add() {
    store.dispatch({ type: 'INCREMENT' });
}

function minus() {
    store.dispatch({ type: 'DECREMENT' });
}

function Lesson5() {

    let initNum = store.getState()
    const [num,setNum] = useState(initNum)

    useEffect(() => {
        // 可以手动订阅更新，也可以事件绑定到视图层。
        store.subscribe(() => {
            setNum(store.getState())
        });
    });
    return(
        <>
            <h1 >
            </h1>
            <div>
                redux的数字是：{num}
            </div>
            <br/>
            <div>
                <button onClick={() =>
                    add()
                }>
                    点击我加
                </button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={() =>
                    minus()
                }>
                    点击我剪
                </button>

            </div>
            <hr/>
        </>
    );
}
export default  Lesson5;

