<template>
  <div>
    <input type="date" v-model="todoDate" />
    <input type="text" v-model="todoItem" />
    <button @click="addTodo" class="addBtn">추가</button>
  </div>
  <ul>
    <li v-for="(todo, index) in todolist" 
    :key="todo" 
    @click="complete(todo, index)"
    v-bind:class="{ completed: todo.complete }">
    <div class="index_num">{{ index + 1 }}.</div>
    <div class="todo_con">{{ todo.dates }} // {{ todo.item }}</div>
    <span @click="removeTodo(todo, index)" class="removeBtn">삭제</span>
  </li>
  </ul>
  <div></div>
</template>

<script>
export default {
  data: function() {
    return{
      todoDate:"",
      todoItem:"",
      todolist:[],
    };
  },
  methods:{
    addTodo : function() {
      console.log(this.todoItem);
      if(this.todoItem != ""){
        var obj = {
          dates : this.todoDate, 
          item : this.todoItem, 
          complete : false, 
        };
        localStorage.setItem(this.todoItem, JSON.stringify(obj));
        console.log(obj);
        this.todolist.push(obj);
        this.todoDate = "";
      }
    },
    removeTodo : function(todo, index) {
      localStorage.removeItem(todo.item);
      this.todolist.splice(index, 1);
      console.log(todo);
    },
    complete : function(todo, index) {
      todo.complete = !todo.complete;
      localStorage.removeItem(todo.item);
      localStorage.setItem(todo.complete, JSON.stringify(todo));
      console.log(todo);
    },
  },
  // created: 바로 바뀌게 만들어줌!
  created: function() {
    if(localStorage.length>0){
      for(var i=3; i<localStorage.length; i++){
        if(localStorage.key(i) !== "loglevel:webpack-dev-server")
        this.todolist.push(
          JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
      }
    }
  }
};
</script>

<style scoped>
  .completed{
    background-color: indianred;
    color: azure;
    /* text-decoration: line-through; */
  }
  .addBtn{
    border-radius: 10px;
    border: 1px solid indianred;
    background-color: #fff;
    color: indianred;
    padding: 5px;
    margin-left: 10px;
    cursor: pointer;
  }
  .removeBtn{
    border-radius: 10px;
    border: 1px solid #777;
    border-color: #777;
    color: #777;
    padding: 5px;
    margin-left: 10px;
    font-size: 14px;
  }
  li.completed .removeBtn{
    border-color: #fff;
    color: #fff;
  }
  input[type="date"]{
    padding: 5px;
    border: 1px solid indianred;
    border-radius: 10px;
    margin-right: 5px;
    color: indianred;
    outline: none;
  }
  input[type="text"]{
    padding: 5px;
    border: 1px solid indianred;
    border-radius: 10px;
    outline: none;
  }
  ul{
    max-width: 30%;
    min-width: 400px;
    margin: 30px auto;
  }
  ul>li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    cursor: pointer;
    border-bottom: 1px solid #ddd;
    list-style: none;
    border-radius: 10px;
  }

</style>