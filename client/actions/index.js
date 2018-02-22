import axios from 'axios';

export const SUBSCRIBE = 'subscribe';
export const CONTACT_BROKER = 'contact_broker'

export function addSubscription(firstName, lastName, email) {
  const url = 'https://morning-anchorage-34966.herokuapp.com/signups'
//  const url = 'http://localhost:3000/signups'
  console.log(firstName, lastName, email)
  const request = axios({
    method: 'post',
    url: `${url}`,
    data: {
      firstName: firstName,
      lastName: lastName,
      email: email
    },
    withCredentials: true
  });

  return {
    type: SUBSCRIBE,
    payload: request
  }
}

export function contactBroker(firstName, lastName, email, phone, message) {
  const url = 'https://morning-anchorage-34966.herokuapp.com/contact_broker'
//  const url = 'http://localhost:3000/contact_broker'
  console.log(firstName, lastName, email, phone, message)
  const request = axios.post(url, {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    message: message
  });

  return {
    type: CONTACT_BROKER,
    payload: request
  }
}
