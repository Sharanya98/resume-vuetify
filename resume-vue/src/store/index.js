
import { createStore } from 'vuex'
import Localbase from 'localbase'


// docs: https://github.com/dannyconnell/localbase#disable-the-gorgeous-logs
let db = new Localbase('db')
db.config.debug = false

// Vue.use(Vuex)

const  store = createStore({


    state(){
      return{
           // added State

   
            education: [
              {
                  id:0,
                  schoolName: '',
                  degree: '',
                  startYear:' ',
                  startMonth: '',
                 
              }],
              work: 
                [{
                    id:0,
                    companyName: '',
                    position: '',
                    startYear:' ',
                    startMonth: '',
                   
                }],
           }
           
      },
     
     
     
  
    mutations: {  // works with 'commit' key: this.$store.commit('deleteTask', id)
      doneTask(state, id) {
        let task = state.tasks.filter(task => task.id === id)[0]
        task.done = !task.done
      },
      deleteTask(state, id) {
        state.tasks = state.tasks.filter(task => task.id !== id)
      },
      addTask(state, newTask) {
        state.tasks.push(newTask)
      },
      //deletd work
      deleteWork(state, id) {
        state.work = state.work.filter(work => work.id !== id)
      },
      //deleted education
      deleteEducation(state, id) {
        state.education = state.education.filter(education => education.id !== id)
      },
      deleteWork(state, id) {
        state.work = state.work.filter(work => work.id !== id)
      },
     //added work
     addWork(state, newWork) {
      state.work.push(newWork)
    },
    //   added Education
      addEducation(state, newEdu) {
        
        state.education.push(newEdu)
      },
      showSnackbar(state, text) {
        if (state.snackbar.show) {
          state.snackbar.show = false
        }
        setTimeout(() => {
          state.snackbar.show = true
          state.snackbar.text = text
        }, 300)
      },
      updateTaskTitle(state, payload) {
        let task = state.tasks.filter(task => task.id === payload.id)[0]
          task.title = payload.title
      },
      updateTaskDueDate(state, payload) {
        let task = state.tasks.filter(task => task.id === payload.id)[0]
        task.dueDate = payload.dueDate
      },
      setSearch(state, value) {
        state.search = value
      },
      toggleSorting(state) {
        state.sorting = !state.sorting
      }, 
      setTasks(state, tasks) {
        state.tasks = tasks
      },
      //set education
      setEdu(state,education){
        state.education =  education
      },
      //set work
      setWork(state,work){
        state.work =  work
      }
    },
    actions: { // works with 'dispatch' key: this.$store.dispatch('deleteTask', id)
      addTask({ state, commit }, newTaskTitle) {
        if (newTaskTitle.trim() === '') {
          return
        }
        let max = {
          id: 0
        }
        if (state.tasks.length > 0) {
          max = state.tasks.reduce(function(prev, current) {
            return (prev.id > current.id) ? prev : current
          })
        }
        const newTask = {
          id: max.id + 1,
          title: newTaskTitle.trim(),
          done: false,
          dueDate: null
        }
        db.collection('tasks').add(newTask).then(() => {
          commit('addTask', newTask)
          commit('showSnackbar', 'Oh, gosh, another one!')
        })
      },
    //   addedwork  function
      addWork({ state, commit }, workValues) {
       
        let max = {
          id: 0
        }
        if (state.work.length > 0) {
          max = state.work.reduce(function(prev, current) {
            return (prev.id > current.id) ? prev : current
          })
        }
        const newWork = {
          id:max.id + 1,
          companyName: workValues.value.companyName,
          position:workValues.value.position,
          startYear:workValues.value.startYear,
          startMonth: workValues.value.startMonth,
         
        }
        db.collection('work').add(newWork).then(() => {
          commit('addWork', newWork)
          
        })
      },
      //   addeducation function
      addEducation({ state, commit }, educationValues) {
       
        let max = {
          id: 0
        }
        if (state.education.length > 0) {
          max = state.education.reduce(function(prev, current) {
            return (prev.id > current.id) ? prev : current
          })
        }
        const newEdu = {
          id:max.id + 1,
          schoolName: educationValues.value.schoolName,
          degree:educationValues.value.degree,
          startYear:educationValues.value.startYear,
          startMonth: educationValues.value.startMonth,
         
        }
        db.collection('education').add(newEdu).then(() => {
          commit('addEducation', newEdu)
          
        })
      },
      deleteTask({ commit }, id) {
        
        db.collection('tasks').doc({ id: id }).delete().then(() => {
          commit('deleteTask', id)
          commit('showSnackbar', 'Well done, delete another shit!')
        })
      },
      deleteEducation({ commit }, id) {
      
        db.collection('education').doc({ id:id }).delete().then(() => {
          commit('deleteEducation', id)
        
          
        })
      },
      deleteWork({ commit }, id) {
      
        db.collection('work').doc({ id:id }).delete().then(() => {
          commit('deleteWork', id)
        
          
        })
      },
      doneTask({ state, commit }, id) {
        let task = state.tasks.filter(task => task.id === id)[0]
        db.collection('tasks').doc({ id: id }).update({
          done: !task.done
        }).then(() => {
          commit('doneTask', id)
          commit('showSnackbar', 'Yes, one less!')
        })
      },
      updateTaskTitle({ commit }, payload) {
        db.collection('tasks').doc({ id: payload.id }).update({
          title: payload.title
        }).then(() => {
          commit('updateTaskTitle', payload)
          commit('showSnackbar', 'Task updated')
        })
      },
      updateTaskDueDate({ commit }, payload) {
        db.collection('tasks').doc({ id: payload.id }).update({
          dueDate: payload.dueDate
        }).then(() => {
          commit('updateTaskDueDate', payload)
          commit('showSnackbar', 'Task due date updated')
        })
      },
      getTasks({ commit }) {
        db.collection('tasks').get().then(tasks => { // get from localbase
          commit('setTasks', tasks) // set into vuex memory storage
        })
      },
      //getting data
      getEdu({ commit }) {
        db.collection('education').get().then(eduvalue => { // get from localbase
          commit('setEdu', eduvalue)
          console.log("getedu",eduvalue) // set into vuex memory storage
        })
      },
      setEdu({ commit }, education) {
        db.collection('education').set(education) // set new sort tasks
        commit('setEdu', education)
      },
      //getting data
      getWork({ commit }) {
        db.collection('work').get().then(workvalue => { // get from localbase
          commit('setEdu', workvalue)
          console.log("getwork",workvalue) // set into vuex memory storage
        })
      },
      setWork({ commit }, education) {
        db.collection('work').set(work) // set new sort tasks
        commit('setEdu', work)
      },
      setTasks({ commit }, tasks) {
        db.collection('tasks').set(tasks) // set new sort tasks
        commit('setTasks', tasks)
      }
    },
    getters: {
      tasksFiltered(state) {
        if (!state.search) {
          return state.tasks
        }
        return state.tasks.filter(task => 
          task.title.toLocaleLowerCase().includes(state.search.toLocaleLowerCase())
        )
      }
    }
  })




  export default store
  