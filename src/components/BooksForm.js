import React from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

export default function Booksform() {
  return (
    <form>
      <label htmlFor="book-title">
        Title
        <input type="text" name="title" placeHolder="Title" />
      </label>
      <label htmlFor="book-title">
        Categorie
        <select>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
