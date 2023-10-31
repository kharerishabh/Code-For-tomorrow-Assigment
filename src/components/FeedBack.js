import React from "react";
import { USER_LOGO } from "../utilise/constants";
const FeedBack = () => {
  return (
    <div>
      <div>
        <img alt="user_img" src={USER_LOGO} />
        <h2>Hi Reader</h2>
        <p>Here's your News</p>
        <div>
          <h1>Have a Feeback?</h1>
          <button>We're Listening</button>
        </div>
      </div>
      <div>
        <form>
          <p>Thank you so much for taking the time!</p>
          <p>Please provide the below details!</p>
          <label>First Name:</label>
          <input type="text" name="First Name:" />
          <label>Last Name:</label>
          <input type="text" name="Last Name:" />
          <label>Address:</label>
          <input type="text" name="Address:" />
          <label>Country:</label>
          <input type="text" name="Country:" />
          <label>Email ID:</label>
          <input type="email" name="Email ID:" />
          <label>Phone Number:</label>
          <input type="number" name="Phone Number:" />
          <div>
            <button>Submit Feedback</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedBack;
