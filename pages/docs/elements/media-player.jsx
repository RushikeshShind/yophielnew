import DocLayout from 'components/layouts/DocLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';

// -------- markups -------- //
import { htmlMarkup, vimeoMarkup, youtubeMarkup, embededMarkup } from 'markups/elements/media-player';

// -------- data -------- //
const quickAccess = [
  { title: 'HTML5 Video', url: 'snippet-1' },
  { title: 'Vimeo', url: 'snippet-2' },
  { title: 'YouTube', url: 'snippet-3' },
  { title: 'Embed', url: 'snippet-4' },
];

const MediaPlayer = () => {
  return (
    <DocLayout
      pageTitle="Media Player"
      quickAccssLinks={quickAccess}
      descriptionClass="lead px-xxl-10"
      headingColClass="col-md-9 col-lg-7 col-xl-7 mx-auto"
      description={
        <>
          Examples on how to add videos with responsive media players using native HTML elements or iframes. For
          further instructions on embedding videos, refer to{' '}
          <a href="https://www.youtube.com/help" target="_blank" className="hover more" rel="noreferrer">
            YouTube Help
          </a>{' '}
          or{' '}
          <a href="https://vimeo.com/help" target="_blank" className="hover more" rel="noreferrer">
            Vimeo Help
          </a>.
        </>
      }
    >
      {/* ========== section 1 ========== */}
      <section id="snippet-1" className="wrapper pt-16">
        <h2 className="mb-5">HTML5 Video</h2>
        <div className="card">
          <div className="card-body">
            <video controls width="100%" height="auto">
              <source src="/media/movie.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-1">
              View example's code
            </a>
          </div>

          <div id="collapse-1" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{htmlMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 2 ========== */}
      <section id="snippet-2" className="wrapper pt-16">
        <h2 className="mb-5">Vimeo</h2>
        <div className="card">
          <div className="card-body">
            <iframe
              width="100%"
              height="400"
              src="https://player.vimeo.com/video/15801179"
              title="Vimeo video player"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-1">
              View example's code
            </a>
          </div>

          <div id="collapse-1" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{vimeoMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 3 ========== */}
      <section id="snippet-3" className="wrapper ptМАТЧ16">
        <h2 className="mb-5">YouTube</h2>
        <div className="card">
          <div className="card-body">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/j_Y2Gwaj7Gs"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-2">
              View example's code
            </a>
          </div>

          <div id="collapse-2" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{youtubeMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== section 4 ========== */}
      <section id="snippet-4" className="wrapper py-16">
        <h2 className="mb-5">Responsive Embed</h2>
        <div className="card">
          <div className="card-body">
            <div className="ratio ratio-16x9">
              <iframe
                className="rounded"
                src="https://www.youtube.com/embed/j_Y2Gwaj7Gs?rel=0"
                title="YouTube video"
                allowFullScreen
              />
            </div>
          </div>

          <div className="card-footer position-relative">
            <a className="collapse-link collapsed stretched-link" data-bs-toggle="collapse" href="#collapse-4">
              View example's code
            </a>
          </div>

          <div id="collapse-4" className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{embededMarkup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocLayout>
  );
};

export default MediaPlayer;