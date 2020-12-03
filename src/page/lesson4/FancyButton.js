import React, {} from 'react';

const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
        {props.label}
    </button>
));

function logProps(WrappedComponent) {
    class LogProps extends React.Component {
        componentDidUpdate(prevProps) {
            console.log('old props:', prevProps);
            console.log('new props:', this.props);
        }

        render() {
            const {forwardedRef, ...rest} = this.props;
            return <WrappedComponent  ref={forwardedRef} {...rest}  {...this.props} />;
        }
    }

    function forwardRef(props, ref) {
        return <LogProps {...props} forwardedRef={ref} />;
    }

    const name = WrappedComponent.displayName || WrappedComponent.name;
    forwardRef.displayName = `logProps(${name})`;

    return React.forwardRef(forwardRef);

}

export default logProps(FancyButton);
