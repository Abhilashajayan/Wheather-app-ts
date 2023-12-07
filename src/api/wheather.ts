const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
    params: {
      q: "",
      days: "3",
    },
    headers: {
      "X-RapidAPI-Key": "3d70a687eemsh4b430604a76a40dp17650ejsn187d8b18af99",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
  
  export default options;
  