
import React, { PureComponent } from 'react';

import './Education.css';

export default class Education extends PureComponent {

    render() {
        const { education } = this.props;

        return (
            <div className='education-container'>
                <h2 className='text-uppercase'>
                    <i className="fa fa-lg fa-mortar-board"/>
                    <span>Education</span>
                </h2>

                {
                    education.map(
                        (education) => (
                            <text className='education-text'>
                                <h3>{education.institution}</h3>
                                <h3>{education.area}</h3>
                                <h4>{education.studyType}</h4>
                                Studied: {education.startDate} - {education.endDate}
                            </text>
                        )
                    )
                }
            </div>
        )
    }
}
