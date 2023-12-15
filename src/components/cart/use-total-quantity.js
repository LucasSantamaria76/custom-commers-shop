import { useState } from 'react';

export function useTotalQuantity(initialQuantity) {
	const [totalQuantity, setTotalQuantity] = useState(initialQuantity);

	return {
		totalQuantity,
		setTotalQuantity,
	};
}
