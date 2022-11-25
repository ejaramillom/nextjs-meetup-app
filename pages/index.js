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

function HomePage(props) {
  return <MeetupList meetups={loadedMeetups} />;
}

// this only works in pages files
// this is one of the main features of nextjs

export async function getStaticProps() {
  // fetch data from an API
  // always return an object
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

// if nextjs finds this function, nextjs creates a pre render of the page
// this is safe code, this does not go in the frontend
// this will never reach the client

export default HomePage;
