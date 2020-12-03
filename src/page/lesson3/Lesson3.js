import React,{} from 'react';
import {withRouter} from "react-router";

function Page(props) {
    const user = props.user;
    const userAlink = (
        <Alink href={user.permalink}></Alink>
    );
    return <PageLayout userAlink={userAlink} />;
}

class PageLayout extends React.Component {
    render() {
        return (
            <div>
                {this.props.userAlink}
            </div>
        );
    }
}

function Alink(props)  {
    return (
        <a href={props.href}>
            <Avatar></Avatar>
        </a>
    );
}

function Avatar (props) {
    return (
        <>
            {props.name}
        </>
    );
}


/**
 * 上传文件框
 */
class FileInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }
    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Upload file:
                    <input type="file" ref={this.fileInput} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
// 为当前的 theme 创建一个 context（“light”为默认值）。
const ThemeContext = React.createContext('light');

// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar() {
    return (
        <div>
            <p>Toolbar</p>
            <ThemedButton />
        </div>
    );
}

class ThemedButton extends React.Component {
    // 指定 contextType 读取当前的 theme context。
    // React 会往上找到最近的 theme Provider，然后使用它的值。
    // 在这个例子中，当前的 theme 值为 “dark”。
    static contextType = ThemeContext;
    render() {
        return <span theme={this.context} >xxxxx</span>;
    }
}

class Lesson3 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        };
        this.input = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick = (e) => {

    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.input.current.value);
        event.preventDefault();
    }

    handleChange (e) {
    }

    componentDidMount() {
        console.log('Lesson3 componentDidMount')
    }

    componentWillUnmount() {
        console.log('Lesson3 componentWillUnmount')
    }

    render(){
        let user = {
            permalink: 'http://www.baidu.com',
            avatarSize: 10,
            name: '百度'
        }
        return(
            <React.Fragment key={123}>
                <h1 >
                    非受控组件
                </h1>
                <p>
                    在大多数情况下，我们推荐使用 受控组件 来处理表单数据。在一个受控组件中，表单数据是由 React 组件来管理的。另一种替代方案是使用非受控组件，这时表单数据将交由 DOM 节点来处理。
                </p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" ref={this.input}  defaultValue="Bob"/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <br/>
                <FileInput></FileInput>
                <ThemeContext.Provider value="dark">
                    <Toolbar />
                </ThemeContext.Provider>
                <br/><br/><br/>
                <Page user={user}></Page>
            </React.Fragment>
        );
    }
}

export default  withRouter(Lesson3);
