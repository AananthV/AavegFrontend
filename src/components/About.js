import React, { Component } from 'react'
import { InnerPage, Title, Text } from './InnerPage'

class About extends Component {
  render() {
    return (
      <InnerPage>
        <Title>About</Title>
        <Text>
          An impulse, that’s what Aaveg stands for, and it aims to caters only to the first years-it’s organised by the
          first years and participation is limited to only the first years. An inter-hostel competition, there’s passion
          and an undying determination to make your hostel win, that’s the spirit of Aaveg.
          There are four major cups, the Culturals Cup, involving all the events that test your expertise in areas
          ranging from art to dance; the Spectrum Cup, comprises a plethora of events from JAM and Minute to Win It to
          gaming events; the Sports Cup for all the budding athletes and the talented sportsmen while the Cheering Cup
          quantifies the camaraderie of the hostel.
          It’s time to channel your fury and ensure that your hostel wins the most points and returns with the coveted
          trophy and glory.
        </Text>
      </InnerPage>
    )
  }
}

export default About;
