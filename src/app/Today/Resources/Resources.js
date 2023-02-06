import React from "react";
import SingleResource from "./components/SingleResource";

function Resources() {
  const resources = [
    {
      title: "How to make your job profile standout",
      content: (
        <p>
          Maximizing your Profile as a Handy Person on Handys
          <br />
          Highlight your skills and experience: List your relevant skills and
          expertise on your Handys profile. This will help customers see that
          you are qualified for the jobs they need to be done. Include
          information about your past work experience, certifications, and any
          special skills you have.
          <br />
          Use a professional profile photo: A good profile photo is the first
          thing customers will see when they visit your profile. Make sure to
          use a clear, high-quality image of yourself, and avoid using amateur
          or casual photos.
          <br />
          Create a detailed and compelling bio: Your bio is an opportunity to
          tell customers more about yourself and why you're the best person for
          the job. Use it to highlight your experience, skills, and why you're
          passionate about your work.
          <br />
          Show off your work: Include photos and videos of your past work to
          give customers an idea of the quality of your work. If you have any
          customer reviews, be sure to include them as well.
          <br />
          Be responsive: Make sure to respond to customer messages and bookings
          promptly. This will help build customer trust and increase your
          chances of getting booked.
        </p>
      ),
    },
    { title: "How to set your pricing strategy" },
    { title: "The best way to set your booking and calendar settings" },
  ];

  return (
    <div className="mb-32">
      <h4 className="text-lg font-semibold mb-5"> Resources and Tips</h4>

      {/* Resources and Tips */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {resources.map((resource, index) => {
          return <SingleResource key={index} resource={resource} />;
        })}
      </div>
    </div>
  );
}

export default Resources;
