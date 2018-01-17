
import React, { PureComponent } from 'react';

import './WorkItem.css';

export class WorkItem extends PureComponent {

    render() {
        return (
            <div className='work-item'>
                <h3>{this.props.work.company}</h3>
                <p>{this.props.work.position}</p>
                <p>{this.props.work.website}</p>
                <p>{this.props.work.summary}</p>
            </div>
        )
    }
}
