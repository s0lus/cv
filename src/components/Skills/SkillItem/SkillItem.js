
import React, { PureComponent } from 'react';

import './SkillItem.css';

export class SkillItem extends PureComponent {

    render() {
        return (
            <ul className='skill-item'>
                {
                    this.props.skills.map(
                        (skill, index) => (
                            <li key={index}>
                                <span className="label label-success">
                                    {skill.name}
                                </span>
                            </li>
                        )
                    )
                }
            </ul>
        )
    }
}
