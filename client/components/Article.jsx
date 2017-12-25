import React from 'react';

export const Article = () => (
  <article>
    <h1>Recipient</h1>
    <address contenteditable>
      <p>Some Company<br />c/o Some Guy</p>
    </address>
    <MetaTable />
    <InventoryTable />
    <a class="add">+</a>
    <BalanceTable />
  </article>
)