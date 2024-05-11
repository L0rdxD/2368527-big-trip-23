import dayjs from 'dayjs';
import { mockOffers } from './mock/points';

const DATE_FORMAT = 'D MMMM';
const TIME_FORMAT = 'HH:mm';
const DATE_TIME_FORMAT = 'DD/MM/YY HH:mm';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomInt(maxInt) {
  return Math.floor(Math.random() * maxInt);
}

function humanizeTaskDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
}

function getTimeFromDate(date) {
  return date ? dayjs(date).format(TIME_FORMAT) : '';
}

function getDateTime(date) {
  return date ? dayjs(date).format(DATE_TIME_FORMAT) : '';
}

function dateDiff(dateFrom, dateTo) {
  const date1 = dayjs(dateFrom);
  const date2 = dayjs(dateTo);

  let minutes = date2.diff(date1, 'minute');
  let hours = Math.floor(minutes / 60);
  const days = Math.floor(minutes / (24 * 60));
  hours = hours - days * 24;
  minutes = minutes - hours * 60;

  const daysStr = days !== 0 ? `${days}D` : '';
  const hoursStr = hours !== 0 ? `${hours}H` : '';

  return `${daysStr + hoursStr + minutes}M`;
}

function isFavoriteStyle(isFavorite) {
  return isFavorite === true ? '--active' : '';
}

function getOffersTypeLength(type) {
  return mockOffers.find((offer) => offer.type === type).offers.length;
}

export {
  getRandomArrayElement,
  getRandomInt,
  humanizeTaskDueDate,
  getTimeFromDate,
  dateDiff,
  isFavoriteStyle,
  getDateTime,
  getOffersTypeLength,
};
