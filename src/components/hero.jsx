import { SearchListingBtn } from "./searchListingBtn";

export const Hero = () => {
  const content = "search listings";
  return (
    <section className="hero d-flex justify-center center-text fd-column">
      <h2>
        MLS Multiple Listing Service <br /> Listings
      </h2>
      <p>Your Trusted Real Estate Source</p>

      <div className="center-text">
        <SearchListingBtn content={content} />
      </div>
    </section>
  );
};
