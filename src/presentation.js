import React, { Component } from 'react';

import { Deck, Heading, ListItem, List, Slide, Text, Appear } from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022', // Black
    tertiary: '#03A9FC', // Blue
    quarternary: '#CECECE', // Gray
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
);

export default class Presentation extends Component {
  render() {
    return (
      <Deck transitionDuration={500} theme={theme}>
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Web & Mobile
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Grill party
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} textColor="tertiary">
            Where is Honza?
          </Heading>
          <List>
            <Appear>
              <ListItem size={30}>Who is Honza?</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Why is Honza</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>the best manager ever?</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Because he is not here! :)</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} textColor="tertiary">
            Mission of the day
          </Heading>
          <List>
            <Appear>
              <ListItem size={30}>Meet each other</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Know-how transfer</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Fun & food!</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} textColor="tertiary">
            Organization info
          </Heading>
          <List>
            <Appear>
              <ListItem size={30}>
                Presentations / pannel discussions 20+5 minutes
              </ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Breaks 15 minutes</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Grill party at Smecky's terace</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>After-party here in Krakovska</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} textColor="tertiary">
            Program
          </Heading>
          <List>
            <Appear>
              <ListItem textSize={30} bold>{`14.00 - Start`}</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={30}>
                {`14.15 - Functional approach (Tomáš Horáček)`}
              </ListItem>
            </Appear>
            <Appear>
              <ListItem
                textSize={30}
              >{`14.45 - Serverless (Boris Musatov)`}</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={30} bold>{`-- Break --`}</ListItem>
            </Appear>
            <Appear>
              <ListItem
                textSize={30}
              >{`15.30 - Programming And Design – Panel (Motaquillah Maddane, Tomáš Řezáč, Tomáš Horáček)`}</ListItem>
            </Appear>
            <Appear>
              <ListItem
                textSize={30}
              >{`16.00 - Libraries/Frameworks worth to know about vs waste of time (Tomáš Řezáč)`}</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={30} bold>{`-- Break --`}</ListItem>
            </Appear>
            <Appear>
              <ListItem
                textSize={30}
              >{`16.45 - GraphQL in 2018 (Petr Čaněk)`}</ListItem>
            </Appear>
            <Appear>
              <ListItem
                textSize={30}
              >{`17.15 - Web/Mobile department overview and vision for 2018 (Jan Černý)`}</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={30} bold>{`End + Grill party`}</ListItem>
            </Appear>
          </List>
        </Slide>
      </Deck>
    );
  }
}
