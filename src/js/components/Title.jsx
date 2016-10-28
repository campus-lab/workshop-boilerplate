'use strict';

import React from 'react';

const Title = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },

    getDefaultProps() {
        return {
            title: {}
        }
    },

    render() {
        const word = this.props.title;
        let html = [];

        for (var i = 0, len = word.length; i < len; i++) {
            html.push(<span key={i} className={`l${i}`}>{word[i]}</span>);
        }

        return <div id="word">{html}</div>;
    }
});

export default Title;

