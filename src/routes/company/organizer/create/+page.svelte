<svelte:head>
	<title>FairDash - Register a Fair</title>
</svelte:head>

<body>
	<div class="container mx-auto p-6">
		<h1 class="text-2xl font-semibold mb-4">Register Your Fair</h1>
		<form>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div class="form-control">
					<label for="fairName" class="label">Fair Name</label>
					<input type="text" id="fairName" class="input" placeholder="Enter Fair Name" required />
				</div>
				<div class="form-control">
					<label for="website" class="label">Website</label>
					<input type="url" id="website" class="input" placeholder="Enter Fair Website (if any)" />
				</div>
			</div>

			<div class="form-control">
				<label for="location" class="label">Location</label>
				<input type="text" id="location" class="input" placeholder="Enter Fair Location" required />
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div class="form-control">
					<label for="startDate" class="label">Start Date</label>
					<input type="date" id="startDate" class="input" required />
				</div>
				<div class="form-control">
					<label for="endDate" class="label">End Date</label>
					<input type="date" id="endDate" class="input" required />
				</div>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div class="form-control">
					<label for="operatingHours" class="label">Operating Hours</label>
					<input
						type="text"
						id="operatingHours"
						class="input"
						placeholder="Enter Fair Operating Hours"
					/>
				</div>
				<div class="form-control">
					<label for="socialMedia" class="label">Social Media</label>
					<input
						type="url"
						id="socialMedia"
						class="input"
						placeholder="Enter Fair's Social Media Link (if any)"
					/>
				</div>
			</div>

			<div class="form-control">
				<label for="camperSpotMap" class="label">Camper Spot Map</label>
				<input type="file" id="camperSpotMap" class="input" accept=".jpg, .png, .jpeg" required />
			</div>

			<div class="form-control">
				<button type="submit" class="btn btn-primary">Register Fair</button>
			</div>
		</form>
	</div>
</body>
