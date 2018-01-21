import React, {PureComponent} from 'react';

import './WorkItem.css';

export class WorkItem extends PureComponent {

    render() {
        return (
            <div className='work-item'>
                <span className='work-item-text'>
                    <h3>{this.props.work.company}</h3>
                    <p>{this.props.work.startDate} - {this.props.work.endDate}</p>
                    <h4>{this.props.work.position}</h4>
                    <a href={this.props.work.website}>{this.props.work.website}</a>
                    <p className='summary-work'>{this.props.work.summary}</p>
                </span>
            </div>
        )
    }
}
