import React, { Fragment} from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { deleteExperience } from '../../actions/profile'

const Experience = ({ experience, deleteExperience }) => {
  return (
    <Fragment>
          <h2 className="my-2">Experience Credentials</h2>
          <table className="table">
               <thead>
                    <tr>
                         <th>Company</th>
                         <th className="hide-sm">Title</th>
                         <th className="hide-sm">Years</th>
                         <th />
                    </tr>
               </thead>
               <tbody>
                    {experience.map((exp) => (
                         <tr key={exp._id}>
                              <td>{exp.company}</td>
                              <td className="hide-sm">{exp.title}</td>
                              <td className="hide-sm">
                                   <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{' '}
                                   {exp.to === null ? (
                                        ' Now'
                                   ) : (
                                        <Moment format="YYYY/MM/DD">{exp.to}</Moment>
                                   )}
                              </td>
                              <td>
                                   <button onClick={() => deleteExperience(exp._id)} className="btn btn-danger">Delete</button>
                              </td>
                              <td />
                         </tr>
                    ))}
               </tbody>
          </table>
    </Fragment>
  )
}

Experience.propTypes = {
     experience: PropTypes.array.isRequired,
     deleteExperience: PropTypes.func.isRequired
}

export default connect(null,{ deleteExperience })(Experience)