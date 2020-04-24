import React, { useState, useEffect } from "react";
import Title from "../title";
import Container from "../container";
import SubTitle from "../subtitle";
import Wrapper from "../wrapper";
import List from "../results";
import SavedBook from "../savedbooks"
import API from "../utils/API";


export default function Home() {
   const [books, setBooks] = useState([])

   useEffect(() => {
      loadBooks()
   }, [])

   function loadBooks() {
      API.getSaved()
         .then(res =>
            setBooks(res.data)
         )
         .catch(err => console.log(err));
   };

   return (
      <Wrapper>
         <Container>
            <Title />
            <SubTitle>Search for books using Google Books API</SubTitle>
         </Container>
         <Container>
            <SubTitle>Saved Books</SubTitle>
            {books.length ? (
               <List>
                  {books.map(book => (
                     <SavedBook
                        _id={book._id}
                        title={book.title}
                        authors={book.authors}
                        description={book.description}
                        image={book.image}
                        link={book.link}
                        loadBooks={loadBooks}
                     >
                     </SavedBook>
                  ))}
               </List>
            ) : (<h3>No Results to Display</h3>)}
         </Container>
      </Wrapper>
   )
}