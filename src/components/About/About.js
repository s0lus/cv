
import React, { PureComponent } from 'react';

import './About.css';

export default class About extends PureComponent {

    render() {
        return (
            <div className='about-container'>
                <h2 className='text-uppercase'>
                    <i className='fa fa-lg fa-user' />
                    About
                </h2>
                 <span className='about'>
                     {this.props.about}
                 </span>
            </div>
        );
    }
}
