export function quoteTotal(unitPriceCents, quantity) {
  if (!Number.isSafeInteger(unitPriceCents) || unitPriceCents < 0) throw new RangeError('Invalid unit price');
  if (!Number.isSafeInteger(quantity) || quantity < 1) throw new RangeError('Invalid quantity');
  const total = unitPriceCents * quantity;
  if (!Number.isSafeInteger(total)) throw new RangeError('Total exceeds integer precision');
  return total;
}

