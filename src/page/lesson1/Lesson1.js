import React,{} from 'react';
import './main.css';
import {withRouter } from "react-router";

class Welcome extends React.Component {
    constructor(props) {
        console.log('Welcome constructor')
        super(props);
    }
    componentDidMount() {
        console.log('Welcome componentDidMount')
    }
    render() {
        return <h1>Hello! {this.props.name}</h1>;
    }
}

function Name(props) {
    return <h1>网站名称：{props.name}</h1>;
}
function Url(props) {
    return <h1>网站地址：{props.url}</h1>;
}
function Nickname(props) {
    return <h1>网站小名：{props.nickname}</h1>;
}

function Mailbox(props) {
    if (!props.unreadMessages) {
        return null;
    }
    const unreadMessages = props.unreadMessages;
    return (
        <>
            {unreadMessages.length > 1 &&
            <h2>
                您有 {unreadMessages.length} 条未读信息。
            </h2>
            }
        </>
    );
}

class Hello extends React.Component {

    constructor(props) {
        super(props);
        this.state = {opacity: 1.0};
    }

    componentDidMount() {
        console.log('Hello componentDidMount!')
    }

    render () {
        return (
            <div style={{opacity: this.state.opacity}}>
                Hello {this.props.name}
            </div>
        );
    }
}


class Lesson1 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleTimeString(),
            arr : [
                '菜鸟教程',
                '学的不仅是技术，更是梦想！',
                '菜鸟教程！',
                '菜鸟教程',
                '学的不仅是技术，更是梦想！',
                '菜鸟教程！'
            ],
            value: 'Hello Runoob!',
            messages : ['React', 'Re: React', 'Re:Re: React']
        };
        this.textInput = React.createRef();

        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick = (e) => {
        this.textInput.current.focus();
        e.preventDefault();
        console.log('链接被点击');
    }

    handleChange (event) {
        console.log(`input handleChange ${event.target.value}`)
        this.setState({
            value: event.target.value}
        );
    }

    tick() {
        this.timerID = setInterval(()=>{
            this.setState({
                date: new Date().toLocaleTimeString()
            })
        }, 2000);
    }

    componentDidMount() {
        console.log('Lesson1 componentDidMount')
        this.tick()
    }

    componentWillUnmount() {
        console.log('Lesson1 componentWillUnmount')
        clearInterval(this.timerID);
    }

    render(){
        return(
            <div className="page" key="Lesson1" onClick={this.handleClick}>
                <h2>现在是 {this.state.date}.</h2>
                {/*注释...*/}
                <ul>
                    {this.state.arr.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    })}
                </ul>
                <Welcome name='funway'></Welcome>
                <Name name="菜鸟教程" />
                <Url url="http://www.runoob.com" />
                <Nickname nickname="Runoob" />
                <Mailbox unreadMessages={this.state.messages} />
                <Mailbox  />
                <Hello></Hello>
                <div>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </div>
                <div>
                    <input type="text" ref={this.textInput} />
                    <input
                        type="button"
                        value="点我输入框获取焦点"
                        onClick={this.handleClick.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

export default  withRouter(Lesson1);
