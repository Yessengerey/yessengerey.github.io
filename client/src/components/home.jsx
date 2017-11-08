// React
import React from 'react';

// Material UI
import Paper from 'material-ui/Paper';

// Styling
import styles from '../../../styles/home/home.css';

// Variables
import globalVars from '../../../static/resources/GLOBAL_VARIABLES.js';

const style = {
  height: 500,
  width: 400,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImgURL: '',
      profileDescription: '',
      profileFullname: '',
      profilePosition: '',
      pageStage: 'loading'
    }
    this.profilesClickHandler = this.profilesClickHandler.bind(this);
  }

  profilesClickHandler(event) {
    if (event.target.id === styles.facebook) {
      window.open('https://www.facebook.com/yessengerey');
    }

    if (event.target.id === styles.linkedin) {
      window.open('https://www.linkedin.com/in/yessengerey/');
    }

    if (event.target.id === styles.hackerrank) {
      window.open('https://www.hackerrank.com/yes_murz');
    }
  }

  componentWillMount() {
    firedb.collection('users').get()
      .then((snapshot) => {
        var yes_profile = snapshot.docs[0].data();
        this.setState({
          profileDescription: yes_profile.description
        }, () => {
          this.setState({
            pageStage: 'finished'
          });
        });
      })
      .catch((err) => {
        console.log('ERROR retrieving documents', err);
      });
  }

  render() {
    let displayElements = '';

    if (this.state.pageStage === 'loading') {
      displayElements = <div></div>;
    } else if (this.state.pageStage === 'finished') {
      displayElements =
      <div className={styles.inner_home_container}>
        <div className={styles.profile_image_container} style={{backgroundImage: `url(${PROFILE_IMAGE.src})`}}>
        </div>
        <div className={styles.profile_information}>
          <span id={styles.position}>{globalVars.POSITION}</span>
          <span id={styles.fullname}>{globalVars.FULLNAME}</span>
        </div>
        <div className={styles.introduction_container}>
          {this.state.profileDescription}
        </div>
        <div className={styles.profiles_container}>
          Check out my Profiles:
          <div className={styles.profiles_buttons}>
            <div onClick={this.profilesClickHandler} id={styles.facebook}>
              Facebook
            </div>
            <div onClick={this.profilesClickHandler} id={styles.linkedin}>
              LinkedIn
            </div>
            <div onClick={this.profilesClickHandler} id={styles.hackerrank}>
              Hackerrank
            </div>
          </div>
        </div>
      </div>
    }
    return (
      <div className={styles.outer_home_container}>
        {displayElements}
      </div>
    )
  }

}

export default Home;
