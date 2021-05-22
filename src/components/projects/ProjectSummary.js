import React from 'react'
import moment from 'moment'

const ProjectSummary = ({project}) => {    
  return (
    <div className="card  project-summary rgb(243, 224, 161)">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{project.title}</span>
        <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
        <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default ProjectSummary