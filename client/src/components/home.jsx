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
      profileImgURL: ''
    }
  }

  componentWillMount() {
    storageRef.child('images/profile_image.jpeg').getDownloadURL().then(url => {
      this.setState({
        profileImgURL: url
      });
    });
  }

  render() {
    return (
      <div className={styles.outer_home_container}>
        <div className={styles.inner_home_container}>
          <div className={styles.profile_image_container} style={{backgroundImage: `url(${this.state.profileImgURL})`}}>
          </div>
          <div className={styles.profile_information}>
            <span id={styles.position}>{globalVars.POSITION}</span>
            <span id={styles.fullname}>{globalVars.FULLNAME}</span>
          </div>
          <div className={styles.introduction_container}>
            Brief introduction
            {/* <div>
            {firedb.collection('users').get()
              .then((snapshot) => {
                snapshot.forEach((doc) => {
                    console.log(doc.data());
                });
              })
              .catch((err) => {
                console.log('ERROR retrieving documents', err);
              })}
            </div> */}
          </div>
          <div className={styles.profiles_container}>
            Profiles
          </div>
        </div>
      </div>
    )
  }

}

export default Home;
