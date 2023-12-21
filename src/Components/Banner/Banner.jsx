import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-[500px]"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/HpV6CTT/top-view-international-worker-s-day-still-life.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          
          <p className="mb-5">
          Develop a marketing strategy for a new product launch targeting young adults. Create engaging social media content and execute ad campaigns to drive brand awareness and sales.
          </p>
          <Link><button className="btn btn-primary">Let's Explore</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
