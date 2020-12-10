import React from 'react';
import './user.css'
import Header from './../sections/header/header.js'
import Footer from './../sections/footer/footer.js'
import * as firebase from 'firebase';
import UserDetails from './userDetails.js';
import AchievementCard from './achievementCard.js';

export default class User extends React.Component {
  componentWillMount(){
    let monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    this.state = {
      id: this.props.match.params.userID
    }
    const db = firebase.database().ref();
    const userAchievementDB = db.child('user_achievements/'+this.state.id).orderByChild('year');
    let userState = this;
    userAchievementDB.once('value',function(snapshot){
      let achievements = [];
      snapshot.forEach((childSnapshot) =>{
        let child = childSnapshot.val();
        let achievement = {
          month: monthNames[parseInt(child.month,10)],
          category: child.category,
          year: child.year,
          score: child.score,
          desc: child.desc,
          isTeam: child.teamEvent
        };
        achievements.push(achievement);
      });
      achievements.reverse();
      userState.setState({
        achievements:achievements
      });

    });
    const userDB = db.child('users/'+this.state.id);
    userDB.once('value',function(snapshot){
      userState.setState({
        userDet: snapshot.val()
      })
    });
  }
  render(){
    var userDetail;
    let achievements = [];
    var allAchievements;
    let userExists = 1;
    if(this.state.userDet !==undefined && this.state.userDet !== null){
      userDetail =  <UserDetails
                      photo={this.state.userDet.photo}
                      name={this.state.userDet.name}
                      score={this.state.userDet.total_score}
                      course={this.state.userDet.class}
                    />
    }
    else {
      userExists=0;
    }
    if(this.state.achievements !== undefined && this.state.achievements !== null){
      achievements = this.state.achievements;
      allAchievements = achievements
                        .map((achievement,i)=>
                          <AchievementCard
                            key={i}
                            category={achievement.category}
                            month={achievement.month}
                            year={achievement.year}
                            desc={achievement.desc}
                            score={achievement.score}
                          />
                        );
    }
    else {
      userExists=0;
    }
    if(userExists){
    return(
      <div>
        <div className="a-bg"></div>
        <div className="achievements-container">
          <Header />
          <div className="no-mgn row no-pad ">
            <div className="col-md-3">
              {userDetail}
            </div>
            <div className="col-md-9 achievement-column">
              {allAchievements}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );}
    else{
      return(
        <div>
          <div className="a-bg"></div>
          <div className="achievements-container">
            <Header />
            <div className="no-mgn row no-pad text-justified">
              <h3 className="text-center">Hey user! Your achievements are nowhere to be found.<br />
              Seems like you still need to bag some achievements.
              </h3>
              <h5 className="text-center">If you have any achievement and it's not
              showing here then kindly contact the admin at <a href="tss.gndu@gmail.com">tss.gndu@gmail.com</a></h5>
            </div>
            <Footer />
          </div>
        </div>
      );
    }
  }
}
