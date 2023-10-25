import axios from "axios";
import {HOST} from "./hosts";

const DEFAULT_TIMEOUT = 10000 // ms

const endpoint = {
  events: HOST.main_api + '/articles',
  event: HOST.main_api + '/articles/'
}

const fetchMoreEvents = (start, pageCount, search) => {
  const searchParam = search ? ('&search=' + search) : '';
  return axios
      .get(endpoint.events + '?limit=' + pageCount + '&offset=' + start + searchParam, { timeout: DEFAULT_TIMEOUT })
      .then((response) => {
        return response.data.results;
      })
      .catch((err) => {
        throw Error('Could not fetch events list' + ` (status:${err.response.status})`)
      });
}

const fetchEvent = id => {
  return axios
      .get(endpoint.event + id, { timeout: DEFAULT_TIMEOUT })
      .then((response) => {
        return response.data;
      })
      .catch((err) =>{
        throw Error('Could not fetch event details' + ` (status:${err.response.status})`)
      });
}

export {
  fetchEvent,
  fetchMoreEvents
}