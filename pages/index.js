// our-domain.com/

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/40/Panor%C3%A1mica_Oto%C3%B1o_Alc%C3%A1zar_de_Segovia.jpg",
    address: "Some address 5, 12345 some city",
    description: "this is a first meetup",
  },
  {
    id: "m2",
    title: "second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/50/Bodiam-castle-10My8-1197.jpg",
    address: "Some address 2, 523423 some city",
    description: "this is a second meetup",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
