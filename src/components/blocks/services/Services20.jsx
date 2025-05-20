import { Fragment } from 'react';
import { serviceList10 } from 'data/service';
import NextLink from 'next/link'; // Import the Next.js Link component

const Services20 = () => {
  return (
    <Fragment>
      {/* Heading Section */}
      <div className="row text-center">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
        <h1
  className="fs-32 text-uppercase mb-3"
  style={{
    background: 'linear-gradient(135deg, rgb(0, 166, 228) 0%, rgb(121, 191, 30) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
  }}
>
  Business Lines
</h1>
          <h5 className="display-4 mb-9 px-xl-09" style={{ color: 'black', fontWeight: 'bold' }}>
            Explore our diverse range of services
          </h5>
        </div>
      </div>

     <div className="row gy-8 mb-17">
  {serviceList10.map(({ id, title, backgroundImage, linkUrl }) => (
    <div className="col-md-6 col-lg-4" key={id} style={{ marginBottom: '30px' }}>
      {/* Wrap each card with a NextLink to make it clickable */}
      <NextLink href={linkUrl} passHref>
        <div
          className="service-card"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            padding: '30px',
            margin: '15px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '250px',
            width: '100%',
            height: '300px',
            display: 'flex',
            alignItems: 'flex-end', // Align text to the bottom
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
            boxShadow: '0 4px 8px rgba(73, 7, 7, 0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            overflow: 'hidden', // Ensure content doesn't overflow
            position: 'relative', // For gradient overlay
          }}
        >
          {/* Gradient Overlay */}
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              width: '100%',
              height: '50%', // Adjust height of gradient overlay
              background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))',
            }}
          />

          {/* Text Content */}
          <div
            className="service-card-content"
            style={{
              position: 'relative',
              zIndex: '1', // Ensure text is above the gradient
              transition: 'transform 0.3s ease',
            }}
          >
            <h3
              className="service-title"
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                background: 'white',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                margin: '0 auto',
                textAlign: 'center',
              }}
            >
              {title}
            </h3>
          </div>
        </div>
      </NextLink>
    </div>
  ))}
</div>
    </Fragment>
  );
};

export default Services20;
