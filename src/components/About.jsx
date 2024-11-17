import React from "react";
import Card from "./Card";
import img1 from "../assets/img/avatar-ali.png";
import img2 from "../assets/img/avatar-anisha.png";
import img3 from "../assets/img/avatar-richard.png";

const About = () => {
  return (
    <section className="container px-2 mx-auto mt-20 text-center">
      <h3 className="text-3xl font-bold md:text-4xl">
        What's Different About Manage?
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card
          img={img1}
          p={
            "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
          }
          name={"Anisha Li"}
        />
        <Card
          img={img2}
          p={
            "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
          }
          name={"Ali Bravo"}
        />
        <Card
          img={img3}
          p={
            "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
          }
          name={"Richard Watts"}
        />
      </div>

      <button className="p-4 px-8 mt-20 btn">Get Started</button>
    </section>
  );
};

export default About;
