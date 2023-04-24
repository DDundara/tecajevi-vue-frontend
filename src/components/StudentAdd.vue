<template>
  <div class="submit-form">
    <div v-if="!submitted">

      <div class="form-group">
        <label for="ime">Student id</label>
        <input
          type="text"
          class="form-control"
          id="StudentId"
          required
          v-model="student.StudentId"
          name="StudentId"
          v-on:click.self="somefunct('StudentId')"
        />
      </div>

      <!-- <div class="form-group">
        <label for="ime">Student id hidden</label>
        <input
          type="text"
          class="form-control"
          id="StudentIdHidd"
          required
          v-model="this.max"
          name="StudentIdHidd"
          v-on:click.self="somefunct('StudentIdHidd')"
        
        />
      </div> -->

      <!-- <div class="form-group">
        <label for="ids">Id jedan</label>
        <label for="ids" class="form-control" id="jedan">{{this.nextid()}}</label>
      </div> -->

      <div class="form-group">
        <label for="ime">Ime</label>
        <input
          type="text"
          class="form-control"
          id="ime"
          required
          v-model="student.Ime"
          name="ime"
        />
      </div>

      <div class="form-group">
        <label for="grad">Grad</label>
        <input
          class="form-control"
          id="grad"
          required
          v-model="student.Grad"
          name="grad"
        />
      </div>

      <div class="form-group" id="selectgod">
        <label for="godiste">Godine</label>
        <select name="godiste" id="godiste" class="form-control" v-model="student.Godiste">
          <option value="" disabled>Choose</option>
          <option v-for="n in range(1900,2020)" :key="n" v-bind:value="n" :selected="n==1983">{{n}}</option>
        </select>
      </div>

      <button @click="saveStudent" class="btn btn-success">Submit</button>
      <button @click="somefunct" class="btn btn-success">klini</button>
      <span v-for="n in 10" :key="n">{{ n }}</span>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="noviStudent">Add</button>
    </div>
  </div>
</template>

<script>
import StudentDataService from "../services/StudentDataService";

export default {
  name: "add-student",
  data() {
    return {
      StudentIds: [],
      students: [],
      //StudId: this.somefunct(),
      student: {
        id: null,
        StudentId: "",
        Ime: "",
        Grad: "",
        Godiste: ""        
      },
      submitted: false
      
    };
  },
  methods: {
    saveStudent() {
      console.log("stud id: " + this.student.StudentId)
      console.log("ime: " + this.student.Ime)
      console.log("grad: " + this.student.Grad)
      console.log("godiste: " + this.student.Godiste)
      var data = {
        StudentId: this.student.StudentId,
        Ime: this.student.Ime,
        Grad: this.student.Grad,
        Godiste: this.student.Godiste
      };

      StudentDataService.create(data)
        .then(response => {
          this.student.id = response.data.id;
          console.log("id: " + response.data.id)
          console.log(response.data);
          this.submitted = true;
          this.$router.push({ name: "students" });
        })
        .catch(e => {
          console.log("Greska:"+e);
        });
    },
    
    retrieveStudents() {
      StudentDataService.getAllStudents()
        .then(response => {
          //this.StudentIds = response.data;
          this.students = response.data;
          console.log(response.data);
          console.log("veL"+response.data.length);
          console.log("Makx: "+this.StudentIds.length)
          var max = response.data[0].StudentId;
          var arr = new Array();
          for(var i=0;i<response.data.length;i++){
            console.log("Response data: "+response.data[i].StudentId);
            arr.push(response.data[i].StudentId);
            this.StudentIds.push(response.data[i].StudentId);
            if(response.data[i].StudentId>max){
              max = response.data[i].StudentId;
            }
          }         
        })
        .catch(e => {
          console.log(e);
        });
        //return this.max;
        
    },

    noviStudent() {
      this.submitted = false;
      this.student = {};
    },
    range(min,max){
      var array = [],
      j = 0;
      for(var i = min; i <= max; i++){
      array[j] = i;
      j++;
      }
      return array;
      },

      somefunct(idd){
        //var neki = document.getElementById("jedan").innerHTML;
        //alert("Neki: "+neki)
        //return neki;
        //this.Max = neki;
        document.getElementById(idd).value = this.nextid();
      },

      nextid(){
        var max=this.StudentIds[0];
        for(var i=0;i<this.StudentIds.length;i++){
          if(this.StudentIds[i]>max){
            max = this.StudentIds[i];
          }
        }
        return max+1;
      }
  },
  mounted(){
    this.retrieveStudents();
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
