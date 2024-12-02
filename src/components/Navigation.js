import Link from "next/link";

export default function Navigation() {
	return (
		<><div id="topbar" className="text-white bg-color">
      
		
		<div className="container">
	  <div className="topbar-left sm-hide">
          <span className="topbar-widget tb-social">
            <a href="#">
              <i className="fa fa-facebook" />
            </a>
            <a href="#">
              <i className="fa fa-twitter" />
            </a>
            <a href="#">
              <i className="fa fa-instagram" />
            </a>
          </span>
        </div>
        <div className="topbar-right">
          <span className="topbar-widget sm-hide">
            <a href="download.html">Latest Version Available!</a>
          </span>
          <span className="topbar-widget">
            <a href="pricing.html">Today's Deal: Get 50% Discount!</a>
          </span>
        </div>
        <div className="clearfix" />
      </div>
	  </div>
		  {/* header begin */}
		  <header className="transparent scroll-light">
		  <div className="container">
			<div className="row">
			  <div className="col-md-12">
				<div className="de-flex sm-pt10">
				  <div className="de-flex-col">
					{/* logo begin */}
					<div id="logo">
					  <a href="index.html">
						<img alt="" className="logo" src="images/logo-light.png" />
						<img alt="" className="logo-2" src="images/logo.png" />
					  </a>
					</div>
					{/* logo close */}
				  </div>
				  <div className="de-flex-col header-col-mid">
					{/* mainmenu begin */}
					<ul id="mainmenu">
					  <li>
						<a href="index.html">
						  Home
						  <span />
						</a>
						<ul>
						  <li>
							<a href="index.html">Homepage 1</a>
						  </li>
						  <li>
							<a href="index-2.html">Homepage 2</a>
						  </li>
						  <li>
							<a href="index-3.html">Homepage 3</a>
						  </li>
						</ul>
					  </li>
					  <li>
						<a href="#">
						  Company
						  <span />
						</a>
						<ul>
						  <li>
							<a href="about.html">About Us</a>
						  </li>
						  <li>
							<a href="jobs.html">Jobs</a>
						  </li>
						  <li>
							<a href="contact.html">Contact</a>
						  </li>
						</ul>
					  </li>
					  <li>
						<a href="#">
						  Products
						  <span />
						</a>
						<ul>
						  <li>
							<a href="features.html">Features</a>
						  </li>
						  <li>
							<a href="pricing.html">Pricing</a>
						  </li>
						  <li>
							<a href="reviews.html">Reviews</a>
						  </li>
						  <li>
							<a href="download.html">Download</a>
						  </li>
						  <li>
							<a href="video-tutorial.html">Video Tutorial</a>
						  </li>
						</ul>
					  </li>
					  <li>
						<a href="#">
						  Pages
						  <span />
						</a>
						<ul>
						  <li>
							<a href="blog.html">Blog</a>
						  </li>
						  <li>
							<a href="gallery.html">Gallery</a>
						  </li>
						  <li>
							<a href="login.html">Login</a>
						  </li>
						  <li>
							<a href="login-2.html">Login 2</a>
						  </li>
						  <li>
							<a href="register.html">Register</a>
						  </li>
						  <li>
							<a href="contact.html">Contact Us</a>
						  </li>
						</ul>
					  </li>
					  <li>
						<a href="#">
						  Elements
						  <span />
						</a>
						<ul>
						  <li>
							<a href="icons-font-awesome.html">Font Awesome Icons</a>
						  </li>
						  <li>
							<a href="icons-elegant.html">Elegant Icons</a>
						  </li>
						  <li>
							<a href="icons-etline.html">Etline Icons</a>
						  </li>
						  <li>
							<a href="alerts.html">Alerts</a>
						  </li>
						  <li>
							<a href="accordion.html">Accordion</a>
						  </li>
						  <li>
							<a href="modal.html">Modal</a>
						  </li>
						  <li>
							<a href="progress-bar.html">Progress Bar</a>
						  </li>
						  <li>
							<a href="tabs.html">Tabs</a>
						  </li>
						  <li>
							<a href="timeline.html">Timeline</a>
						  </li>
						  <li>
							<a href="tooltips.html">Tooltips</a>
						  </li>
						  <li>
							<a href="counters.html">Counters</a>
						  </li>
						</ul>
					  </li>
					</ul>
				  </div>
				  <div className="de-flex-col">
					<a className="btn-custom" href="download.html">
					  <i className="fa fa-arrow-down" /> Download
					</a>
					<span id="menu-btn" />
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		</header>
		{/* header close */}
		</>
	);
}
