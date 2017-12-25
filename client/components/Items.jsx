import React from 'react';
import ItemRow from './ItemRow';

export const Items = props => (
  <tbody>
    <tr>
      <td><span contenteditable>Front End Consultation</span></td>
      <td><span contenteditable>Experience Review</span></td>
      <td><span data-prefix>$</span><span contenteditable>150.00</span></td>
      <td><span contenteditable>4</span></td>
      <td><span data-prefix>$</span><span>600.00</span></td>
    </tr>
    {props.items(item => (
      <ItemRow
        item={item.item}
        description={item.description}
        rate={item.rate}
        quantity={item.quantity}
        price={item.price}
      />
    ))}
  </tbody>
)

/**
 * @function mapStateToProps
 *
 * @param {Object} state - Redux State
 *
 * @returns {object} props
 */
const mapStateToProps = state => ({
  items: state.items
});

export default connect(mapStateToProps)(Items);