"use client";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

export default function WriteReview() {
  return (
    <div className="space-y-16">
      <div className="space-y-5">
        <div className="text-3xl font-medium">
          How would you rate your experience ?
        </div>

        <select className="select select-bordered text-xl">
          <option disabled selected>
            Select one
          </option>
          <option>Useless- 0.5</option>
          <option>Useless 1.5</option>
          <option>Poor- 2</option>
          <option>Poor 2.5</option>
          <option>Ok 3</option>
          <option>Ok+ 3.5</option>
          <option>Good 4</option>
          <option>Excellent 4.5</option>
          <option>Excellent 5</option>
        </select>
      </div>

      <div className="space-y-5">
        <p className="text-3xl font-medium"> When did you go?</p>
        <select className="select select-bordered text-xl">
          <option disabled selected>
            Select one
          </option>
          <option>January 2023</option>
          <option>Feburary 2023</option>
          <option>March 2023</option>
          <option>April 2023</option>
          <option>May 2023</option>
          <option>June 2023</option>
          <option>July 2023</option>
          <option>August 2023</option>
          <option>September 2023</option>
          <option>October 2023</option>
          <option>November 2023</option>
          <option>December 2023</option>
        </select>
      </div>

      <div className="space-y-5">
        <p className="text-3xl font-medium"> Write your review</p>

        <textarea
          placeholder="This is a great spot for a date ..."
          className="textarea-lg w-full max-w-xl textarea"
          data-tip="hello"
        ></textarea>
      </div>

      <div className="space-y-5">
        <p className="text-3xl font-medium"> Title your review</p>

        <input
          type="text"
          placeholder="Give us the gist of your review"
          className="input input-bordered w-full max-w-xl  border-gray-300 border-5 lg:tooltip"
          data-tip="hello"
        />
      </div>

      <div>
        <p className="text-3xl font-medium">Add some Photos</p>
        <div className="text-gray-400  mb-5">Optional</div>
        <input
          type="file"
          multiple
          className="file-input file-input-bordered file-input-success w-full max-w-xs"
        />
      </div>

      <button className="btn btn-active btn-success">SUBMIT</button>
    </div>
  );
}
