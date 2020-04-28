import axios from "axios";
const url = "https://www.googleapis.com/books/v1/volumes?q="

export default {
   requestBooks: function (title) {
      const book = title.title.replace(/\s/g, '+');
      return axios.get(url + book)
   },
   getSaved: function() {
      return axios.get("/api/saved");
   },
   saveBook: function(savedBook) {
      return axios.post("/api/saved", savedBook);
   },
   deleteBook: function(id) {
      console.log("saved API")
      return axios.delete("/api/saved/" + id);
   }
}