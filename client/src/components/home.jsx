// React
import React from 'react';

// Material UI
import Paper from 'material-ui/Paper';

import styles from '../../../styles/home/home.css';

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
      <div>
        <div className={styles.home_container}>
          <div className={styles.profile_image_container} style={{backgroundImage: `url(${this.state.profileImgURL})`}}>
          </div>
        </div>
      </div>
    )
  }

}

export default Home;
