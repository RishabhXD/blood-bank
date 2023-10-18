import './footer.css';
function ThisFooter() {
  return (
    <>
    <div >
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<footer class="footer-distributed">

			<div class="footer-left">
				<h3>Rudhir</h3>
				<p class="footer-links">
					<a href="/" class="link-1">Home</a>
					<a href="/donor">Refer</a>
					<a href="/refer">Refer</a>
					<a href="/contact">Contact</a>
					<a href="/about">About</a>
				</p>
				<p class="footer-company-name">Rudhir © 2022</p>
			</div>

			<div class="footer-center">

				<div>
				<h4 class="contactus">Contact us</h4>
					<i class="fa fa-map-marker"></i>
					<p><span> Sahibabad</span> Uttar Pradesh, India, 201010</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+91 9625894120</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@rudhir.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					
					Rudhir is a pioneering blood donation company committed to saving lives and making a lasting impact in the community. With a mission to bridge the gap between blood donors and recipients, Rudhir strives to create a seamless and efficient platform for blood donations.
				</p>

				{/* <div class="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div> */}

			</div>

		</footer>
    </div>
    </>
  );
}

export default ThisFooter;