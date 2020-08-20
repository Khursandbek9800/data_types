let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    participants: [{ name: "Alex" }, { name: "Ali" }],
    place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

alert(JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']));