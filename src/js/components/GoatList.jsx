'use strict';
import React from 'react';
import GoatCard from './GoatCard';

const GoatList = React.createClass({
    propTypes: {
        maxTimestamp: React.PropTypes.number.isRequired,
        minTimestamp: React.PropTypes.number.isRequired,
        items: React.PropTypes.array.isRequired
    },

    getDefaultProps() {
        return {
            maxTimestamp: 0,
            minTimestamp: 0,
            items: []
        }
    },

    render() {
        const goats = this.props.items;
        let renderedGoats = 0;

        return (
            <ul className="goat-list row">
                {goats.map((item, key) => {
                    let html = null;
                    if (item.published >= this.props.minTimestamp && item.published <= this.props.maxTimestamp) {
                        renderedGoats++;
                        html = (
                            <li className="column small-12 medium-4">
                                <GoatCard item={item} />
                            </li>
                        )
                    }
                    return html;
                })}
                {this._getFeedback(renderedGoats)}
            </ul>
        );
    },

    _getFeedback(renderedGoats) {
        let html = null;

        if ( renderedGoats === 0 ) {
            html = (<li>Can't find goats in this time period! :(</li>)
        }

        return html;
    }


});

export default GoatList;

