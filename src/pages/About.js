import React, { Component } from 'react'
import { InnerPage, Title, Text } from '../components/InnerPage'

class About extends Component {
  render () {
    return (
      <InnerPage>
        <Title>About</Title>
        <Text>
          Aaveg is NIT Trichy’s one and only inter-hostel battle arena for the first-years.
          Aaveg is by the first-year students, and for the first-year students.
          There are 5 cups for which the hostels are pitted against each other:
          The Sports Cup, where teamwork, skills, along with efforts are essential
          to gain the trophy. The Culturals Cup, where artists, musicians, and dancers
          showcase their mastery for this trophy. The Spectrum Cup, where a ton of fun and
          hard events like JAM, Adzap, and Online Gaming events are held. And finally,
          The Cheering Cup, that tests the bonds of the hostels, that observes the support
          the hostels provide while their teams enter the stage! And the hostel with the
          highest amount of points in the end will win the Overall Cup. So this Aaveg, call
          upon the Abyss, and LET THE BATTLE BEGIN!
        </Text>
      </InnerPage>
    )
  }
}

export default About
