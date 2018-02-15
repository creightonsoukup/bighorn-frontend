import axios from 'axios';

export const SUBSCRIBE = 'subscribe';

export function addSubscription(firstName, lastName, email) {
  const url = 'http://www.bighorncrossing.com/database/signups';
  const request = axios.post(url, {
    firstName: firstName,
    lastName: lastName,
    email: email 
  });

  return {
    type: SUBSCRIBE,
    payload: request
  }
}
