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

	onSearchSubmit (searchTerm) {
		console.log('search', searchTerm);
		let name = searchTerm.trim().split(" ").join("+"); 
			this.props.dispatch(actions.getMemberDisplay(name))
			.then(() => this.props.dispatch(actions.getBarData(this.props.member[0].party)))
			.then(() => hashHistory.push('/member'))
			// .then(() => this.props.dispatch(actions.getLineData(this.props.member[0].bioguideId, this.props.member[0].party)))

		// if (this.props.member.length > 0) {
			// hashHistory.push('/member'); 
		// }
	}


	routeToAbout () {
		hashHistory.push('/about');
	}

	render () {
		return (
			<div className="landing-page">
				<img className="logo" src="assets/kapitol.png" />
				<SearchForm onSubmit={this.onSearchSubmit.bind(this)}/>
				<img onClick={this.routeToAbout.bind(this)}className="scroll-btn" src="assets/scroll-btn.png"/>
			</div>
		)
	}
}
//
const mapStateToProps = (state) => ({
	member: state.member
})

export default connect(mapStateToProps)(PageContainer);
//<button onClick={this.getApiData.bind(this)}>Get data</button>

//(this.props.member.length > 0 && this.props.barData.length > 0 && this.props.lineGraph.length > 0)