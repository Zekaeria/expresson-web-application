import logo from "./logo.svg";
import "./App.css";

import img1 from "./assets/slide4.png";

function App() {
  return (
    <div className="App">
      {/*Cover or heading*/}
      <div className="mb-2 bg-white rounded-3 mt-5">
        <div className="container-fluid py-5 full-width">
          <img
            className="rounded my-2 mx-2"
            src="https://lh3.googleusercontent.com/W5_TVdraYbAg2YgNz21TewCxg8Xvyxi3YbdhIzTdrhE-hGOx1FrPHOVml5K245PATH_9-pBjUUbXc16OTySHkrMU3JXBjGkYYbS3yIUDI-ckGgExKtAPM1F2pjzxtMw07bCS_GT-=w2400"
            alt="Generic placeholder image"
            width="200"
            height="200"
          />
          <h1 className="display-5 fw-bold">EXPRESSON</h1>
          <p className="lead fw-normal">
            {" "}
            The journal app used to express your thoughts and feelings
            privately, or share it with the people you trust.
          </p>
          <button className="btn btn-primary btn-lg" type="button">
            Download on Apple
          </button>
          <button className="btn btn-primary btn-lg" type="button">
            Download on Android
          </button>
        </div>
      </div>

      <header className="App-header">

        {/*divider*/}
        <hr className="featurette-divider"></hr>
        {/*featured row or section */}
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading-text">
              Express yourself! {" "}
              <span className="text-muted">Reflect.</span>
            </h2>
            <p className="lead lead-fix">
              Create daily journal entries and organize your notes with customizable tags.
            </p>
          </div>
          <div className="col-md-5">
            <img className="section-img" src="https://res.cloudinary.com/comida-for-familias-inc/image/upload/v1633843261/Expresson/slide4_uqndql.png" alt="img" />
          </div>
        </div>

        {/*divider*/}
        <hr className="featurette-divider"></hr>
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading-text mx-3">
              Hear other people's stories.{" "}
              <span className="text-muted">See for yourself.</span>
            </h2>
            <p className="lead lead-fix">
              Listen to people around the world share their ups and downs. Expresson is a place of support and diversity.
            </p>
          </div>
          <div className="col-md-5">
          <img className="section-img" src="https://lh3.googleusercontent.com/_bTT87KjghCMq-VNu70B7f8kn25qgiwTN7RwB1W1CDNPrqqWSvyAqH-HevFdUZjubtpuL0ZRbj3Xx4-XIw8fuqLiBgS9wB5Lx_L5WvC-1SL9u_vlTaH-QEPITuRd71ectdxzjWCE=w2400" alt="img" />
            {/*</svg>*/}
          </div>
        </div>

        <div className="row p-5 align-items-md-stretch mx-5">
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-2">
              <h2 className="privacy">Respectful of your privacy</h2>
              <p>
                We take measures to ensure that your privacy is secured and
                whatever you share within our application stays.{" "}
              </p>
              {/*<button className="btn btn-outline-light" type="button">Example button</button>*/}
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-2">
              <h2 className="privacy">Share with people you trust</h2>
              <p>
                Share your thoughts to the people you care for instead of
                strangers.{" "}
              </p>
              {/*<p>Stop sharing your private thoughts with the world and instead share it with people who actually care about you. </p>*/}
              {/*<button className="btn btn-outline-secondary" type="button">Example button</button>*/}
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-2">
              <h2 className="privacy">Share anonymously</h2>
              <p>
                Birds of a feather flock together, and same goes for people. If
                you have an experience you want to share, share it publicly and
                anonymously within the app and see if others are going through
                similar situations.
              </p>
              {/*<button className="btn btn-outline-secondary" type="button">Example button</button>*/}
              {/*add 4th box highlighting the 3 values: integrity, empathy, self-reflection*/}
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-2">
              <h2 className="privacy">Integrity. Compassion. <br></br> Self-Reflection. </h2>
              <p>
                Three values essential in Expresson that joins us together to fight mental health.
              </p>
              {/*<button className="btn btn-outline-secondary" type="button">Example button</button>*/}
              {/*add 4th box highlighting the 3 values: integrity, empathy, self-reflection*/}
            </div>
          </div>
        </div>

        <div className="row p-5">
          <div className="col-lg-4">
            <img
              className="rounded-circle"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
              alt="Generic placeholder image"
              width="140"
              height="140"
            />
            <h2 className="privacy">Siddharth Singha Roy</h2>
            <p>App Developer (React)</p>
            <p>
              <a
                className="btn btn-secondary"
                href="https://github.com/HackXSid"
                role="button"
              >
                View details »
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <img
              className="rounded-circle"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
              alt="Generic placeholder image"
              width="140"
              height="140"
            />
            <h2 class="privacy">Karl McPhee</h2>
            <p>App Developer (Firebase) </p>
            <p>
              <a
                className="btn btn-secondary"
                href="https://github.com/karlmcphee/"
                role="button"
              >
                View details »
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <img
              className="rounded-circle"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
              alt="Generic placeholder image"
              width="140"
              height="140"
            />
            <h2 class="privacy">Antonio Mendieta</h2>
            <p>
              Project Manager, UI/Graphic Designer,<br></br>Web Developer
            </p>
            <p>
              <a
                className="btn btn-secondary"
                href="https://www.linkedin.com/in/antoniomendieta/"
                role="button"
              >
                View details »
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <img
              className="rounded-circle"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
              alt="Generic placeholder image"
              width="140"
              height="140"
            />
            <h2 class="privacy">Anielle Mari David</h2>
            <p>UI/Graphic Designer, Web Developer</p>
            <p>
              <a
                className="btn btn-secondary"
                href="https://github.com/Zekaeria"
                role="button"
              >
                View details »
              </a>
            </p>
          </div>
        </div>
        <img
            className="mb-3 rounded my-2 mx-2 img-responsive pull-left"
            src="https://lh3.googleusercontent.com/o5zy0X9l0eeITum3dAaEPMQs1JjpqCL36Sprnl76dO2WhUC8OcU22N25pZC0mAvV19cYtUJSJuLukC_-zsG1462cjCJzkDGO8SWw20aQwe2QucHrJ-7dCe_2ssyZtYoWpYPKOF8E=w2400"
            alt="Generic placeholder image"
            width="40%"
            height="50%"
          />
      </header>

      {/*bottom of the page*/}
      <footer class="mastfoot mt-auto">
        <p class="float-right mt-3">
          <a href="#">Back to top</a>
        </p>
        <p>
          © 2020-2021 Comida For Familias, Inc. · <a href="#">Privacy</a> ·{" "}
          <a href="#">Terms</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
