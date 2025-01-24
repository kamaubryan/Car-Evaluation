import axios from "axios";


const token = "your_bearer_token_here";

axios
  .get("https:/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then((response) => {
    console.log("Response:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
