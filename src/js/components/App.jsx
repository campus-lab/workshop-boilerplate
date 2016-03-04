'use strict';
import React from 'react';
import ReactTimeless from 'react-timeless';

import GoatList from './GoatList';

const App = React.createClass({
    getInitialState() {
        return {
            maxTimestamp: 0,
            minTimestamp: 0,
            dates: [
                { start: 1104537600 },
                { start: 1451606400 }
            ],
            goats: [
                {
                    url: 'https://i.ytimg.com/vi/nlYlNF30bVg/hqdefault.jpg',
                    displayName: 'Goat 1',
                    description: 'happy goat',
                    published: 1167609600
                },
                {
                    url: 'http://cdn.acidcow.com/pics/20100514/funny_goats_02.jpg',
                    displayName: 'Goat 2',
                    description: 'mad goat',
                    published: 1230768000
                },
                {
                    url: 'http://wanna-joke.com/wp-content/uploads/2014/02/funny-gif-practicing-how-to-goat.gif',
                    displayName: 'Goat 3',
                    description: 'acrobatic goats',
                    published: 1262304000
                },
                {
                    url: 'http://i.imgur.com/PwYBpGP.gif',
                    displayName: 'Goat 4',
                    description: 'winter goat',
                    published: 1325376000
                }
            ]
        }
    },
    render() {
        return (
            <div>
                <ReactTimeless dates={this.state.dates} onChange={this._handleChange} />
                <div>
                    <GoatList items={this.state.goats} maxTimestamp={this.state.maxTimestamp} minTimestamp={this.state.minTimestamp}  />
                </div>
            </div>
        );
    },

    _handleChange(data){
        const {maxCursorTimestamp, minCursorTimestamp} = data;

        this.setState(
            {
                maxTimestamp: maxCursorTimestamp,
                minTimestamp: minCursorTimestamp
            }
        )
    }


});

export default App;

