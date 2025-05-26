import { MongoClient, ObjectId } from "mongodb";
import MeetupDetails from "../../components/meetups/MeetupDetails";
import Head from "next/head";

export default function MeetupDetailsPage(props) {
    const {meetupData} = props;
  return (
    <>
    <Head>
    <title>{meetupData.title} </title>
     <meta
     name="description"
     content={meetupData.description}
     />
     </Head>
    <MeetupDetails
      title={meetupData.title}
      image={meetupData.image}
      address={meetupData.address}
      description={meetupData.description}
      />
      </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();
  const meetsupCollection = db.collection("meetsup");

  const meetsups = await meetsupCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: meetsups.map((meetsup) => ({
      params: { meetupId: meetsup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();
  const meetsupCollection = db.collection("meetsup");
  const selectedMeetup = await meetsupCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  client.close();
  console.log("Selected meetup:", selectedMeetup);

  if (!selectedMeetup) {
    return { notFound: true };
  }
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}
