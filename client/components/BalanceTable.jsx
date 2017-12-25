import React from 'react';

export const BalanceTable = () => (
  <table class="balance">
    <tr>
      <th><span contenteditable>Total</span></th>
      <td><span data-prefix>$</span><span>600.00</span></td>
    </tr>
    <tr>
      <th><span contenteditable>Amount Paid</span></th>
      <td><span data-prefix>$</span><span contenteditable>0.00</span></td>
    </tr>
    <tr>
      <th><span contenteditable>Balance Due</span></th>
      <td><span data-prefix>$</span><span>600.00</span></td>
    </tr>
  </table>
);

/**
 * @function mapStateToProps
 *
 * @param {Object} state - Redux State
 *
 * @returns {object} props
 */
const mapStateToProps = state => ({
  amountPaid: state.amountPaid,
  items: state.items
});

export default connect(mapStateToProps)(Items);