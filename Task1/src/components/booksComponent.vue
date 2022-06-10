<template>
  <div class="container-fluid mb-5" >
    <nav class="navbar navbar-dark bg-dark align-items-baseline">
      <div class="container-fluid">
        <a href="#" @click.prevent="isWatchListVisible=false" class="navbar-brand fs-3"
          style="color: wite; text-decoration: none;">Home</a>
        <div class="d-flex align-items-baseline text-light">
          <button class="btn btn-success mx-2" @click="isWatchListVisible=true">Wish List</button>
        </div>

      </div>

    </nav>

    <div class="container-fluid mt-3" v-if="isWatchListVisible==false">
      <div class="row d-flex justify-content-around text-center">

        <div v-for="book in books" :key="book.id" style="width: 15rem; margin: 0.2rem;">
          <img :src="book.image" style="max-height: 350px;" class="card-img-top rounded-3">
          <div class="card-footer fs-6 font-weight-bold text-center">{{book.name}}
          </div>
          <div class="card-body py-0">
            <div class="book-content">
              <div class="row d-flex justify-content-around">

                <div class="col-12">
                  <span>Category </span> :
                  {{ book.category }}
                </div>
                <div class="col-12">
                  <span>Author </span> :
                  {{ book.author }}
                </div>
                <div class="col-12">
                  <span>Pages </span> :
                  <span :class="book.pages<50?'less':'more'">{{ book.pages }}</span>
                </div>
                <div class=" col-12">
                  <span>Price </span> :
                  {{handleCurrency( book.price.value) }}
                </div>
                <div class="col-12">
                  <span>ISBN </span> :
                  {{ book.ISBN }}
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <button class="btn btn-dark" :disabled="checkExist(book.id)" @click="addToList(book)">Add
              to List</button>
          </div>
        </div>
      </div>
    </div>


    <div class="container mt-3" v-if="isWatchListVisible==true">

      <div class="alert" role="alert" v-if="booksList.length==0">
        <div class="content-wrapper d-flex justify-content-center align-items-center bg-white">
          <img src="https://multivendor.amrkart.com/public/not-found.jpg" alt="there is no data to show">
        </div>
      </div>

      <div class="watchList" v-if="booksList.length>0">

        <div class="table-responsive">
          <table class="table table-hover table-bordered table-striped text-center">
            <thead>
              <tr>
                <th>ID</th>
                <th>Book Name</th>
                <th>Category</th>
                <th>Author</th>
                <th>Pages</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in booksList">
                <td>{{ item.book.id }}</td>
                <td>{{ item.book.name }}</td>
                <td>{{ item.book.category }}</td>
                <td>{{ item.book.author }}</td>
                <td>{{ item.book.pages }}</td>
                <td>{{ handleCurrency(item.book.price.value) }}</td>
                <td>
                  <button class="btn btn-danger" type="button" @click="removeFromList(item)">Remove</button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th colspan="3">Total Price:</th>
                <td colspan="3">{{handleCurrency(getTotalPrice())}}</td>
              </tr>

            </tfoot>
          </table>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import books from "../books";

export default {
  data: () => ({
    books: books,
    booksList: [],
    isWatchListVisible: false,
  }),
  methods: {
    addToList(book) {
      this.booksList.push({
        book: book,
      });
    },

    getTotalPrice() {
      let total = 0;
      for (let item of this.booksList) {
        total += item.book.price.value;
      }
      return total;
    },

    getbooksListCount() {
      return this.booksList.length;
    },

    // [ en-US --> USD,  ar-EG --> EGP, ar-SA --> SAR]

    handleCurrency(value) {
      return new Intl.NumberFormat("ar-SR", {
        style: "currency",
        currency: "SAR",
      }).format(value);
    },

    checkExist(bookID) {
      return this.booksList.some((item) => item.book.id == bookID);
    },

    removeFromList(book) {
      this.booksList.splice(
        this.booksList.findIndex((item) => item.book.id == book.book.id),
        1
      );
    },

    checkout() {
      let conf = window.confirm("Are you sure you want to checkout?");
      if (conf) {
        this.booksList = [];
      }
    },
  },
  computed: {},
  components: {},
};
</script>

<style scoped>
.less {
  color: red;
}

.more {
  color: green;
}

/* card */
.card-body span {
  font-weight: bolder;
}
</style>