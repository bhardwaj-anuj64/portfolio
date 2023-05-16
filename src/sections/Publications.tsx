import React from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Section, Timeline } from '../components'
import history from '../data/history.json'

const publications = history.publications

export class Publications extends React.Component {
  render() {

    return(
      <Section id="publications" title="Publications">
        <Row>
          <Col md={12}>
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">

              { publications.map(p => (
                <Timeline key={p.doi} title={p.title} authors={p.authors} icon={['fas', 'newspaper']} left="-7px">
                  <h6 dangerouslySetInnerHTML={ { __html: p.authors } }/>
                  <div dangerouslySetInnerHTML={ { __html: p.description } } />
                  <Button href={p.doi} variant="btn btn-kd"> <FontAwesomeIcon icon={fas["faLink"]} /> Link</Button>
                </Timeline>
              ))}

              <span className="line" />
            </div>
          </Col>
        </Row>
      </Section>
    )
  }
}

export default Publications
