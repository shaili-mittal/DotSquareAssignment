import React from 'react';
import { ActivityIndicator } from 'react-native'

const withProgressBar = (WrappedComponent, indSize, indColor) => {
    class WithProgressBar extends React.Component {

        render() {
            return (
                <WrappedComponent {...this.props} backGroundColour={{backgroundColor:'#27F9D9'}}>
                    <ActivityIndicator size={indSize} color={indColor} />
                </WrappedComponent>
            )
        }
    }
    return WithProgressBar
}

export default withProgressBar;