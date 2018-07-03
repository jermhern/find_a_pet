import fetchJsonp from 'fetch-jsonp';
import { isValidZip, showAlert } from './validate';

const petForm = document.querySelector('#pet-form');

petForm.addEventListener('submit', fetchAnimals);

// Fetch Animals From API
function fetchAnimals(e) {
  e.preventDefault();

  // Get User Input
  const animal = document.querySelector('#animal').value;
  const zip = document.querySelector('#zip').value;

  //validate zip
  if (!isValidZip(zip)) {
  	showAlert('please enter a valid zipcode!', 'danger');
  	return;
  }

  // Fetch Pets
  fetchJsonp(`http://api.petfinder.com/pet.find?format=json&key=8b1b71173dac030527a6ddc9b88192c4&animal=${animal}&location=${zip}&callback=callback`,
    {
      jsonpCallbackFunction: 'callback'
    })
    .then(res => res.json())
    .then(data => showAnimals(data.petfinder.pets.pet))
    .catch(err => console.log(err));
}

// show listings of pets
function showAnimals(pets) {
	const results = document.querySelector('#results'); 

	// clear first
	results.innerHTML = '';

	// loop through pets
	pets.forEach((pet) => {
		const div = document.createElement('div');
		div.classList.add('card' ,'card-body', 'mb-3');
		console.log(pet);
		// $t is part of the API so we need to include it
		div.innerHTML = ` 

		<div class="row">
			<div class="col-sm-6">
				<h4>${pet.name.$t} (${pet.age.$t})</h4>
				${pet.breeds.breed.$t ? `<p class="text-secondary">${pet.breeds.breed.$t}</p>`:`<p class="text-secondary">No breed information available.</p>`}
				${pet.contact.address1.$t ? `<p>${pet.contact.address1.$t} ${pet.contact.city.$t} ${pet.contact.state.$t} ${pet.contact.zip.$t}</p>`: `<p>No address information available.</p>`}
				<ul class="list-group">
					<li class="list-group-item">Phone: ${pet.contact.phone.$t}</li>
					${pet.contact.email.$t ? `<li class="list-group-item">Email: ${pet.contact.email.$t}</li>`: `<li class="list-group-item">No email availeble.</li>`}
					<li class="list-group-item">Shelter ID: ${pet.shelterId.$t}</li>
				</ul>
				<p class="text-secondary m-3">${pet.description.$t}</p>
			</div>

			<div class="col-sm-6 text-center">
				<img class="img-fluid rounded-circle mt-2" src="${pet.media.photos.photo[3].$t}">
			</div>
		</div>

		`;

		results.appendChild(div);
	}); 
}