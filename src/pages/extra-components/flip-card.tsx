import { Row, Col, Card, CardBody, FlipCard } from 'oah-ui';
import React from 'react';
import SEO from '../../components/SEO';

export default function FlipCards() {
  return (
    <>
      <SEO title="FlipCards" keywords={['kartaDharam', 'akriya', 'connected devices', 'iot', 'dashboard', 'react']} />
      <Row>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <FlipCard>
            <Card>
              <header>Front</header>
              <CardBody>Hello Card component this body of card</CardBody>
              <footer>Footer</footer>
            </Card>
            <Card>
              <header>Back</header>
              <CardBody>Hello Card component this body of card</CardBody>
              <footer>Footer</footer>
            </Card>
          </FlipCard>
        </Col>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <FlipCard button="bottom">
            <Card status="Info" accent="Primary">
              <header>Front</header>
              <CardBody>Hello Card component this body of card</CardBody>
              <footer>Footer</footer>
            </Card>
            <Card status="Primary" accent="Info">
              <header>Back</header>
              <CardBody>Hello Card component this body of card</CardBody>
              <footer>Footer</footer>
            </Card>
          </FlipCard>
        </Col>
      </Row>
    </>
  );
}
