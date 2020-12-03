import React, { useState, useEffect} from 'react';
import FancyButton from './FancyButton'

const ref = React.createRef();

function Lesson4() {
    // 声明一个新的叫做 “count” 的 state 变量
    const [count, setCount] = useState(0);
    useEffect(() => {
        // 使用浏览器的 API 更新页面标题
        document.title = `You clicked ${count} times`;
    });

    function handleClick() {
        alert('a')
    }

    return(
        <React.Fragment key={123}>
            <h1 >
                hook、Refs 转发、Refs and the DOM
            </h1>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <br/><br/><br/>
            <h3>Refs 转发</h3>
            <FancyButton
                label="Click Me"
                handleClick={handleClick}
                ref={ref}
            ></FancyButton>
        </React.Fragment>
    );
}

export default  Lesson4;

