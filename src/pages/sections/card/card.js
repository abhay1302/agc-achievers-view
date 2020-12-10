import React from 'react';
import './card.css';
import {Link} from 'react-router-dom';

export default class Card extends React.Component {
  componentWillMount(){
    let descLen = this.props.desc.length;
    if(this.props.type){ //is a team event
      let name = this.props.achiever[0].name;
      let fname = name.substr(0,name.indexOf(" "));
      this.state={
        name: fname +" +"+(parseInt(this.props.size,10)-1).toString(),
        to:"/user/"+this.props.achiever[0].rollNo,
        styleClass:" col-md-12 bdr ".concat(this.props.category)
      }
    }
    else{
      //is an individual event
      let full = this.props.achiever;
      let fname = full.substr(0,full.indexOf(" "));
      this.state={
        name:fname,
        to:"/user/"+this.props.rollno,
        styleClass:" col-md-12 bdr ".concat(this.props.category)
      }
    }
    //shorten length of description max 100 chars
    if(descLen>100){
      this.setState({
        desc:this.props.desc.substr(0,97)+"..."
      })
    }
    else {
      this.setState({
        desc:this.props.desc
      })
    }
  }
  render (){
    return(
      <div className="achievement-item col-md-4 col-xs-12 col-sm-8 col-lg-4">
        <div className={this.state.styleClass}>
          <span className="coin">{this.props.score}</span>
          <div className="col-md-12 col-xs-12 img-bg center-block">
            <img width="120" height="120" className="img-responsive img-circle card-img" src={this.props.pic} alt={this.props.achiever} />
          </div>
          <div className="col-md-12 col-xs-12 text-center detail">
            <h1> <Link to={this.state.to}>{this.state.name}</Link>
              <span onClick={this.showMembers.bind(this)} >{(this.props.type)?" more":""}</span>
            </h1>
              <p> {this.state.desc}</p>
          </div>
        </div>
        <div id="myModal" className="teamModal">
          <div className="team-modal-content">
            <div className="team-modal-header">
              <span onClick={this.hideMembers.bind(this)} className="team-close">&times;</span>
              <h3>Team Members</h3>
            </div>
            <div id="teamDIV" className="team-modal-body">

            </div>

          </div>

        </div>
      </div>
    );
  }
  showMembers(){
    console.log(this.props.achiever);
    const team = this.props.achiever;
    var del= "<ul>" ;
    team.forEach((el)=>{
      let refTo = "/user/"+el.rollNo;
      del+= "<li> <a href=\""+refTo+"\">" +el.name+"</a></li>";
    });
    del+="</ul>";
    document.getElementById('teamDIV').innerHTML = del;
    document.getElementById('myModal').style.display = "block";
    // <Members team={this.props.achiever} />
  }
  hideMembers(){
    document.getElementById('myModal').style.display = "none";
  }
}
