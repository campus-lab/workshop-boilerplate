'use strict';
import React from 'react';
import ReactTimeless from 'react-timeless';

const App = React.createClass({
    getInitialState() {
        return {
            maxCursorTimestamp: 0,
            minCursorTimestamp: 0
        }
    },
    render() {
        let dates = [
            {
                start: 1104537600
            },
            {
                start: 1451606400
            }
        ];

        let goats = [
            {
                url: 'https://i.ytimg.com/vi/nlYlNF30bVg/hqdefault.jpg',
                displayName: 'Goat 1',
                published: 1167609600
            },
            {
                url: 'http://cdn.acidcow.com/pics/20100514/funny_goats_02.jpg',
                displayName: 'Goat 2',
                published: 1230768000
            },
            {
                url: 'http://wanna-joke.com/wp-content/uploads/2014/02/funny-gif-practicing-how-to-goat.gif',
                displayName: 'Goat 3',
                published: 1262304000
            },
            {
                url: 'http://i.imgur.com/PwYBpGP.gif',
                displayName: 'Goat 4',
                published: 1325376000
            }
        ];

        let renderedGoats = 0;

        return (
            <div>
                <ReactTimeless dates={dates} onChange={this._handleChange} />
                <div>
                    <ul>
                        {goats.map((item, key) => {
                            let html = null;
                            if (item.published >= this.state.minCursorTimestamp && item.published <= this.state.maxCursorTimestamp) {
                                renderedGoats++;
                                html = (
                                    <li>
                                        <img src={item.url} />
                                        {item.displayName}
                                    </li>
                                )
                            }
                            return html;
                        })}
                        {this._getFeedback(renderedGoats)}
                    </ul>
                </div>
            </div>
        );
    },

    _handleChange(data){
        const {maxCursorTimestamp, minCursorTimestamp} = data;

        this.setState(
            {
                maxCursorTimestamp,
                minCursorTimestamp
            }
        )
    },

    _getFeedback(renderedGoats) {
        let html = null;

        if ( renderedGoats === 0 ) {
            html = (<li>Can't find goats in this time period! :(</li>)
        }

        return html;
    }


});

export default App;

