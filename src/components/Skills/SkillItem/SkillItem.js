
import React, { PureComponent } from 'react';

import './SkillItem.css';

export class SkillItem extends PureComponent {

    render() {
        return (
            <div className='skill-item'>
                {this.props.skills.map((skill) => skill.name)}
            </div>
        )
    }
}
