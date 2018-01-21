
import React, { PureComponent } from 'react';

import { WorkItem } from './WorkItem/WorkItem';

import './Work.css';

export default class Work extends PureComponent {

    render() {
        return (
            <section className='work-container'>
                <h2 className='text-uppercase'>
                    <i className="fa fa-lg fa-building" />
                    <span>Work EXPERIENCE</span>
                </h2>
                {
                    this.props.work.map(
                        (work, index) => <WorkItem key={index} work={work}/>
                    )
                }
            </section>
        );
    }
}
