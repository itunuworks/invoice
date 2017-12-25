import React from 'react';
import ItemRow from './ItemRow';

export const InventoryTable = () => (
  <table class="inventory">
    <thead>
      <tr>
        <th><span contenteditable>Item</span></th>
        <th><span contenteditable>Description</span></th>
        <th><span contenteditable>Rate</span></th>
        <th><span contenteditable>Quantity</span></th>
        <th><span contenteditable>Price</span></th>
      </tr>
    </thead>
    <Items />
  </table>
)