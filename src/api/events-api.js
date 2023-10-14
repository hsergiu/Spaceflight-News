import axios from "axios";
import {HOST} from "./hosts";

const endpoint = {
  events: HOST.main_api + '/articles',
  event: HOST.main_api + '/articles/'
};

const fetchEvents = count => {
  return axios
      .get(endpoint.events + '?limit=' + count)
      .then((response) => {
        return response.data.results;
      });
}

const fetchMoreEvents = (start, count) => {
  return axios
      .get(endpoint.events + '?limit=' + count + '&offset=' + start)
      .then((response) => {
        return response.data.results;
      });
}
const fetchEvent = id => {
  return axios
      .get(endpoint.event + id)
      .then((response) => {
        return response.data;
      });
}

export {
  fetchEvents,
  fetchEvent,
  fetchMoreEvents
}