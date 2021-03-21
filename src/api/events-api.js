import axios from "axios";
import {HOST} from "./hosts";

const endpoint = {
  events: HOST.main_api + '/articles',
  event: HOST.main_api + '/articles/'
};

const fetchEvents = count => {
  return axios
      .get(endpoint.events + '?_limit=' + count)
      .then((response) => {
        return response.data;
      });
}

const fetchMoreEvents = (start, count) => {
  return axios
      .get(endpoint.events + '?_limit=' + count + '&_start=' + start)
      .then((response) => {
        return response.data;
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