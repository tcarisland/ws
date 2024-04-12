'use client';

import React, { useEffect, useState } from "react";
import {RequestRedirect} from "undici-types";

const BoredApi = () => {
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestOptions = {
          method: "GET",
          redirect: "follow"
        };
        const response = await fetch("https://www.boredapi.com/api/activity");
        const result = await response.json();
        console.log(result);
        setActivity(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
      <div>
        {activity ? (
            <div>
              <p>
                { activity["activity"] }
              </p>
              <p>
                { activity["type"] }
              </p>
            </div>
        ) : (
            <p>Loading...</p>
        )}
      </div>
  );
};

export default BoredApi;
