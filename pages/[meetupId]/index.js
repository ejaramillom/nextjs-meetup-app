// our-domain.com/new-meetup-id

import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/4/40/Panor%C3%A1mica_Oto%C3%B1o_Alc%C3%A1zar_de_Segovia.jpg"
      title="first meetup"
      address="Some street 5, some city"
      description="This is a first meetup"
    />
  );
}

export default MeetupDetails;
