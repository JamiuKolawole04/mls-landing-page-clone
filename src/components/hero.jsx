import { SearchListingBtn } from "./searchListingBtn";

export const Hero = () => {
  const content = "search listings";
  return (
    <section className="hero d-flex justify-center center-text fd-column">
      <h2 data-aos="fade-up">
        MLS Multiple Listing Service <br /> Listings
      </h2>
      <p data-aos="fade-up">Your Trusted Real Estate Source</p>

      <div className="center-text" data-aos="fade-up">
        <SearchListingBtn content={content} />
      </div>
    </section>
  );
};
