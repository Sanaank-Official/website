import head from 'next/head'
import Script from 'next/script';
export default function HomePage() {
	return (
		<>
		<head>
  <meta charSet="utf-8" />
  <title>Elaxo App and Software Template</title>
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <meta content="Elaxo App and Software Template" name="description" />
  <meta content="" name="keywords" />
  <meta content="" name="author" />
  {/*[if lt IE 9]>
      
  <![endif]*/}
  {/* CSS Files
    ================================================== */}
  <link
    id="bootstrap"
    href="css/bootstrap.min.css"
    rel="stylesheet"
    type="text/css"
  />
  <link
    id="bootstrap-grid"
    href="css/bootstrap-grid.min.css"
    rel="stylesheet"
    type="text/css"
  />
  <link
    id="bootstrap-reboot"
    href="css/bootstrap-reboot.min.css"
    rel="stylesheet"
    type="text/css"
  />
  <link href="css/animate.css" rel="stylesheet" type="text/css" />
  <link href="css/owl.carousel.css" rel="stylesheet" type="text/css" />
  <link href="css/owl.theme.css" rel="stylesheet" type="text/css" />
  <link href="css/owl.transitions.css" rel="stylesheet" type="text/css" />
  <link href="css/magnific-popup.css" rel="stylesheet" type="text/css" />
  <link href="css/jquery.countdown.css" rel="stylesheet" type="text/css" />
  <link href="css/style.css" rel="stylesheet" type="text/css" />
  {/* color scheme */}
  <link
    id="colors"
    href="css/colors/scheme-01.css"
    rel="stylesheet"
    type="text/css"
  />
  <link href="css/coloring.css" rel="stylesheet" type="text/css" />

		</head>
  <div id="wrapper">
    
  
    {/* content begin */}
    <div className="no-bottom no-top" id="content">
      <div id="top" />
      <section
        aria-label="section"
        data-bgimage="url(images/background/1.jpg) top"
        className="text-light"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 wow fadeInRight" data-wow-delay=".5s">
              <div className="spacer-10" />
              <div className="h1 text-light">
                Help to improve focus
                <br />
                for more
                <div className="typed-strings">
                  <p>productive</p>
                  <p>creative</p>
                  <p>relax</p>
                  <p>confidence</p>
                </div>
                <div className="typed" />
              </div>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim.
              </p>
              <div className="spacer-20" />
              <a className="btn-custom" href="features.html">
                Learn More
              </a>
              &nbsp;
              <a className="btn-border" href="download.html">
                Download
              </a>
              <div className="mb-sm-30" />
            </div>
            <div
              className="col-lg-6 offset-lg-1 text-center wow fadeInLeft"
              data-wow-delay=".5s"
            >
              <img src="images/misc/1.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="section-highlight" data-bgcolor="#f0f4fd">
        <div className="container">
          <div className="text-center">
            <span className="p-title">Discover</span>
            <br />
            <h2>Top Features</h2>
            <div className="small-border" />
          </div>
          <div className="row sequence">
            <div className="col-lg-4 col-md-6 mb30 sq-item wow">
              <div className="f-box f-icon-left f-icon-circle f-icon-shadow">
                <i className="fa fa-music bg-color text-light" />
                <div className="fb-text">
                  <h4>HD Sounds</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb30 sq-item wow">
              <div className="f-box f-icon-left f-icon-circle f-icon-shadow">
                <i className="fa fa-list-ol bg-color text-light" />
                <div className="fb-text">
                  <h4>Playlist</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb30 sq-item wow">
              <div className="f-box f-icon-left f-icon-circle f-icon-shadow">
                <i className="fa fa-star bg-color text-light" />
                <div className="fb-text">
                  <h4>Favorites</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb30 sq-item wow">
              <div className="f-box f-icon-left f-icon-circle f-icon-shadow">
                <i className="fa fa-heartbeat bg-color text-light" />
                <div className="fb-text">
                  <h4>Mood Detector</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb30 sq-item wow">
              <div className="f-box f-icon-left f-icon-circle f-icon-shadow">
                <i className="fa fa-random bg-color text-light" />
                <div className="fb-text">
                  <h4>Shuffle</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb30 sq-item wow">
              <div className="f-box f-icon-left f-icon-circle f-icon-shadow">
                <i className="fa fa-hourglass-start bg-color text-light" />
                <div className="fb-text">
                  <h4>Timer</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section-banner">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 d-none d-lg-block d-xl-block text-center wow fadeInRight"
              data-wow-delay="0s"
            >
              <img
                className="relative img-fluid"
                src="images/misc/5.png"
                alt=""
              />
            </div>
            <div
              className="col-lg-5 offset-md-1 wow fadeInLeft"
              data-wow-delay="0s"
            >
              <span className="p-title">Profile</span>
              <br />
              <h2>Select a profile or create new one. You deciced!</h2>
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="pills-home-tab"
                    data-toggle="pill"
                    href="#pills-home"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Sleep
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-profile-tab"
                    data-toggle="pill"
                    href="#pills-profile"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Focus
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-contact-tab"
                    data-toggle="pill"
                    href="#pills-contact"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    Relax
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <p>
                    Consequat occaecat ullamco amet non eiusmod nostrud dolore
                    irure incididunt est duis anim sunt officia. Fugiat velit
                    proident aliquip nisi incididunt nostrud exercitation
                    proident est nisi. Irure magna elit commodo anim ex veniam
                    culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod
                    consequat eu adipisicing minim anim aliquip cupidatat culpa
                    excepteur quis. Occaecat sit eu exercitation irure Lorem
                    incididunt nostrud.
                  </p>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <p>
                    Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa
                    mollit commodo mollit ex. Aute sunt incididunt amet commodo
                    est sint nisi deserunt pariatur do. Aliquip ex eiusmod
                    voluptate exercitation cillum id incididunt elit sunt. Qui
                    minim sit magna Lorem id et dolore velit Lorem amet
                    exercitation duis deserunt. Anim id labore elit adipisicing
                    ut in id occaecat pariatur ut ullamco ea tempor duis.
                  </p>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  <p>
                    Est quis nulla laborum officia ad nisi ex nostrud culpa
                    Lorem excepteur aliquip dolor aliqua irure ex. Nulla ut duis
                    ipsum nisi elit fugiat commodo sunt reprehenderit laborum
                    veniam eu veniam. Eiusmod minim exercitation fugiat irure ex
                    labore incididunt do fugiat commodo aliquip sit id deserunt
                    reprehenderit aliquip nostrud. Amet ex cupidatat excepteur
                    aute veniam incididunt mollit cupidatat esse irure officia
                    elit do ipsum ullamco Lorem.
                  </p>
                </div>
              </div>
              <div className="spacer-half" />
              <a className="btn-custom" href="features.html">
                Learn More
              </a>
              &nbsp;
              <a className="btn-border btn-invert" href="download.html">
                Download
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* section begin */}
      <section data-bgcolor="#f0f4fd">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <span className="p-title">Select</span>
              <br />
              <h2>Pricing Plans</h2>
              <div className="small-border" />
              <div className="switch-set">
                <div>Monthly</div>
                <div>
                  <input id="sw-1" className="switch" type="checkbox" />
                </div>
                <div>Yearly</div>
                <div className="spacer-20" />
              </div>
            </div>
          </div>
          <div className="row sequence">
            <div className="col-lg-4 col-md-6 col-sm-12 sq-item wow">
              <div className="pricing-s1 mb30">
                <div className="top">
                  <h2>Free</h2>
                  <p className="plan-tagline">Basic</p>
                </div>
                <div className="mid text-light bg-color">
                  <p className="price">
                    <span className="currency">$</span>
                    <span className="m opt-1">0</span>
                    <span className="y opt-2">0</span>
                    <span className="month">p/mo</span>
                  </p>
                </div>
                <div className="bottom">
                  <ul>
                    <li>
                      <i className="fa fa-check" />1 device
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Daily reminder
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Simple reporting
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Standart dashboard
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Email Notification
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Email Support
                    </li>
                  </ul>
                </div>
                <div className="action">
                  <a href="register.html" className="btn-custom">
                    Sign Up Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 sq-item wow">
              <div className="pricing-s1 mb30">
                <div className="top">
                  <h2>Pro</h2>
                  <p className="plan-tagline">For Individuals</p>
                </div>
                <div className="mid text-light bg-color">
                  <p className="price">
                    <span className="currency">$</span>
                    <span className="m opt-1">9.59</span>
                    <span className="y opt-2">7.46</span>
                    <span className="month">p/mo</span>
                  </p>
                </div>
                <div className="bottom">
                  <ul>
                    <li>
                      <i className="fa fa-check" />
                      Up to 2 devices
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Daily reminder
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Detailed reporting
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Interactive dashboard
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Email and SMS notification
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      24/7 Customer Support
                    </li>
                  </ul>
                </div>
                <div className="action">
                  <a href="register.html" className="btn-custom">
                    Sign Up Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 sq-item wow">
              <div className="pricing-s1 mb30">
                <div className="top">
                  <h2>For Teams</h2>
                  <p className="plan-tagline">Best for organization</p>
                </div>
                <div className="mid text-light bg-color">
                  <p className="price">
                    <span className="currency">$</span>
                    <span className="m opt-1">24.99</span>
                    <span className="y opt-2">16.49</span>
                    <span className="month">p/mo</span>
                  </p>
                </div>
                <div className="bottom">
                  <ul>
                    <li>
                      <i className="fa fa-check" />
                      Up to 10 devices
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Daily reminder
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Detailed reporting
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Interactive dashboard
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Email and SMS notification
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      24/7 Customer Support
                    </li>
                  </ul>
                </div>
                <div className="action">
                  <a href="register.html" className="btn-custom">
                    Sign Up Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-3 text-center">
              <small>Price shown are in USD and VAT inclusive.</small>
            </div>
          </div>
          <div className="spacer-double" />
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>FAQ</h2>
              <div className="small-border" />
            </div>
            <div className="col-md-6">
              {/* Accordion */}
              <div id="accordion-1" className="accordion">
                {/* Accordion item 1 */}
                <div className="card">
                  <div
                    id="heading-a1"
                    className="card-header bg-white shadow-sm border-0"
                  >
                    <h6 className="mb-0 font-weight-bold">
                      <a
                        href="#"
                        data-toggle="collapse"
                        data-target="#collapse-a1"
                        aria-expanded="false"
                        aria-controls="collapse-a1"
                        className="d-block position-relative text-dark collapsible-link py-2"
                      >
                        How do i get the app for my phone?
                      </a>
                    </h6>
                  </div>
                  <div
                    id="collapse-a1"
                    aria-labelledby="heading-a1"
                    data-parent="#accordion-1"
                    className="collapse"
                  >
                    <div className="card-body p-4">
                      <p className="m-0">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Accordion item 2 */}
                <div className="card">
                  <div
                    id="heading-a2"
                    className="card-header bg-white shadow-sm border-0"
                  >
                    <h6 className="mb-0 font-weight-bold">
                      <a
                        href="#"
                        data-toggle="collapse"
                        data-target="#collapse-a2"
                        aria-expanded="false"
                        aria-controls="collapse-a2"
                        className="d-block position-relative collapsed text-dark collapsible-link py-2"
                      >
                        What plan I should choose?
                      </a>
                    </h6>
                  </div>
                  <div
                    id="collapse-a2"
                    aria-labelledby="heading-a2"
                    data-parent="#accordion-1"
                    className="collapse"
                  >
                    <div className="card-body p-4">
                      <p className="m-0">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Accordion item 3 */}
                <div className="card">
                  <div
                    id="heading-a3"
                    className="card-header bg-white shadow-sm border-0"
                  >
                    <h6 className="mb-0 font-weight-bold">
                      <a
                        href="#"
                        data-toggle="collapse"
                        data-target="#collapse-a3"
                        aria-expanded="false"
                        aria-controls="collapse-a3"
                        className="d-block position-relative collapsed text-dark collapsible-link py-2"
                      >
                        What happen to my app if I stop paying?
                      </a>
                    </h6>
                  </div>
                  <div
                    id="collapse-a3"
                    aria-labelledby="heading-a3"
                    data-parent="#accordion-1"
                    className="collapse"
                  >
                    <div className="card-body p-4">
                      <p className="m-0">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              {/* Accordion */}
              <div id="accordion-2" className="accordion">
                {/* Accordion item 1 */}
                <div className="card">
                  <div
                    id="heading-b1"
                    className="card-header bg-white shadow-sm border-0"
                  >
                    <h6 className="mb-0 font-weight-bold">
                      <a
                        href="#"
                        data-toggle="collapse"
                        data-target="#collapse-b1"
                        aria-expanded="false"
                        aria-controls="collapse-b1"
                        className="d-block position-relative text-dark collapsible-link py-2"
                      >
                        Does it have in-app purchases?
                      </a>
                    </h6>
                  </div>
                  <div
                    id="collapse-b1"
                    aria-labelledby="heading-b1"
                    data-parent="#accordion-2"
                    className="collapse"
                  >
                    <div className="card-body p-4">
                      <p className="m-0">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Accordion item 2 */}
                <div className="card">
                  <div
                    id="heading-b2"
                    className="card-header bg-white shadow-sm border-0"
                  >
                    <h6 className="mb-0 font-weight-bold">
                      <a
                        href="#"
                        data-toggle="collapse"
                        data-target="#collapse-b2"
                        aria-expanded="false"
                        aria-controls="collapse-b2"
                        className="d-block position-relative collapsed text-dark collapsible-link py-2"
                      >
                        Can I use this app on multiple devices?
                      </a>
                    </h6>
                  </div>
                  <div
                    id="collapse-b2"
                    aria-labelledby="heading-b2"
                    data-parent="#accordion-2"
                    className="collapse"
                  >
                    <div className="card-body p-4">
                      <p className="m-0">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Accordion item 3 */}
                <div className="card">
                  <div
                    id="heading-b3"
                    className="card-header bg-white shadow-sm border-0"
                  >
                    <h6 className="mb-0 font-weight-bold">
                      <a
                        href="#"
                        data-toggle="collapse"
                        data-target="#collapse-b3"
                        aria-expanded="false"
                        aria-controls="collapse-b3"
                        className="d-block position-relative collapsed text-dark collapsible-link py-2"
                      >
                        Is my phone supported for this app?
                      </a>
                    </h6>
                  </div>
                  <div
                    id="collapse-b3"
                    aria-labelledby="heading-b3"
                    data-parent="#accordion-2"
                    className="collapse"
                  >
                    <div className="card-body p-4">
                      <p className="m-0">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section close */}
      <section id="section-testimonial">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <span className="p-title">Latest</span>
                <br />
                <h2>Customer Reviews</h2>
                <div className="small-border" />
              </div>
              <div
                className="owl-carousel owl-theme wow fadeInUp"
                id="testimonial-carousel"
              >
                <div className="item">
                  <div className="de_testi opt-2 review">
                    <blockquote>
                      <div className="p-rating">
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star" />
                      </div>
                      <h3>Pretty Awesome!</h3>
                      <p>
                        Great app, like i have never seen before. Thanks to the
                        support team, they are very helpfull. This company
                        provide customers great solution, that makes them best.
                      </p>
                      <div className="de_testi_by">
                        <span>John, Pixar Studio</span>
                      </div>
                    </blockquote>
                  </div>
                </div>
                <div className="item">
                  <div className="de_testi opt-2 review">
                    <blockquote>
                      <div className="p-rating">
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star" />
                      </div>
                      <h3>Excellent!</h3>
                      <p>
                        Great app, like i have never seen before. Thanks to the
                        support team, they are very helpfull. This company
                        provide customers great solution, that makes them best.
                      </p>
                      <div className="de_testi_by">
                        <span>Sarah, Microsoft</span>
                      </div>
                    </blockquote>
                  </div>
                </div>
                <div className="item">
                  <div className="de_testi opt-2 review">
                    <blockquote>
                      <div className="p-rating">
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star" />
                      </div>
                      <h3>Unbelievable!</h3>
                      <p>
                        Great app, like i have never seen before. Thanks to the
                        support team, they are very helpfull. This company
                        provide customers great solution, that makes them best.
                      </p>
                      <div className="de_testi_by">
                        <span>Michael, Apple</span>
                      </div>
                    </blockquote>
                  </div>
                </div>
                <div className="item">
                  <div className="de_testi opt-2 review">
                    <blockquote>
                      <div className="p-rating">
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star" />
                      </div>
                      <h3>Fantastic!</h3>
                      <p>
                        Great app, like i have never seen before. Thanks to the
                        support team, they are very helpfull. This company
                        provide customers great solution, that makes them best.
                      </p>
                      <div className="de_testi_by">
                        <span>Thomas, Samsung</span>
                      </div>
                    </blockquote>
                  </div>
                </div>
                <div className="item">
                  <div className="de_testi opt-2 review">
                    <blockquote>
                      <div className="p-rating">
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star" />
                      </div>
                      <h3>Easy to use!</h3>
                      <p>
                        Great app, like i have never seen before. Thanks to the
                        support team, they are very helpfull. This company
                        provide customers great solution, that makes them best.
                      </p>
                      <div className="de_testi_by">
                        <span>John, Pixar Studio</span>
                      </div>
                    </blockquote>
                  </div>
                </div>
                <div className="item">
                  <div className="de_testi opt-2 review">
                    <blockquote>
                      <div className="p-rating">
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star" />
                      </div>
                      <h3>Beauty Interface!</h3>
                      <p>
                        Great app, like i have never seen before. Thanks to the
                        support team, they are very helpfull. This company
                        provide customers great solution, that makes them best.
                      </p>
                      <div className="de_testi_by">
                        <span>Sarah, Microsoft</span>
                      </div>
                    </blockquote>
                  </div>
                </div>
                <div className="item">
                  <div className="de_testi opt-2 review">
                    <blockquote>
                      <div className="p-rating">
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star" />
                      </div>
                      <h3>Great App!</h3>
                      <p>
                        Great app, like i have never seen before. Thanks to the
                        support team, they are very helpfull. This company
                        provide customers great solution, that makes them best.
                      </p>
                      <div className="de_testi_by">
                        <span>Michael, Apple</span>
                      </div>
                    </blockquote>
                  </div>
                </div>
                <div className="item">
                  <div className="de_testi opt-2 review">
                    <blockquote>
                      <div className="p-rating">
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star" />
                      </div>
                      <h3>Love It!</h3>
                      <p>
                        Great app, like i have never seen before. Thanks to the
                        support team, they are very helpfull. This company
                        provide customers great solution, that makes them best.
                      </p>
                      <div className="de_testi_by">
                        <span>Thomas, Samsung</span>
                      </div>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section-fun-facts" className="pt60 pb60 text-light bg-color">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0s">
              <div className="de_count">
                <h3>
                  <span className="timer" data-to={2010} data-speed={3000}>
                    0
                  </span>
                </h3>
                <h5>Year we've founded</h5>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay=".25s"
            >
              <div className="de_count">
                <h3>
                  <span className="timer" data-to={3} data-speed={3000}>
                    0
                  </span>
                  m
                </h3>
                <h5>Monthly active users</h5>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="de_count">
                <h3>
                  <span className="timer" data-to={100} data-speed={3000}>
                    0
                  </span>
                  +
                </h3>
                <h5>Team members</h5>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay=".75s"
            >
              <div className="de_count">
                <h3>
                  <span className="timer" data-to={75} data-speed={3000}>
                    0
                  </span>
                </h3>
                <h5>Countries using our product</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section aria-label="section" className="no-top no-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <span className="p-title">Download</span>
              <br />
              <h2>Available on iOS and Android</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.
              </p>
              <a href="download.html">
                <img
                  src="images/misc/download-appstore.png"
                  className="img-fluid"
                  alt="download"
                />
              </a>
              &nbsp;
              <a href="download.html">
                <img
                  src="images/misc/download-playstore.png"
                  className="img-fluid"
                  alt="download"
                />
              </a>
            </div>
            <div className="col-md-6 text-center">
              <img src="images/misc/2.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
    {/* content close */}
    <a href="#" id="back-to-top" />
    {/* footer begin */}
    <footer className="footer-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="widget">
              <a href="index.html">
                <img alt="" className="logo" src="images/logo.png" />
              </a>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="widget">
              <h5>Company</h5>
              <ul>
                <li>
                  <a className="a-underline" href="about.html">
                    About Us
                    <span />
                  </a>
                </li>
                <li>
                  <a className="a-underline" href="jobs.html">
                    Jobs
                    <span />
                  </a>
                </li>
                <li>
                  <a className="a-underline" href="contact.html">
                    Contact
                    <span />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="widget">
              <h5>Product</h5>
              <ul>
                <li>
                  <a className="a-underline" href="features.html">
                    Features
                    <span />
                  </a>
                </li>
                <li>
                  <a className="a-underline" href="pricing.html">
                    Pricing
                    <span />
                  </a>
                </li>
                <li>
                  <a className="a-underline" href="reviews.html">
                    Reviews
                    <span />
                  </a>
                </li>
                <li>
                  <a className="a-underline" href="download.html">
                    Download
                    <span />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="widget">
              <h5>Resources</h5>
              <ul>
                <li>
                  <a className="a-underline" href="blog.html">
                    Blog
                    <span />
                  </a>
                </li>
                <li>
                  <a className="a-underline" href="video-tutorial.html">
                    Video Tutorial
                    <span />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="widget">
              <h5>Newsletter</h5>
              <p>
                Signup for our newsletter to get the latest news, updates and
                special offers in your inbox.
              </p>
              <form
                action="https://www.madebydesignesia.com/themes/elaxo/blank.php"
                className="row"
                id="form_subscribe"
                method="post"
                name="form_subscribe"
              >
                <div className="col text-center">
                  <input
                    className="form-control"
                    id="name_1"
                    name="name_1"
                    placeholder="enter your email"
                    type="text"
                  />{" "}
                  <a href="#" id="btn-submit">
                    <i className="arrow_right" />
                  </a>
                  <div className="clearfix" />
                </div>
              </form>
              <div className="spacer-10" />
              <small>Your email is safe with us. We don't spam.</small>
            </div>
          </div>
        </div>
      </div>
      <div className="subfooter">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="de-flex">
                <div className="de-flex-col">
                  © Copyright 2023 - Elaxo by Designesia
                </div>
                <div className="de-flex-col">
                  <div className="social-icons">
                    <a href="#">
                      <i className="fa fa-facebook fa-lg" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter fa-lg" />
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin fa-lg" />
                    </a>
                    <a href="#">
                      <i className="fa fa-pinterest fa-lg" />
                    </a>
                    <a href="#">
                      <i className="fa fa-rss fa-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/* footer close */}
    <div id="preloader">
      <div className="spinner">
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
      </div>
    </div>
  </div>
  <div id="cookieConsent">
    <div className="container-fluid">
      <div className="de-flex">
        <div className="de-flex-content">
          This website is using cookies.{" "}
          <a href="#" target="_blank">
            More info
          </a>
          .
        </div>
        <div className="de-flex-content">
          <a className="cookieConsentOK">Accept All Cookies</a>
        </div>
      </div>
    </div>
  </div>
  <div id="selector">
    <div id="demo-rtl" className="sc-opt">
      <div className="sc-icon">RTL</div>
      <span className="sc-val">Click to Enable</span>
    </div>
    <div className="sc-opt sc-mt">
      <div className="sc-icon">
        <i className="fa fa-eyedropper" />
      </div>
      <span className="opt tc1" data-color="scheme-01" />
      <span className="opt tc2" data-color="scheme-02" />
      <span className="opt tc3" data-color="scheme-03" />
      <span className="opt tc4" data-color="scheme-04" />
      <span className="opt tc5" data-color="scheme-05" />
      <span className="opt tc6" data-color="scheme-06" />
      <span className="opt tc7" data-color="scheme-07" />
    </div>
  </div>
  		<Script src="js/jquery.min.js"></Script>
        <Script src="js/popper.min.js"></Script>
        <Script src="js/bootstrap.min.js"></Script>
        <Script src="js/wow.min.js"></Script>
        <Script src="js/jquery.isotope.min.js"></Script>
        <Script src="js/easing.js"></Script>
        <Script src="js/owl.carousel.js"></Script>
        <Script src="js/validation.js"></Script>
        <Script src="js/jquery.magnific-popup.min.js"></Script>
        <Script src="js/enquire.min.js"></Script>
        <Script src="js/jquery.stellar.min.js"></Script>
        <Script src="js/jquery.plugin.js"></Script>
        <Script src="js/typed.js"></Script>
        <Script src="js/jquery.countTo.js"></Script>
        <Script src="js/jquery.countdown.js"></Script>
        <Script src="js/typed.js"></Script>
        <Script src="js/designesia.js"></Script>

        <Script>
  {`
    $(document).ready(function () {
      $(".typed").typed({
        stringsElement: $('.typed-strings'),
        typeSpeed: 100,
        backDelay: 1500,
        loop: true,
        contentType: 'html',
        loopCount: false,
        callback: function () { null; },
        resetCallback: function () { newTyped(); }
      });
    });
  `}
</Script>

</>
	
	);
}
