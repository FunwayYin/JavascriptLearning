import React,{} from 'react';

class MyErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {error: null};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        try {
            // 执行操作，如有错误则会抛出
        } catch (error) {
            this.setState({error});
        }
    }

    render() {
        if (this.state.hasError) {
            // 你可以自定义降级后的 UI 并渲染
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

export default  MyErrorBoundary;
