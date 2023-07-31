import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../baseURL";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { frontendURL } from "../baseURL";

const ManagePolls = () => {
  const [polls, setPolls] = useState({});
  const token = JSON.parse(localStorage.getItem("user")).token;

  const apiCall = async () => {
    const { data } = await axios.get(`${baseURL}/users/polls`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setPolls(data);
  };
  useEffect(() => {
    apiCall();
  }, []);

  console.log(polls);
  if (localStorage.getItem("user")) {
    return (
      <div className="md:m-12">
        <ul role="list" className="divide-y divide-gray-100">
          {polls?.poll?.length < 1 ? <h1>No polls created yet</h1> : ""}
          {polls.poll?.map((poll) => {
            console.log(poll);
            return (
              <li key={poll?._id} className="flex justify-between gap-x-6 py-5">
                <div className="flex gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-xl font-semibold leading-6 text-gray-900">
                      {poll?.question}
                    </p>
                    <Link
                      to={`/poll-result/?id=${poll.pollid}`}
                      className="text-sky-800 no-underline"
                    >
                      View Poll Result
                    </Link>
                  </div>
                </div>

                <div className="pr-5">
                  <Link to={`/poll-admin/?id=${poll.pollid}`}>
                    <i class="fa-solid fa-right-long fa-shake fa-2xl"></i>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <div>{window.location.replace(frontendURL)};</div>;
  }
};

export default ManagePolls;
