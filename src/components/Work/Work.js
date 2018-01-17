
import React, { PureComponent } from 'react';

import { WorkItem } from './WorkItem/WorkItem';

import './Work.css';

export default class Work extends PureComponent {

    render() {
        return (
            <section className='work-container'>
                {
                    this.props.work.map(
                        (work, index) => <WorkItem key={index} work={work}/>
                    )
                }
            </section>
        );
    }
}
