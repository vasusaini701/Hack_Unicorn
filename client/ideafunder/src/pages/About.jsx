import react from "react";

const About = () => {
  return (
    <>
      {/* <h1 >Revoutionizing Crowdfunding. Empowering Creators.</h1> */}
      <h1
        style={{
          color: "white",
          fontFamily: "sans-serif",
          textAlign: "center",
          fontSize: "40px",
        }}
      >
        ABOUT US
      </h1>
      <p
        className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]"
        style={{ fontSize: "26px", marginTop: "40px" }}
      >
        IdeaFundr is a revolutionary crowdfunding platform dedicated to
        empowering creators, entrepreneurs, and visionaries to turn their ideas
        into reality. With a mission to democratize funding and fuel innovation,
        we strive to provide a platform that connects passionate creators with a
        global community of backers who believe in their potential.
      </p>
      <p
        className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]"
        style={{ fontSize: "26px", marginTop: "40px" }}
      >
        At IdeaFundr, we understand the challenges that creators face in
        accessing funding and support for their projects. Our goal is to bridge
        the gap by providing a transparent, secure, and user-friendly
        crowdfunding experience that benefits both creators and backers alike.
      </p>
      <hr
        style={{
          color: "white",
          marginTop: "30px",
          fontSize: "200px",
          borderTop: "10px solid grey",
        }}
      />
      <p
        className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]"
        style={{ fontSize: "26px", marginTop: "40px" }}
      >
        We invite you to join our community of creators and backers, where
        innovative ideas find the support they deserve. Whether you are a
        passionate creator seeking funding or an enthusiastic backer looking to
        discover new projects, IdeaFundr is the platform for you.
      </p>
      <p
        className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]"
        style={{ fontSize: "26px", marginTop: "40px" }}
      >
        Together, let's unlock the power of crowdfunding and shape a future
        fueled by innovation, collaboration, and boundless creativity. Feel free
        to customize and expand upon this content to reflect your project's
        unique value proposition and mission.
      </p>
      <p
        className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]"
        style={{ fontSize: "26px", marginTop: "40px" }}
      >
        Feel free to customize and expand upon this content to reflect your
        project's unique value proposition and mission.
      </p>
    </>
  );
};

export default About;
