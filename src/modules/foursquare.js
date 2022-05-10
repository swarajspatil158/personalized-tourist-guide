import axios from "axios";
import debounce from "debounce-promise";

export default class FoursquareVenues {
  constructor() {
    this.BASE_URL = "https://api.foursquare.com/v3/places/search";
    this.CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    this.CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
    this.AUTHORIZATION = process.env.REACT_APP_AUTHORIZATION;
    this.defaultRange = 250;
    this.limit = 50;
    // this.userLocation = "18.9102,73.3283";
    this.userLocation = "18.9157,73.3432";
  }
  // window.sessionStorage
  //   ? window.sessionStorage.getItem("userLocation")
  //   : null;
  getUserLocation() {
    return new Promise((resolve, reject) => {
      if (this.userLocation) {
        resolve(this.userLocation);
      }
      const onGeoSuccess = (location) => {
        this.userLocation = `18.9102,73.3283`;
        window.sessionStorage.setItem("userLocation", this.userLocation);
        resolve(this.userLocation);
      };
      const onGeoError = (error) => {
        reject(error);
      };
      navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
    });
  }

  getVenues(radius, query) {
    return new Promise((resolve, reject) => {
      this.getUserLocation().then(() => {
        radius = parseInt(radius, 10) || this.defaultRange;
        debounce(
          axios
            .request({
              method: "GET",
              url: this.BASE_URL,
              params: {
                query: query,
                ll: this.userLocation,
                radius: radius,
                limit: this.limit,
              },
              headers: {
                Accept: "application/json",
                Authorization: this.AUTHORIZATION,
              },
            })
            .then((response) => {
              console.log(response.data);
              resolve(response.data);
            })
            .catch((error) => {
              reject(error.message);
            }),
          300
        );
      });
    });
  }

  _apiVersion() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return String(10000 * year + 100 * month + day);
  }
}
