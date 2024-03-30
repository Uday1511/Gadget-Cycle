import { db } from '../firbase/config';
import { collection, query, where, getDocs } from 'firebase/firestore';

const fetchTrackingInfo = async (trackingNumber, email) => {
  try {
    const trackingNumberInt = parseInt(trackingNumber)
    const donationsRef = collection(db, 'donations');
    const q = query(donationsRef, where('tracking_no', '==', trackingNumberInt), where('email', '==', email));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log('No matching documents.');
      return null;
    }

    const donationsData = querySnapshot.docs[0].data();

    return {
      fedexTrackingNo: donationsData.fedex_tracking_no,
      statusNo: donationsData.delivery_status_no
    };
  } catch (error) {
    console.error('Error fetching tracking data: ', error);
    throw new Error(error.message);
  }
};

export default fetchTrackingInfo;
