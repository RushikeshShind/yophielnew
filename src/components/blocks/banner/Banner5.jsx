const Banner5 = () => {
  return (
    <section className="wrapper bg-soft-primary">
      <div className="container py-14 py-md-16">
        <div className="row">
          <div className="col-xl-9 col-xxl-7 mx-auto text-center">
            <i className="icn-flower text-leaf fs-30 opacity-25"></i>
            <h2 className="display-5 text-center mt-2 mb-10">
              I would like to give you a unique photography and video experience, built to serve you best.
            </h2>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-xl-9 mx-auto">
            <iframe
              width="100%"
              height="400"
              src="https://player.vimeo.com/video/94837904"
              title="Vimeo video player"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner5;