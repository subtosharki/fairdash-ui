<script>
	let email, password;
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl">
			<form>
				<div class="card-body bg-base-100">
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
					<label class="label">
						<a href="/reset-password" class="btn btn-sm label-text-alt link link-hover"
							>Forgot password?</a
						>
					</label>
					<div class="form-control mt-6">
						<button class="btn btn-primary">Login</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
