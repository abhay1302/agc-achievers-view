import React from 'react';
import './leaders.css';
import Topper from './topper.js';
import * as firebase from 'firebase';

export default class Leaders extends React.Component {
  constructor(){
    super();
    this.state={
      topScorers:[]
    }
  }

  componentWillMount(){
    var session="2016-2017"
    var Ref = firebase.database().ref('leaderboard/'+session).orderByValue().limitToLast(10);
    var userDoc = firebase.database();
    var topScores = [];

    const leader = this;
    Ref.once('value',function(snapshot){
      snapshot.forEach(function(childSnapshot){
        let scorer = {
          rollNo:childSnapshot.key,
          score:childSnapshot.val()
        };
        topScores.push(scorer);
      });
      topScores.reverse();
      var topScorersDet = [];
      topScores.forEach(function(scorer){
        //query to get user details
        userDoc.ref('users/'+scorer.rollNo).once('value',function(snapshot){
          let scorerDet = {
            rollNo:scorer.rollNo,
            score:scorer.score,
            name:snapshot.val().name,
            pic:snapshot.val().photo
          };
          topScorersDet.push(scorerDet);
          leader.setState((prevState, props) => ({
            topScorers: topScorersDet
          }));
        });
      });
    });
  }
  render() {
    let toppersList = [];
    var toppers;
    if(this.state.topScorers !== undefined){
      toppersList = this.state.topScorers;
      toppers = toppersList
                      .map( (topper,i) =>
                          <Topper
                          key={i}
                          imgSrc={topper.pic}
                          name={topper.name}
                          score={topper.score}
                          rollNo = {topper.rollNo}
                          />
                        );
    }

    return(
      <div className="row ldrs">
        {toppers}
      </div>
    );
  }
}
