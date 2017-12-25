import React from 'react'

export const MetaTable = () => (
  <table class="meta">
    <tr>
      <th><span contenteditable>Invoice #</span></th>
      <td><span contenteditable>101138</span></td>
    </tr>
    <tr>
      <th><span contenteditable>Date</span></th>
      <td><span contenteditable>January 1, 2012</span></td>
    </tr>
    <tr>
      <th><span contenteditable>Amount Due</span></th>
      <td><span id="prefix" contenteditable>$</span><span>600.00</span></td>
    </tr>
  </table>
)