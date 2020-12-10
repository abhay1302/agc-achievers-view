import React from 'react';
import './achievements.css'
import Header from './../sections/header/header.js'
import Footer from './../sections/footer/footer.js'
import TimePeriod from './../sections/timeperiod/timeperiod.js'
import Leaders from './../sections/leaders/leaders.js'
import * as firebase from 'firebase';

class Achievements extends React.Component {


  constructor(){
    super();
    this.state={
      items:[]
    };
  }

  componentWillMount(){
    const db = firebase.database().ref();
    // const todayDate = new Date();
    //  var thisYear = todayDate.getFullYear();
    //  var year = thisYear+'_';
    const dbRef = db.child('achievements');
    //.orderByKey().startAt(year)
    var timePeriodComponent = this;
    var data = [];
    dbRef.once('value',function(snapshot){
      snapshot.forEach((childSnapshot)=>{
        var yearMonth  = childSnapshot.key.split('_');
        var timePeriod =  {
                    period:childSnapshot.key,
                    year: yearMonth[0],
                    month: yearMonth[1]
                  };
        data.push(timePeriod);
      });
      data.reverse();
      timePeriodComponent.setState({
        items:data
      });
    });
  }

// following segment will be rendered on page
  render() {
    let timeline = [];
    if(this.state.items !== undefined){
      if(this.state.items.length>0){
        let timelineItems = this.state.items;
        timeline = timelineItems.map((period,i)=>
          <TimePeriod key={i} year= {period.year} month={period.month} period={period.period} />
        );
      }
    }
    return (
      // this is the segment to be loaded
      <div>
      <div className="a-bg"></div>
      <div className="achievements-container">
        <Header />
        <div className="container ">
          <div className="col-md-2 leaders text-center">
            <h2>Top Achievers (2016-2017)</h2>
              <Leaders />
          </div>
          <div className="col-md-10 achievements text-justify">
            <h2>Timeline</h2>
            {timeline}
          </div>
        </div>

        <Footer />
      </div>
      </div>
    );
  }
}

export default Achievements;
