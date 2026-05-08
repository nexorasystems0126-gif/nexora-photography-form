export const formatPrice = (value) => (typeof value === 'number' ? `₦${value.toLocaleString('en-NG')}` : 'Price on request');
