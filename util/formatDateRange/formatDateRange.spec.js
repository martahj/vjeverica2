import expect from 'expect';
import formatDateRange from './formatDateRange';

test('Exists', () => {
  expect(formatDateRange).toExist();
});

test('Is a function', () => {
  expect(formatDateRange).toBeA('function');
});

test('Correctly parses a same day range', () => {
  const startDate = new Date(2018, 3, 13, 7, 0, 0);
  const endDate = new Date(2018, 3, 13, 9, 45, 0);
  const formattedDate = formatDateRange(startDate, endDate);
  expect(formattedDate).toEqual('7:00 - 9:45am Fri Apr 13, 2018');
});

test('Correctly parses a date range spreading over a day', () => {
  const startDate = new Date(2016, 7, 2, 7, 45, 0);
  const endDate = new Date(2016, 7, 2, 15, 0, 0);
  const formattedDate = formatDateRange(startDate, endDate);
  expect(formattedDate).toEqual('7:45am - 3:00pm Tues Aug 2, 2016');
});

test('Correctly parses a range spreading over multiple days', () => {
  const startDate = new Date(2014, 11, 3, 12, 15, 0);
  const endDate = new Date(2014, 11, 5, 11, 59, 0);
  const formattedDate = formatDateRange(startDate, endDate);
  expect(formattedDate).toEqual('12:15pm Wed Dec 3 - 11:59am Fri Dec 5, 2014');
});

test('Correctly parses a range spreading out over multiple months', () => {
  const startDate = new Date(2014, 10, 30, 23, 11, 0);
  const endDate = new Date(2014, 11, 3, 6, 0, 0);
  const formattedDate = formatDateRange(startDate, endDate);
  expect(formattedDate).toEqual('11:11pm Sun Nov 30 - 6:00am Wed Dec 3, 2014');
});

test('Correctly parses a range spreading over multiple years', () => {
  const startDate = new Date(2017, 1, 5, 11, 0, 0);
  const endDate = new Date(2019, 7, 16, 1, 30, 0);
  const formattedDate = formatDateRange(startDate, endDate);
  expect(formattedDate).toEqual('11:00am Sun Feb 5, 2017 - 1:30am Fri Aug 16, 2019');
});
