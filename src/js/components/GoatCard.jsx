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
            <div className="goat-card">
                <div className="goat-card__img">
                    <img src={item.url} />
                </div>
                <div className="goat-card__details">
                    <h4>{item.displayName}</h4>
                    <p>{item.description}</p>
                </div>
            </div>
        );
    }
});

export default GoatCard;

