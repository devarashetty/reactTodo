import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import moment from 'moment'; 
//import App from './App';
/*
var CheckLink = React.createClass({
  render: function() {
    // This takes any props passed to CheckLink and copies them to <a>
    return <a {...this.props}>{'√ '}{this.props.children}</a>;
  }
});
*/

var globalList=[];
/*
var ListBox=React.createClass({
  getInitialState: function() {
    return {nameWithQualifier: listToDo};
  },
  insertFun:function(e){
  	this.setState({nameWithQualifier: listToDo})
  }
  render:function(){
  	console.log("------------------------------------",listToDo);
  	console.log("!!!!!!!!!!!!!!!!1",this.state.nameWithQualifier);
  	return  <p>text</p>  
  }
})
*/
console.log("!!!!!!!!!!!!!!!!!!!!!!11",moment());
console.log(moment(12323123213).toDate());

var InputBox=React.createClass({
  getInitialState: function() {
    return {nameWithQualifier: globalList};
  },
  /*
  insertFun:function(e){
  	if(e.keyCode == 13){
      listToDo.push(e.target.value); 
      document.getElementById('usr').value ='';
    }
    this.setState({nameWithQualifier: listToDo})
  },
  insertTimeFun:function(e){
    console.log(e);
    var date=e;
    console.log(moment().toDate());
    console.log(moment(parseInt(e)));
    console.log("::::::::::::::::::::::::::::::::",moment(1459481100000).toDate());
    console.log(moment(e).toDate());
  },
  */
  insertfun:function(e){
    var insertText = document.getElementById('usr').value;
    var insertTime = document.getElementById('dateTimepicker').value;
    console.log("Meghalulekunnanaaaaaaaaaaaaaaaaaaaaaa",insertText);
    console.log(typeof(insertText));
    document.getElementById('usr').value ='';
    document.getElementById('dateTimepicker').value='';
    var object={};
    object['insertText'] = insertText;
    object['insertTime'] = insertTime;
    globalList.push(object);
    this.setState({nameWithQualifier: globalList})
  },
  activeData:function(){

  },
  render:function(){
  	var DateTimeField = require('react-bootstrap-datetimepicker');
  	var cards = this.state.nameWithQualifier.map(function (card) {
  		console.log("[[[[[[[[[[[[[[[[[[[[[[[[[[[",card);
        return (
         <div> 
        	
          <ul id="myTabs" className="nav nav-tabs" role="tablist">
            <li role="presentation" className="">
              <a href="#home" id="active" role="tab"  data-toggle="tab" aria-controls="home" aria-expanded="false">Active</a>
            </li>
            <li role="presentation" className="">
              <a href="#home" id="inactive" role="tab"  data-toggle="tab" aria-controls="home" aria-expanded="false">Inactive</a>
            </li>
            <li role="presentation" className="">
              <a href="#home" id="cancelled" role="tab"  data-toggle="tab" aria-controls="home" aria-expanded="false">Cancelled</a>
            </li>
          </ul> 
            
          <div className="panel panel-primary ">
            <div className="panel-body" >
             
              <label className="col-md-9 checkbox-inline">
                <input type="checkbox" value="" />
                  {card.insertText}
              </label>
              <div className="col-md-3"> DeadLine :  {card.insertTime}</div>           
            </div>
           </div>

        </div>
        );
    });
  	return  <div className="container">
            	<div className="form-group">
            	    <div> 
            	        <input type="text"  className="form-control" id="usr" placeholder="what you want to do ??" />
  	                    <DateTimeField inputProps={{id:"dateTimepicker", placeholder:"Please select a deadLine"}} defaultText=""  /> 
                        <button type="button" id="submitButton" className="btn btn-primary" onClick={this.insertfun}>Submit</button> 
                        <br/>
                       
                    </div>
                      
                </div>    
               {cards} 
            </div>  
  }
})

var Output = React.createClass({
	render:function(){
		return (
			      <div>
		            <InputBox />
		          </div>
		        )

    }
})

ReactDOM.render(<Output />, document.getElementById('root'));
//
