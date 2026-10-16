import { test } from 'node:test';
import assert from 'node:assert/strict';
import { quoteTotal } from './quote.mjs';
test('calculates quotes in integer cents', () => assert.equal(quoteTotal(1250, 3), 3750));
test('supports a free unit price', () => assert.equal(quoteTotal(0, 2), 0));
test('rejects invalid price and quantity', () => {
  for (const [price, quantity] of [[-1, 2], [1.5, 2], [100, 0], [100, 1.2], [NaN, 2]]) assert.throws(() => quoteTotal(price, quantity), RangeError);
});
test('rejects integer overflow', () => assert.throws(() => quoteTotal(Number.MAX_SAFE_INTEGER, 2), RangeError));

