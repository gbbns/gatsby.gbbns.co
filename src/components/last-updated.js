import React from 'react'

class LastUpdated extends React.Component {
	render() {
		const { dateTime, lastUpdated } = this.props

		return (
			<footer>
				<p>
					<small>Page last updated: <time datetime={dateTime}>{lastUpdated}</time></small>
				</p>
			</footer>
		)
	}
}

export default LastUpdated
