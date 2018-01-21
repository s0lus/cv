
import React, { PureComponent } from 'react';

import './Skills.css';

import { SkillItem } from './SkillItem/SkillItem';

export default class Skills extends PureComponent {

    render() {
        return (
            <section className='skills-container'>
                <h2 className='text-uppercase'>
                    <i className="fa fa-lg fa-code" />
                    <span>Skills</span>
                </h2>
                <SkillItem skills={this.props.skills} />
            </section>
        );
    }
}
