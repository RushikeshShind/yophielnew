import { Fragment } from 'react';

// -------- custom component -------- //
import { FAQ8 } from 'components/blocks/faq';
import { Hero29 } from 'components/blocks/hero';
import { About30 } from 'components/blocks/about';
import { Navbar } from 'components/blocks/navbar';
import { Footer4 } from 'components/blocks/footer';
import { Process19 } from 'components/blocks/process';
import { Services31 } from 'components/blocks/services';
import { CTA11 } from 'components/blocks/call-to-action';
import { Testimonial23 } from 'components/blocks/testimonial';
import PageProgress from 'components/common/PageProgress';

const Demo29 = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header ========== */}
      <header className="wrapper">
        <Navbar
          info
          language
          navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-light caret-none"
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero29 />

        {/* ========== app & works sections ========== */}
        <section className="wrapper bg-light">
          <div className="container pt-18 pt-md-20 pb-14 pb-md-16">
            {/* ========== app feature section ========== */}
            <Services31 />

            {/* ========== how it works section ========== */}
            <Process19 />
          </div>
        </section>

        {/* ========== video & faq section ========== */}
        <section
          className="wrapper image-wrapper bg-full bg-image bg-overlay bg-overlay-light-600 bg-content"
          style={{
            backgroundImage: 'url(/img/photos/bg23.png)',
          }}
        >
          <div
            className="container py-14 pt-md-16 pt-lg-0 pb-md-17 position-relative"
            style={{
              zIndex: 2,
            }}
          >
            <div className="row">
              <div className="col-xl-11 col-xxl-10 mx-auto">
                {/* ========== video section ========== */}
                <div className="mt-lg-n20 mt-xl-n22 mb-14 mb-md-16 rounded-xl">
                  <iframe
                    width="100%"
                    height="400"
                    src="https://player.vimeo.com/video/165101721"
                    title="Vimeo video player"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* ========== faq section ========== */}
                <FAQ8 />
              </div>
            </div>
          </div>
        </section>

        {/* ========== choose & customers sections ========== */}
        <section className="wrapper bg-light">
          <div className="container py-16 py-md-18">
            {/* ========== why choose us section ========== */}
            <About30 />

            {/* ========== happy customers section ========== */}
            <Testimonial23 />
          </div>
        </section>

        {/* ========== call-to-action section ========== */}
        <CTA11 />
      </main>

      {/* ========== footer section ========== */}
      <Footer4 />
    </Fragment>
  );
};

export default Demo29;