import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY =
	'pk_test_51FuF7eIPPgvjk0N7xHDc2GFokwxKZAMMK19jSvRHsLPPyGfhULBv3kiLi2iES0nt05HC3Hj354MccoudgnmSpwE40000IrdfUX';

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	);
}
