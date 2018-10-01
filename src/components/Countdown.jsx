import React from 'react';
import CountdownItem from './CountdownItem'

export default class Countdown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...this.diffDates(new Date(), this.props.to)
        }
    }

    /* 
     * Returns an object with the number of days, hours, minutes, and seconds between the two days
     * @param {Date} date1 - First date used to find difference between
     * @param {Date} date2 - Second date used to find difference between
     */
    diffDates = (date1, date2) => {
        // Get total seconds between the times
        let delta = Math.abs(date1 - date2) / 1000;
        const days = Math.floor(delta / 86400);
        delta -= days * 86400;
        const hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;
        const minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;
        const seconds = Math.floor(delta % 60);
        return {
            days,
            hours,
            minutes,
            seconds
        }
    }

    updateCountdown = () => {
        this.setState({
            ...this.diffDates(new Date(), this.props.to)
        });
    }

    componentDidMount() {
        this.countdownInt = setInterval(() => this.updateCountdown(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.countdownInt);
    }

    render() {
        return (
            <div className="countdown-container">
                <CountdownItem value={this.state.days} unit={this.state.days === 1 ? 'Day' : 'Days'}></CountdownItem>
                <CountdownItem value={this.state.hours} unit={this.state.hours === 1 ? 'Hour' : 'Hours'}></CountdownItem>
                <CountdownItem value={this.state.minutes} unit={this.state.minutes === 1 ? 'Minute' : 'Minutes'}></CountdownItem>
                <CountdownItem value={this.state.seconds} unit={this.state.seconds === 1 ? 'Second' : 'Seconds'}></CountdownItem>
            </div >
        )
    }
}