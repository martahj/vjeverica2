// @flow
import moment from 'moment';

/*
 * Same daY;
 * 3:30pm - 5:00pm May 5, 2017
 *
 * Different days:
 * 9:00am May 4 - 4:24pm May 6 2018
 *
 * Differnt years:
 * 4:00pm Dec 23, 2015 - 6:00pm Jan 3, 2016
 */
const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

type DateObject = {
  year: number,
  day: number,
  date: number,
  month: number,
  minutes: number,
  hours: number,
};

const getDateObj = (date: Date): DateObject => ({
  year: date.getFullYear(),
  day: date.getDay(), // sunday = 0
  date: date.getDate(),
  month: date.getMonth(), // 0-11
  minutes: date.getMinutes(), // 0-60
  hours: date.getHours(), // 0-23
});

const formatDateRange = (start: ?Date, end: ?Date) => {
  if (!start || !end) return;
  const startInfo = {

  };
  // check if differnt years
};

export default formatDateRange;
