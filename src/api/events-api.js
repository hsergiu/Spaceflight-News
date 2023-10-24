import axios from "axios";
import {HOST} from "./hosts";

const endpoint = {
  events: HOST.main_api + '/articles',
  event: HOST.main_api + '/articles/'
};

const fetchMoreEvents = (start, pageCount, search) => {
  const searchParam = search ? ('&search=' + search) : '';
  return axios
      .get(endpoint.events + '?limit=' + pageCount + '&offset=' + start + searchParam)
      .then((response) => {
        return response.data.results;
      })
      .catch((err) => {
        throw Error('Could not fetch events list' + ` (status:${err.response.status})`)
      });
}
const fetchEvent = id => {
  return axios
      .get(endpoint.event + id)
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