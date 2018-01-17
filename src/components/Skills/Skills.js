
import React, { PureComponent } from 'react';

import './Skills.css';

import { SkillItem } from './SkillItem/SkillItem';

export default class Skills extends PureComponent {

    render() {
        return (
            <div className='skills-container'>
                <SkillItem skills={this.props.skills} />
            </div>
        );
    }
}
