import MeetupDetails from "../../components/meetups/MeetupDetails";

export default function meetupDetails() {
  return (
    <MeetupDetails
      title="A first meetup"
      image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT90awoHrzBfmnOsQ4zV_vU1kJmgxJsjALKNdHf4NOXeh0GclY1Wwo1LRWYmwt5y8UUDyL5Cpt1CpIiqhCyxZFPVa9nXbnRZnL5fVuiug"
      address="Some address 5 ,1234 Some city"
      description="This is a meetup"
    />
  );
}


export async function getStaticPaths(
) {
    return {
        fallback:false,
        path:[
            {
                params:{
                    meetupId:'m1'
                }
            },
            {
                params:{
                    meetupId:'m2'
                }
            }
        ]
    }
}

export async function getStaticProps(context) {
    const meetupId =context.params;
    console.log(meetupId)
    return    {
        props:{
            meetupData:{
                image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT90awoHrzBfmnOsQ4zV_vU1kJmgxJsjALKNdHf4NOXeh0GclY1Wwo1LRWYmwt5y8UUDyL5Cpt1CpIiqhCyxZFPVa9nXbnRZnL5fVuiug',
                id:'m1',
                title:'First meetup',
                address:'Some address, 1234 some city',
                description:'this is a meetup'
            }
        }
    }
}