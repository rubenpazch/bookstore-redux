import React from 'react';

export default function Book(props) {
  const { idBook, title, category } = props.book;
  return (
    <tr>
      <td>{idBook}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
}
