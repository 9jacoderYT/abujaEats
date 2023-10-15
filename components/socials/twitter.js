import React from "react";

export default function Twitter() {
  return (
    <>
      <a
        class="twitter-timeline"
        style={{ margin: "0 auto" }}
        data-width="500"
        data-height="600"
        data-theme="light"
        href="https://twitter.com/Abujaeats?ref_src=twsrc%5Etfw"
      >
        Tweets by Abujaeats
      </a>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>
    </>
  );
}
