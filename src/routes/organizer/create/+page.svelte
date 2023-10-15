<script lang="ts">
		let fairDays = [
			newDay()
		],
		fairName,
		website,
		location,
		fairStartDate,
		fairEndDate,
		socialMedia,
		camperSpotMap;
	function newDay() {
		return {
			id: performance.now(),
			day: '2023-1-16',
			openingTime: '',
			closingTime: '',
			events: [newEvent()],
			selectedEvent: 0
		}}
	function newEvent() {
		return {
			id: performance.now(),
			name: 'Example Event - Fireworks',
			description: 'Half hour firework display for free!',
			location: 'Horse Race Track',
			startTime: '21:00',
			endTime: '21:30',
		}
	}
</script>

<svelte:head>
	<title>FairDash - Register a Fair</title>
</svelte:head>

<body class="bg-base-200">
	<div class="container mx-auto p-6 bg">
		<h1 class="text-2xl font-semibold mb-4">Register Your Fair</h1>
		<form>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div class="form-control">
					<label for="fairName" class="label">Fair Name</label>
					<input
						type="text"
						id="fairName"
						class="input"
						placeholder="Enter Fair Name"
						required
						bind:value={fairName}
					/>
				</div>
				<div class="form-control">
					<label for="website" class="label">Website</label>
					<input
						type="url"
						id="website"
						class="input"
						placeholder="Enter Fair Website (if any)"
						bind:value={website}
					/>
				</div>
			</div>

			<div class="form-control">
				<label for="location" class="label">Location</label>
				<input
					type="text"
					id="location"
					class="input"
					placeholder="Enter Fair Location"
					required
					bind:value={location}
				/>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div class="form-control">
					<label for="startDate" class="label">Start Date</label>
					<input type="date" id="startDate" class="input" required bind:value={fairStartDate} />
				</div>
				<div class="form-control">
					<label for="endDate" class="label">End Date</label>
					<input type="date" id="endDate" class="input" required bind:value={fairEndDate} />
				</div>
			</div>

			<div class="form-control">
				<label for="socialMedia" class="label">Social Media</label>
				<input
					type="text"
					id="socialMedia"
					class="input"
					placeholder="Enter Fair's Social Media Link (if any)"
					bind:value={socialMedia}
				/>
			</div>

			<div class="form-control">
				<label for="camperSpotMap" class="label">Camper Spot Map (A URL to it)</label>
				<input
					type="text"
					id="camperSpotMap"
					class="input"
					placeholder="https://imagehoster.com/some-logo.png"
					required
					bind:value={camperSpotMap}
				/>
			</div>
			<br />

			<div class="mb-6">
				<h2 class="text-lg font-semibold">Fair Days</h2>
				{#each fairDays as fairDay, i}
					<div id="fairDays" class="flex flex-wrap">
						<div class="w-full md:w-1/3 bg-base-200 p-4 rounded mb-4">
							<div class="text-2xl text-center">Day {i + 1}</div>
							<div class="form-control">
								<label for="day" class="label">Day</label>
								<input
									type="date"
									class="input"
									placeholder="Day"
									required
									bind:value={fairDays[i].day}
								/>
							</div>
							<div class="form-control">
								<label for="openingTime" class="label">Opening Time</label>
								<input type="time" class="input" required bind:value={fairDays[i].openingTime} />
							</div>
							<div class="form-control">
								<label for="closingTime" class="label">Closing Time</label>
								<input type="time" class="input" required bind:value={fairDays[i].closingTime} />
							</div>
							<div class="form-control">
								<label for="events" class="label">Events</label>
								<select class="input" bind:value={fairDays[i].selectedEvent}>
									{#each fairDay.events as fairEvent, i}
										<option value={i}>{fairEvent.name}</option>
									{/each}
								</select>
							</div>
							<br />
							<button
								type="button"
								class="btn btn-secondary"
								on:click={() => {
									fairDay.events = [...fairDay.events, newEvent() ];
									fairDay.selectedEvent = fairDay.events.length - 1;
								}}
							>
								Add Event
							</button>
							<button
								type="button"
								class="btn btn-primary text-right"
								on:click={() => {
									if (fairDays.length === 1) {
										return alert('You need at least 1 day');
									}
									fairDays = fairDays.filter((d) => d.id !== fairDay.id);
								}}>Delete Day</button
							>
						</div>

						<div class="w-full md:w-1/4 p-4 bg-base-200 rounded mb-4 md:ml-4">
							<div class="text-2xl text-center">{fairDay.events[fairDay.selectedEvent].name}</div>

							<div class="form-control">
								<label for="eventName" class="label">Event Name</label>
								<input
									type="text"
									class="input"
									placeholder="Event Name"
									required
									bind:value={fairDays[i].events[fairDay.selectedEvent].name}
								/>
							</div>
							<div class="form-control">
								<label for="eventDescription" class="label">Event Description</label>
								<textarea
									class="textarea"
									rows="4"
									placeholder="Event Description"
									required
									bind:value={fairDays[i].events[fairDay.selectedEvent].description}
								/>
							</div>
							<div class="form-control">
								<label for="eventLocation" class="label">Event Location</label>
								<input
									type="text"
									class="input"
									placeholder="Event Location"
									required
									bind:value={fairDays[i].events[fairDay.selectedEvent].location}
								/>
							</div>
							<div class="form-control">
								<label for="eventDay" class="label">Event Day</label>
								<input
										type="date"
										class="input"
										required
										bind:value={fairDays[i].events[fairDay.selectedEvent].day}
								/>
							</div>
							<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div class="form-control">
									<label for="eventStartTime" class="label">Start Time</label>
									<input
										type="time"
										class="input"
										required
										bind:value={fairDays[i].events[fairDay.selectedEvent].startTime}
									/>
								</div>
								<div class="form-control">
									<label for="eventEndTime" class="label">End Time</label>
									<input
										type="time"
										class="input"
										required
										bind:value={fairDays[i].events[fairDay.selectedEvent].endTime}
									/>
								</div>
							</div>
							<br />
							<button
								type="button"
								class="btn btn-primary text-right"
								on:click={() => {
									if (fairDay.events.length === 1) {
										return alert('You must have at least 1 event.');
									}
									fairDays[i].events = fairDays[i].events.filter((e) => e.id !== fairDay.events[fairDay.selectedEvent].id);
									if (fairDay.selectedEvent === 0) {
										fairDay.selectedEvent++;
									} else {
										fairDay.selectedEvent--;
									}
								}}>Delete Event</button
							>
						</div>
					</div>
				{/each}
				<div class="mt-4">
					<button
						type="button"
						class="btn btn-secondary"
						id="addDayButton"
						on:click={() => {
							fairDays = [...fairDays, newDay() ];
						}}
					>
						Add Day
					</button>
				</div>
			</div>
			<br />
			<div class="form-control">
				<button type="submit" class="btn btn-accent">Register Fair</button>
			</div>
		</form>
	</div>
</body>
