import { Fragment } from 'react';
import dynamic from 'next/dynamic';

// -------- custom component -------- //
import { Team3 } from 'components/blocks/team';
import { About6 } from 'components/blocks/about';
import { Facts5 } from 'components/blocks/facts';
import { Navbar } from 'components/blocks/navbar';
import { Footer11 } from 'components/blocks/footer';
import { Process7 } from 'components/blocks/process';
import { Contact7 } from 'components/blocks/contact';
import FigureImage from 'components/reuseable/FigureImage';
import NextLink from 'components/reuseable/links/NextLink';

// Dynamically import Testimonial5 and VideoPlayer with SSR disabled
const Testimonial5 = dynamic(() => import('components/blocks/testimonial'), {
  ssr: false,
});

const VideoPlayer = dynamic(() => import('components/reuseable/VideoPlayer'), {
  ssr: false,
});

const About = () => {
  return (
    <Fragment>
      {/* header section */}
      <header className="wrapper bg-gray">
        <Navbar
          language
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header>

      <main className="content-wrapper">
        {/* ========== page title section ========== */}
        <section className="wrapper bg-gray">
          <div className="container pt-10 pt-md-14 text-center">
            <div className="row">
              <div className="col-xl-6 mx-auto">
                <h1 className="display-1 mb-4">Hello! This is Sandbox</h1>
                <p className="lead fs-lg mb-0">A company turning ideas into beautiful things.</p>
              </div>
            </div>
          </div>

          <FigureImage
            width={2800}
            height={1000}
            src="/img/photos/bg12.jpg"
            className="position-absoute"
            style={{
              bottom: 0,
              left: 0,
              zIndex: 2,
            }}
          />
        </section>

        <section className="wrapper bg-light angled upper-end lower-end">
          <div className="container py-14 py-md-16">
            {/* ========== about section ========== */}
            <About6 />

            {/* ========== video section ========== */}
            <VideoPlayer />

            {/* ========== process section ========== */}
            <Process7 />
          </div>
        </section>

        {/* ========== testimonial section ========== */}
        <Testimonial5 />

        {/* ========== team section ========== */}
        <Team3 />

        {/* ========== facts section ========== */}
        <Facts5 />

        {/* ========== contact section ========== */}
        <Contact7 />
      </main>

      {/* ========== footer section ========== */}
      <Footer11 />
    </Fragment>
  );
};

export default About;
