import React from 'react';
import { link } from 'fs';

class List extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const items = this.props.tasks.map((item, i) =>
            <li className="list-group-item" key={i}>{item}</li>);
        return (
            <div>
                <h4>Task List:</h4>
                <ul className="list-group">
                    {items}
                </ul>
            </div >
        )
    }

}

export default List;