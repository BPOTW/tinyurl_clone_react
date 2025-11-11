import { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const Redirection = () => {
  const { id } = useParams();

  useEffect(() => {
    const getLinkData = async () => {
      try {
        const res = await axios.get(`https://database-production-f40d.up.railway.app/${id}`);
        console.log(res.data)
        const redirectUrl = await res.data.originalLink;
        console.log(redirectUrl);

        window.open(`${redirectUrl}`, "_self");
      } catch (err) {
        console.error("Error fetching:", err);
        // navigate("/error");
      }
    };

    getLinkData();
  }, [id]);

  return <p>Redirecting to target URL</p>;
};

export default Redirection;
