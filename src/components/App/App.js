
import React, { PureComponent } from 'react';

import './App.css';

import { Profile, Work, Education, Skills, About } from '../index';

export default class App extends PureComponent {

  render() {

      const { profile, work, education, skills } = this.props.cv;

      return (
          <div className='container'>
              <Profile profile={profile} />
              <About about={profile.about} />
              <Work work={work} />
              <Education education={education} />
              <Skills skills={skills} />
          </div>
      );
  }
}
