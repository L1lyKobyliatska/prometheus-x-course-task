import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signin from './components/singin/singin';
import Header from './components/header/header';
import BooksList from './components/book-list/books-list';
import SpecificBook from './components/specific-book/specific-book';
import Purchase from './components/purchase/purchase';
import FullCart from './components/fullCart/fullCart';
import './App.css';
import Footer from './components/footer/footer';
import ErrorBoundary from './components/errorBoundaries/errorBoudaries';
import books from './books.json';
import { BooksProvider } from './context/booksProvider';
import { CartProvider } from './context/cartProvider';

function App() {

  return (
    <CartProvider value={JSON.parse(localStorage.getItem('selectedBooks'))}>
      <BooksProvider value={books}>
        <Header />
        <Routes>
          <Route path='prometheus-x-course-task' element={<Signin />} />
          <Route path='prometheus-x-course-task/books-list' element={<BooksList />} />
          <Route path='specific-book' element={<SpecificBook />} />
          <Route path='purchase' element={<Purchase />} />
          <Route path='fullCart' element={<FullCart />} />
        </Routes>
        <Footer />
      </BooksProvider>
    </CartProvider>
  );
}

export default App;
