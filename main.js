import "./style.css";

import { getWeather } from "./weather";
console.log(getWeather);
getWeather(10, 10, Intl.DateTimeFormat().resolvedOptions.timeZone).then(
  (res) => {
    if (res.data) {
      console.log(res.data);
    } else if (res.error) {
      console.error("Error getting weather:", res.error);
    }
  }
);
