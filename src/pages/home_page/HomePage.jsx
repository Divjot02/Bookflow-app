import React from "react";
import Header from "./header/Header";
import "./_HomePage.css";
import background1 from "../../images/background.jpg";
import background2 from "../../images/background2.jpg";
import background3 from "../../images/background3.jpg";
import background4 from "../../images/background4.jpg";

const HomePage = () => {
  const testimonials = [
    {
      name: "Qaidjohar Jukker",
      quote: "This website changed my life. I can't believe how amazing it is!"
    },
    {
      name: "Ankit Kangaale",
      quote: "I've been using this website for years, and it never disappoints."
    },
    {
      name: "Jayesh Jadhav",
      quote: "The content on this website is top-notch. I recommend it to everyone."
    }
  ];
  return (
    <div className="root">
      <Header />
      <div className="page">
        <section
          className="section"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${background1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100vw",
            height: "100vh"
          }}
        >
          <div className="sectionContent">
            <h1 className="sectionHeading">Welcome to BookFlow: Your Literary Oasis!</h1>
            <p className="sectionText">
              Step into a world where pages breathe life into imagination and stories dance with every click. BookFlow invites you to embark on a literary journey like no other. Whether you&apos;re a passionate reader or a diligent administrator, our
              webapp is your gateway to boundless realms of knowledge and creativity. Dive into a sea of meticulously cataloged books, a treasure trove that spans genres, continents, and centuries. Admins, take the helm and navigate with ease,
              managing your library&apos;s every facet. Readers, discover new horizons, connect with fellow bibliophiles, and embark on literary adventures together. With BookFlow, literature comes to life, and your journey begins here. Welcome home.
            </p>
            <p className="sectionText">We are a one-stop destination for all your book needs.</p>
            <p className="sectionText">We have a wide range of books for you to choose from.</p>
            <p className="sectionText">Your search for the best books ends here...</p>
          </div>
        </section>
        <section
          className="section"
          style={{
            backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.8)), url(${background2})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100vw",
            height: "100vh"
          }}
        ></section>

        <section
          className="section"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.8)), url(${background3})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100vw",
            height: "100vh"
          }}
        ></section>

        <section
          className="section"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 1)), url(${background4})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100vw",
            height: "100vh"
          }}
        ></section>
        <section
          className="section testimonialCards"
          style={{
            backgroundImage: "linear-gradient(to right, #000000, #2e2e2e, #585858, #878787, #b9b9b9, #b9b9b9, #b9b9b9, #b9b9b9, #878787, #585858, #2e2e2e, #000000)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
        >
          <h2 className="sectionHeading">What Our Users Say</h2>
          <div className="testimonialCardContainer">
            {testimonials.map((testimonial, index) => (
              <div className="testimonialCard" key={index}>
                <p className="testimonialContent">{testimonial.quote}</p>
                <p className="testimonialName">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
