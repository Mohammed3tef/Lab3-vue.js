<template>
  <div class="container">
    <table class="table">
      <thead class="bg-dark text-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.id }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.city }}</td>
          <td><i class="fa-solid fa-pen-to-square" @click="filldata(student)" data-bs-toggle="modal"
              data-bs-target="#updatemodal"></i> | <i class="fa-solid fa-circle-xmark"
              @click="deleteStudent(student.id)"></i></td>

          <div id="updatemodal" class="modal fade" tabindex="-1">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">update Student</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3">
                      <label for="idInput" class="form-label">Id</label>
                      <input type="text" class="form-control" id="idInput" placeholder="Id" v-model="updateData.id"
                        disabled />
                    </div>
                    <div class="mb-3">
                      <label for="nameInput" class="form-label">Name</label>
                      <input type="text" class="form-control" id="nameInput" placeholder="Name"
                        v-model="updateData.name" />
                    </div>
                    <div class="mb-3">
                      <label for="cityInput" class="form-label">City</label>
                      <input type="text" class="form-control" id="cityInput" placeholder="City"
                        v-model="updateData.city" />
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button @click="editStudent" type="button" class="btn btn-primary" data-bs-dismiss="modal">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>






        </tr>

      </tbody>
      <tfoot>
        <tr>
          <th colspan="3" class="text-center">
            Students Number: {{ students.length }}
          </th>
        </tr>
      </tfoot>
    </table>



    <div class="row">
      <button data-bs-toggle="modal" href="#form" role="button" class="btn btn-primary py-2 my-1">
        Add
      </button>
    </div>
    <div id="form" class="modal fade" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add New Student</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="idInput" class="form-label">Id</label>
                <input type="text" class="form-control" id="idInput" placeholder="Id" v-model="formData.id" />
              </div>
              <div class="mb-3">
                <label for="nameInput" class="form-label">Name</label>
                <input type="text" class="form-control" id="nameInput" placeholder="Name" v-model="formData.name" />
              </div>
              <div class="mb-3">
                <label for="cityInput" class="form-label">City</label>
                <input type="text" class="form-control" id="cityInput" placeholder="City" v-model="formData.city" />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button @click="addStudent(student)" type="button" class="btn btn-primary" data-bs-dismiss="modal">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import students from "../student";

export default {
  data() {
    return {
      students:[],
      formData: {},
      updateData:{}

    };
  },
  async created(){
      const allStudents = await fetch("http://localhost:3000/students");
      this.students = await allStudents.json();
  },

  methods: {
    filldata(student){
      this.updateData.id = student.id
      this.updateData.name = student.name
      this.updateData.city = student.city
    },
    async editStudent(){

      let updateStudent = { id: this.updateData.id, name: this.updateData.name, city: this.updateData.city}

      await fetch(`http://localhost:3000/students/${this.updateData.id}`, {
        method:"PUT",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updateStudent)
    })
      this.students.find(std => std.id === this.updateData.id).name = this.updateData.name
      this.students.find(std => std.id === this.updateData.id).city = this.updateData.city
      
    },
    async deleteStudent(_id){
      if(confirm("are you sure"))
      await fetch(`http://localhost:3000/students/${_id}`, {
        method:"DELETE"
    })
    this.students = this.students.filter(std=>std.id != _id)
    },
    async addStudent() {
      
      await fetch("http://localhost:3000/students",{
          method:'POST',
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify(this.formData)
    });
      this.students.push(this.formData);
      
    },
  },
};
</script>

<style scoped>


.fa-pen-to-square{
color: blue;
cursor: pointer;
}
.fa-circle-xmark{
  color: red;
  cursor: pointer;

}
</style>