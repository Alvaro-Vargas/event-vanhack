const event_cards = [
  {
    id: 0,
    premium: false,
    image: 'https://images.unsplash.com/photo-1573774335460-e02ee39f62ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80',
    type: 'MeetUp',
    title: 'MeetUp Porto Alegre',
    description: 'Culpa anim minim exercitation in cillum.  Deserunt laboris ad est nisi qui eu ipsum magna nostrud nisi nisi cupidatat.',
    date: {
      day: 20,
      month: 'June'
    },
    location: 'Porto Alegre, BR',
    deadline: 'June 10, 2020',
    applied: false,
  },
  {
    id: 1,
    premium: false,
    image: 'https://images.unsplash.com/photo-1573497019414-e44d0759d00e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    type: 'Leap',
    title: 'VanHack Leap',
    description: 'Culpa anim minim exercitation in cillum.  Deserunt laboris ad est nisi qui eu ipsum magna nostrud nisi nisi cupidatat.',
    date: {
      day: 10,
      month: 'July'
    },
    location: 'Online',
    deadline: 'July 01, 2020',
    applied: false,
  },
  {
    id: 2,
    premium: false,
    image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    type: 'Mission',
    title: 'Recruiting Mission',
    description: 'Culpa anim minim exercitation in cillum.  Deserunt laboris ad est nisi qui eu ipsum magna nostrud nisi nisi cupidatat.',
    date: {
      day: 15,
      month: 'August'
    },
    location: 'Online',
    deadline: 'Aug. 10, 2020',
  },
  {
    id: 3,
    premium: false,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    type: 'Hackaton',
    title: 'Toronto VanHackaton',
    description: 'Culpa anim minim exercitation in cillum.  Deserunt laboris ad est nisi qui eu ipsum magna nostrud nisi nisi cupidatat.',
    date: {
      day: 25,
      month: 'September'
    },
    location: 'Online',
    deadline: 'Sept. 15, 2020',
  },
  {
    id: 4,
    premium: true,
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    type: 'Webinar',
    title: 'Europe Market',
    description: 'Culpa anim minim exercitation in cillum.  Deserunt laboris ad est nisi qui eu ipsum magna nostrud nisi nisi cupidatat.',
    date: {
      day: 22,
      month: 'October'
    },
    location: 'Online',
    deadline: 'Oct. 12, 2020',
  },
  {
    id: 5,
    premium: false,
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    type: 'Webinar',
    title: 'Diversity in the workplace',
    description: 'Culpa anim minim exercitation in cillum.  Deserunt laboris ad est nisi qui eu ipsum magna nostrud nisi nisi cupidatat.',
    date: {
      day: 09,
      month: 'November'
    },
    location: 'Online',
    deadline: 'Nov. 01, 2020',
  },
]

var cards = document.getElementById('cards');
var modal = document.getElementById('modal');
// Get modal information
var modal_type = document.getElementById('modal-type');
var modal_img = document.getElementById('modal-image');
var modal_title =  document.getElementById('modal-title');
var modal_p = document.getElementById('modal-p');
var modal_button = document.getElementById('modal-button')
var modal_information = document.getElementById('modal-information')

function createCard(obj){
  // CREATE CARD
  var card = document.createElement("div");
  card.classList.add("card")
  card.setAttribute('id', `${obj.id}`);

  // Premium
  if(obj.premium === true) {
    var isPremium = document.createElement('div');
    isPremium.classList.add('ribbon');
    isPremium.innerText = 'VanHack Premium';
    card.appendChild(isPremium);
  }
  
  // EVENT IMAGE
  var img = document.createElement('img') ;
  img.src = obj.image;
  card.appendChild(img)

  // EVENT TYPE
  var span = document.createElement('span')
  span.classList.add(`event-type`);
  span.classList.add(`${obj.type}`);
  span.innerText = obj.type;
  card.appendChild(span)

  // EVENT NAME
  var event_name = document.createElement('h1');
  event_name.innerText = obj.title;
  card.appendChild(event_name);

  // Event Description
  var event_description = document.createElement('p');
  event_description.classList.add('description');
  event_description.innerText = obj.description;
  card.appendChild(event_description);

  //  INFORMATIONS
  var information = document.createElement('div');
  information.classList.add('information');
    // SPECS
    var specs = document.createElement('div');
    specs.classList.add('specs');
    var location = document.createElement('p');
    var deadline = document.createElement('p');
    var location_info = obj.location;
    var deadline_info = obj.deadline;
    location.innerHTML = `<strong>Location:</strong> ${location_info}`;
    deadline.innerHTML = `<strong>Deadline:</strong> ${deadline_info}`;
    specs.appendChild(location);
    specs.appendChild(deadline);
    information.appendChild(specs);
    
    // DATE
    var date = document.createElement('div');
    date.classList.add('date')
    var month = document.createElement('h3');
    var day = document.createElement('h1');
    month.innerText = obj.date.month;
    day.innerText = obj.date.day;
    date.appendChild(month);
    date.appendChild(day);
    information.appendChild(date)
    
  card.appendChild(information);

  // CARD BOTTOM
  var card_bottom = document.createElement('div');
  card_bottom.classList.add('card-bottom');
  var button = document.createElement('button');
  button.innerText = 'See Details';
  button.setAttribute('id', `${obj.id}`);

  card_bottom.appendChild(button);
  card.appendChild(card_bottom);

  // RETURN
  return card;
}

// Manipulate Modal Information
function createModal(obj){
  // type
  modal_type.classList.add(obj.type)
  // IMG
  modal_img.src = obj.image;
  // Title
  modal_title.innerText = obj.title;
  // p
  modal_p.innerText = obj.description;

  if(obj.applied === true) {
    modal_button.disabled = true;
    modal_button.innerText = 'You are enrolled';
  } else {
    modal_button.disabled = false;
    modal_button.innerText = 'Apply';
  }
  modal_button.setAttribute('name', obj.id);

  if(obj.premium) {
    var premium = document.getElementById('modal-premium');
    premium.innerHTML = 'This is a premium event <a href="">check our plans</a>';
  }
}

// Close modal
var close = document.getElementById('close');
close.addEventListener('click', (event) => {
  modal.classList.add('hidden');
  modal_type.className = '';
  modal_type.classList.add('modal-top');
})

// Apply to event
modal_button.addEventListener('click', (e) => {
  if(event_cards[e.target.name].premium){
    modal_information.innerHTML = "<h1>Sorry! This event is exclusive to premium members.</h1>"
    modal_information.classList.add('show');
    modal_information.classList.add('fail');
    setTimeout(() => {
      modal_information.classList.remove('show');
      modal_information.classList.remove('fail');
    }, 1500)
  }else {
    event_cards[e.target.name].applied = true;
    modal_button.disabled = true;
    modal_button.innerText = 'You are enrolled';
    modal_information.innerHTML = "<h1>You were successfully enrolled!</h1>"
    modal_information.classList.add('show');
    modal_information.classList.add('success');
    setTimeout(() => {
      modal_information.classList.remove('show');
      modal_information.classList.remove('success');
    }, 1500)
  }
  
})

for(let event of event_cards) {
  var card = createCard(event);
  cards.appendChild(card);
}

var buttons = cards.querySelectorAll('button')
for(let button of buttons) {
    button.addEventListener('click', (event) => {
    createModal(event_cards[event.target.id]);
    modal.classList.remove('hidden');
  })
}


