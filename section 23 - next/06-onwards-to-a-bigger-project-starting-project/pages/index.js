import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/74/Lille_opera_face.JPG",
    address: "some address 5, some city",
    description: "this is a first meetup",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/74/Lille_opera_face.JPG",
    address: "some address 5, some city",
    description: "this is a second meetup",
  },
  {
    id: "m3",
    title: "A third meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/74/Lille_opera_face.JPG",
    address: "some address 5, some city",
    description: "this is a third meetup",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
