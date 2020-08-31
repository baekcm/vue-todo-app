<template>
  <div id="app">
    <div class="container">
      <div class="col-md-6 offset-md-3">
        <h1 class="text-center mb-4">Todo 어플리케이션</h1>
        <input type="text" class="form-control mb-2" v-model="userInput" @keyup.enter="addNewTodo">

        <div class="list-group mb-4">
          <!-- v-for list 에 filter 사용도 가능. -->
          <!-- <template v-for="todo in todoList.filter(todo => todo.state === 'active')"> -->

          <!-- html 코드안에 javascript 연산 작업을 넣을 시 직관적이지 않으므로, script tag 로 분리한다. -->
          <!-- computed 선언을 해주면, html 코드에서 내부 변수처럼 사용할 수 있다. -->
          <!-- <template v-for="todo in activeTodoList()"> -->
          <template v-for="todo in activeTodoList">
            <!-- 2.2.0 이상에서 v-for는 key 가 필수. -->
            <todo 
              :key="todo.id"
              :label="todo.label"
              @componentclick="toggleTodoState(todo)"
            />
          </template>
        </div>

        <div class="text-right">
          <button type="button" class="btn btn-sm" @click="changeCurrentState('active')">할 일</button>
          <button type="button" class="btn btn-sm" @click="changeCurrentState('done')">완료</button>
          <button type="button" class="btn btn-sm" @click="changeCurrentState('all')">전체</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from './components/Todo';

export default {
  name: 'app',
  data() {
    return {
      userInput : '',
      todoList : [],
      //--- 출력 할 상태값
      currentState : 'active'
    }
  },
  computed : {
    //--- 화면에 출력할 항목들을 가져오는 method
    activeTodoList() {
      return this.todoList.filter(todo => this.currentState === 'all' || todo.state === this.currentState);
    }
  },
  methods : {
    //--- currentState 상태값을 변경할 method
    changeCurrentState(state) {
      this.currentState = state;
    },
    addNewTodo() {
      this.todoList.push({
        label : this.userInput,
        state : 'active'
      });
      this.userInput = '';
    },
    toggleTodoState(todo) {
      todo.state = todo.state === 'active' ? 'done' : 'active';
    },
    /* 
    ** method 라는 것은 단순히 값을 가져오기 보다는 method 호출 시
    ** 내부 값을 변경하거나, Ajax 로 외부에서 값을 읽어온다거나 하는 등의
    ** 내부 상태값을 변경시키는 용도로 사용하는것이 일반적이다.
    ** 그래서 아래의 코드를 method 로 만들기 보다는 computed 라는 Json 
    ** 객체를 만들고 아래의 method 를 그 안에 넣어준다.
    activeTodoList() {
      return this.todoList.filter(todo => todo.state === 'active');
    }
    */
  },
  components: {
    Todo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
