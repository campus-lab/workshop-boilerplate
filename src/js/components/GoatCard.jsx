'use strict';
import React from 'react';

const GoatCard = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired
    },

    getDefaultProps() {
        return {
            item: {}
        }
    },

    render() {
        const item = this.props.item;

        return (
            <div>
                <img src={item.url} />
                <h4>{item.displayName}</h4>
                <p>{item.description}</p>
            </div>
        );
    }
});

export default GoatCard;

