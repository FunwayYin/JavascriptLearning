import React,{} from 'react';
import PropTypes from 'prop-types';

class Test2 extends React.Component{
    render(){
        return(
            <>
                <p>{this.props.name}</p>
                <p>{this.props.test}</p>
                <p>{this.props.aaa}</p>
            </>
        );
    }
}

Test2.propTypes = {
    name: PropTypes.string,
    arr: PropTypes.array,
    flag: PropTypes.bool.isRequired
};

Test2.defaultProps  = {
    aaa: 'world'
};



export default  Test2;
