import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getGithubRepos } from "../../actions/profile";

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos, username]);
  return (
    <div className="profile-github">
      <h2 className="text-primary my-2">Github Repos</h2>
      {!Array.isArray(repos) ? (
        <Spinner />
      ) : (
        repos.map((repo) => (
          <div key={repo._id || repo.id} className="repo bg-white p-1 my-1">
               <div>
            <h4>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </h4>
               <p>
               {repo.description ? repo.description : "No description provided"}
                 </p>
          </div>
          <div>
               <ul>
               <li className="badge badge-primary">
                    Stars: {repo.stargazers_count}
               </li>
               <li className="badge badge-dark">
                    Watchers: {repo.watchers_count}
               </li>
               <li className="badge badge-light">
                    Forks: {repo.forks_count}
               </li>
               </ul>
          </div>
          </div>
        ))
      )}
    </div>
  );
};

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired,
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  repos: Array.isArray(state.profile.repos) ? state.profile.repos : [],
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
