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
    let displayElements = <img src='/static/resources/gifs/loading_cube.gif'/>;

    if (this.state.pageStage === 'loading') {
      displayElements = <img src='/static/resources/gifs/loading_cube.gif' />;
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
          Profiles
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
