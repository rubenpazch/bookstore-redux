import React from 'react';
import { Book } from './Book';

export default function BooksList() {
  return (
    <table>
      <thead>
        <th>
          <td>ID</td>
          <td>Title</td>
          <td>Category</td>
        </th>
      </thead>
      <tbody>
        <Book book={{}} />
      </tbody>
    </table>
  );
}
