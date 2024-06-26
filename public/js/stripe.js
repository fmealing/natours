/* eslint-disable */
import axios from "axios";
import { showAlert } from "./alerts";
const stripe = Stripe("pk_test_BUkd0ZXAj6m0q0jMyRgBxNs00PPtgvjjr");

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from api
    const session = await axios(
      `http://127.0.0.1:8000/api/v1/bookings/checkout-session/${tourId}`,
    );
    console.log(session);

    // 2) Create the checkout form + charge the credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.err(err);
    showAlert("error ", err);
  }
};
