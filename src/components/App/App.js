
import React, { PureComponent } from 'react';

import './App.css';

import { Profile, Work, Education, Skills } from '../index';

export default class App extends PureComponent {

  render() {

      const { profile, work, education, skills } = this.props.cv;

      return (
          <div className='container'>
              <Profile profile={profile} />
              <Work work={work} />
              <Education education={education} />
              <Skills skills={skills} />
          </div>
      );
  }
}
