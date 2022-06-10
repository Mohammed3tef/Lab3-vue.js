<template>
  <div id="mainApp">
    <div class="form-group col-md-6">
      <form method="get" action="#" v-if="isvisible == true">
        <div class="container col-8 row d-flex justify-content-center">
          <div class="input-group input-group-sm mb-3 offset-4 row">
            <div class="col-12">
              Name<input type="text" class="form-control form-control-sm" aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm" id="name" v-model="user.name" />
            </div>
          </div>
          <div class="input-group input-group-sm mb-3 offset-4 row">
            <div class="col-12">
              Age<input type="number" class="form-control form-control-sm" aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm" id="age" v-model="user.age" />
            </div>
          </div>
          <div class="input-group input-group-sm mb-3 offset-4 row">
            <div class="col-12">
              Address
              <select class="form-select" v-model="user.address" name="address">
                <option :value="address" v-for="address in userData.address">{{ address }}</option>

              </select>
            </div>
          </div>
          <div class="input-group input-group-sm mb-3 offset-4 row">
            <div class="col-12">
              Track
              <select class="form-select" v-model="user.track" name="track">
                <option :value="track" v-for="track in userData.track">{{ track }}</option>

              </select>
            </div>
          </div>

          <div class="input-group input-group-sm mb-3 offset-4 row">
            <div class="col-12">
              Courses
              <div v-for="courses in userData.courses">
                <input type="checkbox" :value="courses"
                  v-model="user.courses"><label>&nbsp;&nbsp;&nbsp;{{ courses }}</label>
              </div>
            </div>
          </div>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Add
          </button>
        </div>

      </form>
    </div>


    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Your Informations</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="col-10 m-2">
              <label>Name: </label>
              <label>{{ user.name }}</label>
            </div>
            <div class="col-10 m-2">
              <label>Age: </label>
              <label>{{ user.age }}</label>
            </div>
            <div class="col-10 m-2">
              <label>Address: </label>
              <label>{{ user.address }}</label>
            </div>
            <div class="col-10 m-2">
              <label>Track: </label>
              <label>{{ user.track }}</label>
            </div>
            <div class="col-10 m-2">
              <label>Courses: </label>
              <ul>
                <li v-for="courses in user.courses">{{ courses }}</li>
              </ul>
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

 <script>
export default {
      data: () => ({
        isvisible: true,
        user: {
          name: ' ',
          age: 0,
          address: '',
          track: '',
          courses: [],

        },
        userData: {
          address: ["Cairo", "Alex", "Ismailia"],
          track: ["OS", "SD", "Devops", "cloud"],
          courses: ["javascript", "node.js", "vue", "react", "angular"],
        }
      })
}

  </script>