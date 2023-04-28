import axios from "axios";

const searchImages = async (value) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID IV4uIp_PhJi8r2_MT_Hnhw-dVdFMSByfKGFZ0BCIsAI",
      },
      params: {
        query: value,
      },
    });
    return response.data.results;
  };

  export default searchImages;