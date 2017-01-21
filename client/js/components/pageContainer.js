import React from 'react';
import SearchForm from './searchForm';
import Mission from './mission';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';


class PageContainer extends React.Component {
	constructor (props) {
		super(props);
	}

	getApiData () {
		this.props.dispatch(actions.getApiData());
	}

	routeToAbout () {
		hashHistory.push('/about');
	}

	render () {
		return (
			<div className="landing-page">
				<img className="logo" src="assets/kapitol.png" />
				<SearchForm />
				<img onClick={this.routeToAbout.bind(this)}className="scroll-btn" src="assets/scroll-btn.png"/>
			</div>
		)
	}
}
//
const mapStateToProps = (state) => ({
	data: [state.data]
})

export default connect(mapStateToProps)(PageContainer);
//<button onClick={this.getApiData.bind(this)}>Get data</button>
