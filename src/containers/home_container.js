import React, { Component } from "react";
import axios from "axios";

import { connect } from "react-redux";
import { artistListAll } from "../actions";
import { bindActionCreators } from "redux";

import Search from "../components/search";
import Artistlist from "../components/artistlist";

class HomeContainer extends Component {
  componentDidMount() {
    this.props.artistListAll(); 
  }

  getKeywords = event => {
    let key = event.target.value;

    console.log(key);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <Search keywords={this.getKeywords} />
        <Artistlist artists = {this.props.artists.artistList}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    artists: state.artists
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ artistListAll }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
