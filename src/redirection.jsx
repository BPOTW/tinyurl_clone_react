import { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const Redirection = () => {
  const { id } = useParams();

  useEffect(() => {
    const getLinkData = async () => {
      try {
        const res = await axios.get(`http://database-production-f40d.up.railway.app/${id}`);
        const redirectUrl = await res.data[0].originalLink;
        console.log(redirectUrl);

        window.open(`https://${redirectUrl}`, "_self");
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
