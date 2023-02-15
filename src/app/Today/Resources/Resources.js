import React from "react";
import SingleResource from "./components/SingleResource";

import { articles } from "../../../content/articles/articles";

function Resources() {
  return (
    <div className="hidden md:block mb-32">
      <h4 className="text-lg font-semibold mb-5"> Resources and Tips</h4>

      {/* Resources and Tips */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {articles.map((resource, index) => {
          return <SingleResource key={index} resource={resource} />;
        })}
      </div>
    </div>
  );
}

export default Resources;
