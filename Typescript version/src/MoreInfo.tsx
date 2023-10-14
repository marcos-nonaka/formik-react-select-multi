import React from "react";

const MoreInfo = () => {
  return (
    <>
      <hr />
      <div className="more">
        <p>
          This sandbox has been created to demonstrate the use of react-select's
          multi property with Formik. The field value is formatted as an array
          of strings.
        </p>
        <p>
          The code was initially shared in this{" "}
          <a
            href="https://gist.github.com/hubgit/e394e9be07d95cd5e774989178139ae8#gistcomment-2887706"
            target="_blank"
            rel="noopener noreferrer"
          >
            gist
          </a>{" "}
          and this{" "}
          <a
            href="https://codesandbox.io/s/formik-react-select-multi-typescript-forked-8smljg?file=/src/MoreInfo.tsx:0-680"
            target="_blank"
            rel="noreferrer"
          >
            sandbox
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default MoreInfo;
