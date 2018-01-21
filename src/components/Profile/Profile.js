import React, {PureComponent} from 'react';

import './Profile.css';

export default class Profile extends PureComponent {

    render() {
        return (
            <section className='profile-container'>

                <div className='left'>
                    <div className='avatar-wrapper'>
                        <img
                            className='avatar'
                            src={this.props.profile.avatar}
                            alt={''}
                            height={260}
                            width={260}
                        />
                    </div>
                    <div className='name-position-text'>
                        <h3>{this.props.profile.name}</h3>
                        <h3>{this.props.profile.position}</h3>
                    </div>
                    <div className='location-email'>
                        <i className='fa fa-lg fa-location-arrow'/>
                        {this.props.profile.location.city}
                        <div className='email'>
                            <i className='fa fa-lg fa-envelope'/>
                            <a className='email-to'
                               href='mailto:{this.props.profile.email}'>{this.props.profile.email}</a>
                        </div>
                    </div>
                </div>

                <div className='right'>
                    <span>{this.props.profile.summary}</span>
                    <div className='summary'>
                        <i className='fa fa-twitter fa-3x'/>
                        <i className='fa fa-skype fa-3x'/>

                        <a href={this.props.profile.profiles[0].github}>
                            <i className='fa fa-github fa-3x'/>
                        </a>
                        <i className='fa fa-google-plus fa-3x'/>
                    </div>
                </div>
            </section>
        )
    }
}
