
import React, { PureComponent } from 'react';

import './Education.css';

export default class Education extends PureComponent {

    render() {
        console.log(this.props);
        return (
            <div className='education-container'>
                <p>{this.props.education[0].institution}</p>
                <p>{this.props.education[0].area}</p>
                <p>{this.props.education[0].studyType}</p>
            </div>
        )
    }
}
