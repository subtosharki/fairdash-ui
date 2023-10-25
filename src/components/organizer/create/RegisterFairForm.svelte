<script lang="ts">
	import { registerFair } from '$lib/fairs/create';

	export let apikey: string;
	let fairDays = [newDay()],
		name = '',
		website = '',
		location = '',
		startDate = '',
		endDate = '',
		socialMedia = '',
		camperSpotMap = '';

	function newDay() {
		let id = performance.now();
		return {
			id,
			day: '2023-10-16',
			openingTime: '10:00',
			closingTime: '23:00',
			events: [newEvent(id)],
			updatedAt: new Date().toISOString(),
			createdAt: new Date().toISOString()
		};
	}

	function newEvent(fairDayId: number) {
		return {
			id: performance.now(),
			fairDayId,
			name: 'Example Event - Fireworks',
			description: 'Half-hour firework display for free!',
			location: 'Horse Race Track',
			day: '2023-10-16',
			startTime: '21:00',
			endTime: '21:30'
		};
	}
</script>

<div class="container mx-auto p-6 bg">
	<h1 class="text-2xl font-semibold mb-4">Register Your Fair</h1>
	<form
		on:submit={async () => {
			await registerFair(
				{
					name,
					fairDays,
					website,
					location,
					startDate,
					socialMedia,
					camperSpotMap,
					createdAt: new Date().toISOString(),
					updatedAt: new Date().toISOString(),
					endDate,
					fairEvents: fairDays.map((d) => d.events).flat()
				},
				apikey
			);
		}}
	>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<div class="form-control">
				<label for="fairName" class="label">Fair Name</label>
				<input
					type="text"
					id="fairName"
					class="input"
					placeholder="Enter Fair Name"
					required
					bind:value={name}
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
				<input type="date" id="startDate" class="input" required bind:value={startDate} />
			</div>
			<div class="form-control">
				<label for="endDate" class="label">End Date</label>
				<input type="date" id="endDate" class="input" required bind:value={endDate} />
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
		<div class="divider" />
		<div class="mb-6">
			<h2 class="text-lg font-semibold">Fair Days</h2>
			{#each fairDays as fairDay, iDay}
				<div id="fairDays" class="flex flex-wrap">
					<div class="w-full md:w-1/3 bg-base-200 p-4 rounded mb-4">
						<div class="text-2xl text-center">Day {iDay + 1}</div>
						<div class="form-control">
							<label for="day" class="label">Day</label>
							<input
								type="date"
								class="input"
								placeholder="Day"
								required
								bind:value={fairDays[iDay].day}
							/>
						</div>
						<div class="form-control">
							<label for="openingTime" class="label">Opening Time</label>
							<input type="time" class="input" required bind:value={fairDays[iDay].openingTime} />
						</div>
						<div class="form-control">
							<label for="closingTime" class="label">Closing Time</label>
							<input type="time" class="input" required bind:value={fairDays[iDay].closingTime} />
						</div>
						<br />
						<button
							type="button"
							class="btn btn-secondary"
							on:click={() => (fairDays[iDay].events = [...fairDay.events, newEvent(fairDay.id)])}
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
					{#each fairDays[iDay].events as fairEvent, iEvent}
						<div class="w-full md:w-1/4 p-4 bg-base-200 rounded mb-4 md:ml-4">
							<div class="text-2xl text-center">{fairEvent.name}</div>
							<div class="form-control">
								<label for="eventName" class="label">Event Name</label>
								<input
									type="text"
									class="input"
									placeholder="Event Name"
									required
									bind:value={fairDays[iDay].events[iEvent].name}
								/>
							</div>
							<div class="form-control">
								<label for="eventDescription" class="label">Event Description</label>
								<textarea
									class="textarea"
									rows="4"
									placeholder="Event Description"
									required
									bind:value={fairDays[iDay].events[iEvent].description}
								/>
							</div>
							<div class="form-control">
								<label for="eventLocation" class="label">Event Location</label>
								<input
									type="text"
									class="input"
									placeholder="Event Location"
									required
									bind:value={fairDays[iDay].events[iEvent].location}
								/>
							</div>
							<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div class="form-control">
									<label for="eventStartTime" class="label">Start Time</label>
									<input
										type="time"
										class="input"
										required
										bind:value={fairDays[iDay].events[iEvent].startTime}
									/>
								</div>
								<div class="form-control">
									<label for="eventEndTime" class="label">End Time</label>
									<input
										type="time"
										class="input"
										required
										bind:value={fairDays[iDay].events[iEvent].endTime}
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
									fairDay.events = fairDay.events.filter((e) => e.id !== fairEvent.id);
								}}>Delete Event</button
							>
						</div>
					{/each}
				</div>
			{/each}
			<div class="mt-4">
				<button
					type="button"
					class="btn btn-secondary"
					id="addDayButton"
					on:click={() => (fairDays = [...fairDays, newDay()])}
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
