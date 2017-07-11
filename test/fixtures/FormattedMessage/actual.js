import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

export default class Foo extends Component {
    render() {
        return (
            <div id='foo.bar.div'>
                <FormattedMessage
                    id='foo.bar.baz'
                    defaultMessage='Hello World!'
                    description='The default message.'
                />
            </div>
        );
    }
}
