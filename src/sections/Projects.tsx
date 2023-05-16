import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Section, Timeline } from '../components'
import history from '../data/projects.json'

const projects = history.projects

export class Projects extends React.Component {
  render() {

    return(
      <Section id="projects" title="Projects">
        <Row>
          <Col md={12}>
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">

              { projects.map(e => (
                <Timeline key={e.link} title={e.title} icon={['fas', 'graduation-cap']}>
                  <p>{e.techStack}</p>
                  <div dangerouslySetInnerHTML={ { __html: e.description } } />
                  <a href={e.link} className="btn btn-kd" target="_blank" rel="noopener noreferrer">View </a>
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

export default Projects