import cleaner from "./assets/cleaner.png";
import workman from "./assets/workman.png";
import client from "./assets/client.png";

export const articles = [
  {
    id: 1,
    title: "How to make your job profile standout",
    image: cleaner,
    content: (
      <div>
        <h4 className="mb-2">
          Maximizing your Profile as a Handy Person on Handys
        </h4>
        <br />
        <ul>
          <li>
            {" "}
            <span className="font-bold">
              Highlight your skills and experience:
            </span>{" "}
            List your relevant skills and expertise on your Handys profile. This
            will help customers see that you are qualified for the jobs they
            need to be done. Include information about your past work
            experience, certifications, and any special skills you have.
          </li>
          <li>
            {" "}
            <span className="font-bold">
              Use a professional profile photo:{" "}
            </span>{" "}
            A good profile photo is the first thing customers will see when they
            visit your profile. Make sure to use a clear, high-quality image of
            yourself, and avoid using amateur or casual photos.
          </li>
          <li>
            {" "}
            <span className="font-bold">
              Create a detailed and compelling bio:
            </span>{" "}
            Your bio is an opportunity to tell customers more about yourself and
            why you're the best person for the job. Use it to highlight your
            experience, skills, and why you're passionate about your work.
          </li>
          <li>
            {" "}
            <span className="font-bold">Show off your work:</span> Include
            photos and videos of your past work to give customers an idea of the
            quality of your work. If you have any customer reviews, be sure to
            include them as well.
          </li>
          <li>
            {" "}
            <span className="font-bold"> Be responsive:</span> Make sure to
            respond to customer messages and bookings promptly. This will help
            build customer trust and increase your chances of getting booked.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    title: "How to set your pricing strategy",
    image: workman,
    content: (
      <div>
        <h4 className="mb-2">
          Setting a Competitive Pricing Strategy for Handy Persons on Handys
        </h4>
        <br />
        <ul>
          <li>
            {" "}
            <span className="font-bold">Research the market:</span> Research the
            rates of other handypersons in your area to get an idea of the going
            rate for different jobs. This will help you set a competitive price
            that will attract customers without pricing yourself out of the
            market.
          </li>
          <li>
            {" "}
            <span className="font-bold">Consider your costs:</span> Consider
            your costs, such as materials and transportation, when setting your
            prices. Make sure your prices are high enough to cover your expenses
            and leave you with a profit.
          </li>
          <li>
            {" "}
            <span className="font-bold">
              Factor in your experience and skills:
            </span>{" "}
            You can charge more for your services if you have more knowledge or
            special skills. Be sure to highlight your experience and skills in
            your profile, so customers are aware of the value they're getting.
          </li>
          <li>
            {" "}
            <span className="font-bold">
              Continuously review and update:
            </span>{" "}
            Review your pricing strategy and adjust it based on market
            conditions, costs, and competition.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    title: "Optimizing Your Booking and Calendar Settings on Handys",
    image: client,
    content: (
      <div>
        <h4 className="mb-2">
          Optimizing Your Booking and Calendar Settings on Handys
        </h4>
        <br />
        <ul>
          <li>
            {" "}
            <span className="font-bold">Set your availability:</span> Set your
            availability on your Handys calendar so customers can see when
            you're available for bookings. Keep your calendar up-to-date so
            customers can see your current availability.
          </li>
          <li>
            {" "}
            <span className="font-bold">
              Enable automatic booking confirmations:
            </span>{" "}
            Enabling automatic booking confirmations will ensure that both you
            and the customer receive a confirmation of the booking, reducing the
            chance of any confusion or missed appointments.
          </li>
          <li>
            {" "}
            <span className="font-bold">Set a cancellation policy:</span> Set a
            clear policy to minimize last-minute cancellations and no-shows.
            Make sure your policy is fair for you and the customer, and include
            any fees or penalties for cancellations.
          </li>
          <li>
            {" "}
            <span className="font-bold">
              Use the Handys messaging system:
            </span>{" "}
            Use the Handys messaging system to communicate with customers
            before, during, and after the job. This will help you coordinate
            with them and ensure everything is clear and straightforward.
          </li>
          <li>
            {" "}
            <span className="font-bold">Set up booking reminders:</span> Set up
            reminders for bookings to ensure you don't miss any appointments.
          </li>
        </ul>
      </div>
    ),
  },
];
