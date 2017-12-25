import React from 'react'

export const ItemRow = props => (
  <tr>
    <td><a class="cut">-</a><span contenteditable>{props.item}</span></td>
    <td><span contenteditable>{props.description}</span></td>
    <td><span data-prefix>$</span><span contenteditable>{props.rate}</span></td>
    <td><span contenteditable>{props.quantity}</span></td>
    <td><span data-prefix>$</span><span>{props.price}</span></td>
  </tr>
)