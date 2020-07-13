import axios from "axios";


const baseURL = "https://reqres.in/api/";

/* Basic Axios Request*/

export const doGet = ( url) =>
  new Promise((resolve, reject) =>
    axios({
      url:  url,
      method: "GET",
      headers: {
       // Authorization: "Bearer " + token
      }
    })
      .then(result => resolve(result))
      .catch(error => resolve(error))
  );

  

  export const doPost = (data, url) =>
  new Promise(resolve =>
    axios({
      url: baseURL + url,
      method: "POST",
      //timeout: 1000 * 8,
      headers: {
        "Content-Type": "application/json"
        //'Authorization': "Bearer " + token
      },
      data
    })
      .then(result => resolve(result))
      .catch(error => resolve(error))
  );

export const doPostWithToken = (token, data, url) =>
  new Promise(resolve =>
    axios({
      url: baseURL + url,
      method: "POST",
      //timeout: 1000 * 8,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      },
      data
    })
      .then(result => resolve(result))
      .catch(error => resolve(error))
  );
export const doPostWithoutBody = (token, url) =>
  new Promise(resolve =>
    axios({
      url: baseURL + url,
      method: "POST",
      //timeout: 1000 * 8,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }
    })
      .then(result => resolve(result))
      .catch(error => resolve(error))
  );

export const doDelete = (token, url) =>
  new Promise(resolve =>
    axios({
      url: baseURL + url,
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token
      }
    })
      .then(result => resolve(result))
      .catch(error => resolve(error))
  );

  

