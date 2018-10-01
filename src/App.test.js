import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import Countdown from './components/Countdown';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('calculates a diff between two dates (larger-smaller)', () => {
  const wrapper = shallow(<Countdown />);
  expect(wrapper.instance().diffDates(new Date("2017-01-01"), new Date("2018-01-01"))).toEqual({
    days: 365,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
})

it('calculates a diff between two dates (smaller-larger)', () => {
  const wrapper = shallow(<Countdown />);
  expect(wrapper.instance().diffDates(new Date("2018-01-01"), new Date("2017-01-01"))).toEqual({
    days: 365,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
})

it('calculates a diff between two date-time objects properly containing a time value', () => {
  const wrapper = shallow(<Countdown />);
  expect(wrapper.instance().diffDates(new Date("2018-01-01 03:55:10"), new Date("2017-02-03 02:50:09"))).toEqual({
    days: 332,
    hours: 1,
    minutes: 5,
    seconds: 1
  })
})