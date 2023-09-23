<script>
	let email,
		fName,
		lName,
		phoneNumber,
		password,
		confPassword,
		backgroundUrl =
			'https://images.unsplash.com/photo-1505714628981-7273be3e2bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80';
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<div class="text-center lg:text-left text">
			<h1 class="text-5xl font-black text">Elevate Your Fair Experience with FairDash!</h1>
			<p class="py-6">
				Join the fair food revolution today! FairDash is your gateway to an enhanced fair
				experience, where the best of fairground cuisine is just a click away. As you read this, our
				registration form is right beside, ready for you to jump in and start savoring the flavors
				of the fair like never before. Let's shape the future of fair event food delivery together!
			</p>
		</div>
		<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
			<form>
				<div class="card-header flex justify-center pb-5 pt-5">
					<h1 class="card-title text-2xl">Start Using FairDash Today!</h1>
				</div>
				<div class="card-body">
					<div class="form-control">
						<label class="label font-bold">
							<span class="label-text">Email</span>
						</label>
						<input
							class="input"
							title="email"
							type="email"
							placeholder="email@example.com"
							autocomplete="email"
							bind:value={email}
						/>
					</div>
					<div class="form-control">
						<label class="label font-bold">
							<span class="label-text">Password</span>
						</label>
						<input
							class="input"
							title="password"
							type="password"
							placeholder="password123"
							autocomplete="new-password"
							bind:value={password}
						/>
					</div>
					<div class="form-control">
						<label class="label font-bold">
							<span class="label-text">Confirm Password</span>
						</label>
						<input
							class="input"
							title="password"
							type="password"
							placeholder="password123"
							bind:value={confPassword}
						/>
					</div>
					<div class="form-control">
						<label class="label font-bold">
							<span class="label-text">First Name</span>
						</label>
						<input class="input" title="text" type="text" placeholder="John" bind:value={fName} />
					</div>
					<div class="form-control">
						<label class="label font-bold">
							<span class="label-text">Last Name</span>
						</label>
						<input class="input" title="text" type="text" placeholder="Doe" bind:value={lName} />
					</div>
					<div class="form-control">
						<label class="label font-bold">
							<span class="label-text">Phone Number</span>
						</label>
						<input
							class="input"
							title="tel"
							type="tel"
							placeholder="+1 234 567 890"
							bind:value={phoneNumber}
						/>
					</div>
					<div class="form-control mt-6">
						<button class="btn btn-primary">Register</button>
					</div>
					<div class="form-control mt-6">
						<a href="/login" class="text-sm"
							>Already have an account? <span class="underline font-bold">Click here to login </span></a
						>
						<div />
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
