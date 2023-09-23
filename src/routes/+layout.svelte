<script lang="ts">
	import '../app.css';
</script>

<div class="navbar bg-base-100">
	<div class="flex-1">
		<a class="btn btn-ghost text-xl uppercase" href="/">fairdash</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/work-with-us">Work with Us</a></li>
			<li><a href="/login">Login</a></li>
		</ul>
	</div>
</div>
<slot />
<footer class="footer p-10 bg-base-100 text-base-content">
	<nav>
		<header class="footer-title">Services</header>
		<a class="link link-hover">Upcoming Fairs</a>
		<a class="link link-hover">Food Delivery</a>
		<a class="link link-hover">Become a Fair Owner</a>
	</nav>
	<nav>
		<header class="footer-title">Company</header>
		<a class="link link-hover">About us</a>
		<a class="link link-hover">Contact</a>
		<a class="link link-hover">Jobs</a>
	</nav>
	<nav>
		<header class="footer-title">Legal</header>
		<a class="link link-hover">Terms of use</a>
		<a class="link link-hover">Privacy policy</a>
		<a class="link link-hover">Cookie policy</a>
	</nav>
</footer>
