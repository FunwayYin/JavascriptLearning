import React,{Suspense } from 'react';
import './main.css';
import {withRouter } from "react-router";
import { add } from './math.js';

const Test = React.lazy(() => import('./Test'));
const Test2 = React.lazy(() => import('./Test2'));

class Lesson2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        };
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick = (e) => {

    }

    setData () {
        import("./math").then(math => {
            this.setState({
                num:  add(1,10)
            })
        });
    }

    handleChange (event) {
    }

    componentDidMount() {
        this.setData()
        console.log('Lesson2 componentDidMount')
    }

    componentWillUnmount() {
        console.log('Lesson2 componentWillUnmount')
    }

    render(){
        return(
            <React.Fragment key={123}>
                <p onClick={this.handleClick}>
                   代码分割、错误边界、Fragments、不使用 JSX 的 React、不使用 ES6、Mixins、Portals
                </p>
                <p>{this.state.num}</p>
                <Suspense fallback={<div>加載中...</div>}>
                    <Test></Test>
                    <Test2 toWhat='world' name={'funway'} flag={true}></Test2>
                </Suspense>
            </React.Fragment>
        );
    }
}

export default  withRouter(Lesson2);
