import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization:
      "bearer " +
      "5b9c179e76c91b752475d44730630d8e7c57be4646910a578426d6bdec41601a762657dbdd2b67e6202e73e29f5b0d5d940c6b5bf57a46774e46e968bf28a2fcad8fc38cf088673f8cec8942fc282a2f73c4379cc8ed509bbd7d17c3de3c255e8075a578714227d34e8868cb22534f101339dd0e89a6dfcbc271918cbc0630cd",
  },
});
