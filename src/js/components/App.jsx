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
                    url: 'http://funny-wall.com/wp-content/uploads/Funny-Goat-Drinking-Beer.jpg',
                    displayName: 'Adele',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    published: 1167609600
                },
                {
                    url: 'http://www.ourhenhouse.org/wp-content/uploads/2013/02/goat_peaceful_prairie.jpg',
                    displayName: 'Agatha',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    published: 1230768000
                },
                {
                    url: 'http://www.hallfarmpark.co.uk/wp-content/uploads/2014/03/goat-walk1.jpg',
                    displayName: 'Alexis',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    published: 1262304000
                },
                {
                    url: 'http://www.ourhenhouse.org/wp-content/uploads/2013/06/goat_farm_sanctuary.jpg',
                    displayName: 'Dimitra',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    published: 1325376000
                },
                {
                    url: 'http://creepy.blogs.com/photos/uncategorized/2007/11/27/goat.jpg',
                    displayName: 'Amelia',
                    description: 'winter goat',
                    published: 1355376000
                },
                {
                    url: 'http://forum.unity3d.com/attachments/526d8bb21605fb164400000d-jpg.93914/',
                    displayName: 'Erika',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    published: 1385376000
                },
                {
                    url: 'http://randomoverload.org/wp-content/uploads/2016/01/5895hE9398D3F.jpg',
                    displayName: 'Louise',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    published: 1425376000
                },
                {
                    url: 'http://cdn-img.people.com/emstag/i/2015/pets/news/150323/goat-800.jpg',
                    displayName: 'Marion',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    published: 1395376000
                },
                {
                    url: 'http://www.hobbyfarms.com/images/editorial-blog/cyndi-cady/choosing-animals_800.jpg',
                    displayName: 'Nora',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    published: 1335376000
                }
            ]
        }
    },
    render() {
        return (
            <div>
                <h1>Funny Goats!</h1>
                <div>
                    <GoatList items={this.state.goats} maxTimestamp={this.state.maxTimestamp} minTimestamp={this.state.minTimestamp}  />
                </div>
                <div className="supawrapper">
                    <ReactTimeless dates={this.state.dates} onChange={this._handleChange} />
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

