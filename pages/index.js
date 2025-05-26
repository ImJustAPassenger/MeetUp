import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: 1,
    title: "A first meetup",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT90awoHrzBfmnOsQ4zV_vU1kJmgxJsjALKNdHf4NOXeh0GclY1Wwo1LRWYmwt5y8UUDyL5Cpt1CpIiqhCyxZFPVa9nXbnRZnL5fVuiug",
    address: "Some address 5 ,1234 Some city",
    description: "This is a meetup",
  },
  {
    id: 2,
    title: "A second meetup",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT90awoHrzBfmnOsQ4zV_vU1kJmgxJsjALKNdHf4NOXeh0GclY1Wwo1LRWYmwt5y8UUDyL5Cpt1CpIiqhCyxZFPVa9nXbnRZnL5fVuiug",
    address: "Some address 5 ,1234 Some city",
    description: "This is a meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}
export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}
/* 

export async function getServerSideProps(context) {
  const req = context.req
  const res =context.res
  return {
    props: { meetsup: DUMMY_MEETUPS },

  };
} */

export default HomePage;
