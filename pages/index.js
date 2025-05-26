import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";


function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}
export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();
  const meetsupCollection = db.collection("meetsup");
  const meetups = await meetsupCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image:meetup.image,
        id:meetup._id.toString()
      })),
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
