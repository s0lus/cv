import React, {PureComponent} from 'react';

import './Profile.css';

export default class Profile extends PureComponent {

    render() {

        console.log(this.props);

        return (
            <section className='profile-container'>
                <div className='wrapper'>
                    <div className='avatar'>
                        <img src={this.props.profile.avatar} alt={''} height={100} width={75}/>
                    </div>
                    <div className='name'>
                        <span>{this.props.profile.name}</span>
                    </div>
                    <div className='email'>
                        <span>{this.props.profile.email}</span>
                    </div>
                </div>

                <div className='about-wrapper'>
                    <span className='about'>
                        {this.props.profile.about}
                    </span>
                </div>
            </section>
        )
    }
}
