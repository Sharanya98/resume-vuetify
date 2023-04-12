import { createStore } from "vuex";
import Localbase from "localbase";

// docs: https://github.com/dannyconnell/localbase#disable-the-gorgeous-logs
let db = new Localbase("db");
db.config.debug = false;

// Vue.use(Vuex)

const store = createStore({
  state() {
    return {
      // added State
      user: {
        name: {
          first_name: "ラビンソン",
          last_name: "タパ",
          first_name_kana: "ラビンソン",
          last_name_kana: "タパ",
        },
        sex: 0,
        birthday: "1998-08-16",
        nationality: "インド人",
        email: "rabinson.thapa@grrow.jp",
        address: {
          postal_code: "1234567",
          full_address: "試験用アドレス",
          full_address_kana: "カナ アドレス",
        },
        phone: "12345678909",
        bio: "こんにちは、私の名前はRabinson Thapaです。私はインド出身です。こんにちは、私の名前はRabinson Thapaです。私はインド出身です。こんにちは、私の名前はRabinson Thapaです。私はインド出身です。こんにちは、私の名前はRabinson Thapaです。私はインド出身です。こんにちは、私の名前はRabinson Thapaです。私はインド出身です。こんにちは、私の名前はRabinson Thapaです。私はインド出身です。こんにちは、私の名前はRabinson Thapaです。私はインド出身です。こんにちは、私の名前はRabinson Thapaです。私はインド出身です。こんにちは、私の名前はRabinson Thapaです。私はインド出身です。こんにちは、私の名前はRabinson Thapaです。私はインド出身です。こんにちは、私の名前はRabinson Thapaです。私はインド出身です。こんにちは、私の名前はRabinson Thapaです。私はインド出身です。こんにちは、私の名前はRabinson Thapaです。私はインド出身です。こんにちは、私の名前はRabinson Thapaです。私はインド出身です。",
        experience: [
          {
            companyName: "会社1",
            position: "フルスタック開発者",
            startYear: "2020",
            startMonth: "2",
            current: "0",
            description:
              "ここでフルスタック開発者として働きました。ここでフルスタック開発者として働きました。ここでフルスタック開発者として働きました。ここでフルスタック開発者として働きました。ここでフルスタック開発者として働きました。ここでフルスタック開発者として働きました。ここでフルスタック開発者として働きました。ここでフルスタック開発者として働きました。ここでフルスタック開発者として働きました。ここでフルスタック開発者として働きました。ここでフルスタック開発者として働きました。ここでフルスタック開発者として働きました。",
          },
        ],
        education: [
          {
            schoolName: "学校1",
            degre: "修士",
            startYear: "2022",
            startMonth: "2",
            current: "1",
            description:
              "ITの修士。Webビジネステクノロジーメジャー、Webシステム開発集中コース。",
          },
        ],
        your_motive:
          "私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。私の動機。",
        self_PR:
          "自己PR自己PR自己PR自己PR自己PR自己PR自己PR自己PR自己PR自己PR自己PR自己PR自己PR自己PR自己PR自己PR自己PR自己PR自己PR自己PR自己PR自己PR自己PR",
        licenses_certification: [
          {
            licenseName: "AWS",
            licenseDateYear: "2022",
            licenseDateMonth: "2",
          },
        ],
        programming_lanuage: ["HTML", "CSS", "JS", "NodeJS"],
        health_status: ["健康状態良好"],
        extra_curricular_activities: [
          {
            activityName: "アルバイト",
            totalYear: "2",
          },
        ],
        special_skills_and_hobbies: [
          {
            skillName: "何を意味するのかわかりません",
            totalYear: "3",
          },
        ],
        sports: [
          {
            sportName: "フットボール",
            totalYear: "6",
          },
        ],
      },
      response:[],

    
    };
  },

  mutations: {
    
    async submitFormData({ commit }, formData) {
      try {
        const response = await axios.post('/api/form', formData)
        commit('SET_FORM_DATA', response.data)
      } catch (error) {
        console.error(error)
      }
    },

    setPersonalData(state,personalData){
      state.user = personalData
      state.response = personalData

    },
    setLang(state,language){
        state.user = language
    },

    // works with 'commit' key: this.$store.commit('deleteTask', id)
    doneTask(state, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    addTask(state, newTask) {
      state.tasks.push(newTask);
    },
    //deletd work
    deleteWork(state, id) {
      state.work = state.work.filter((work) => work.id !== id);
    },
    //deleted education
    deleteEducation(state, id) {
      state.education = state.education.filter(
        (education) => education.id !== id
      );
    },
    deleteWork(state, id) {
      state.work = state.work.filter((work) => work.id !== id);
    },
    //added work
    addWork(state, newWork) {
      state.work.push(newWork);
    },
    //   added Education
    addEducation(state, newEdu) {
      state.education.push(newEdu);
    },
    showSnackbar(state, text) {
      if (state.snackbar.show) {
        state.snackbar.show = false;
      }
      setTimeout(() => {
        state.snackbar.show = true;
        state.snackbar.text = text;
      }, 300);
    },
    updateTaskTitle(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.title = payload.title;
    },
    updateTaskDueDate(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.dueDate = payload.dueDate;
    },
    setSearch(state, value) {
      state.search = value;
    },
    toggleSorting(state) {
      state.sorting = !state.sorting;
    },
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    //set education
    setEdu(state, education) {
      state.education = education;
    },
    //set work
    setWork(state, work) {
      state.work = work;
    },
  },
  actions: {
    setFirstname({ commit, state },payload) {
      
      commit("setFirstname", payload);
    },
    setLang({commit},payload){
      commit("setLang",payload)
    },
    setPersonalData({ commit, state },payload) {
      // state.response.push(payload)
      // console.log("response",state.response)
      commit("setPersonalData", payload);
    },
    // works with 'dispatch' key: this.$store.dispatch('deleteTask', id)
    addTask({ state, commit }, newTaskTitle) {
      if (newTaskTitle.trim() === "") {
        return;
      }
      let max = {
        id: 0,
      };
      if (state.tasks.length > 0) {
        max = state.tasks.reduce(function (prev, current) {
          return prev.id > current.id ? prev : current;
        });
      }
      const newTask = {
        id: max.id + 1,
        title: newTaskTitle.trim(),
        done: false,
        dueDate: null,
      };
      db.collection("tasks")
        .add(newTask)
        .then(() => {
          commit("addTask", newTask);
          commit("showSnackbar", "Oh, gosh, another one!");
        });
    },
    //   addedwork  function
    addWork({ state, commit }, workValues) {
      let max = {
        id: 0,
      };
      if (state.work.length > 0) {
        max = state.work.reduce(function (prev, current) {
          return prev.id > current.id ? prev : current;
        });
      }
      const newWork = {
        id: max.id + 1,
        companyName: workValues.value.companyName,
        position: workValues.value.position,
        startYear: workValues.value.startYear,
        startMonth: workValues.value.startMonth,
      };
      db.collection("work")
        .add(newWork)
        .then(() => {
          commit("addWork", newWork);
        });
    },
    //   addeducation function
    addEducation({ state, commit }, educationValues) {
      let max = {
        id: 0,
      };
      if (state.education.length > 0) {
        max = state.education.reduce(function (prev, current) {
          return prev.id > current.id ? prev : current;
        });
      }
      const newEdu = {
        id: max.id + 1,
        schoolName: educationValues.value.schoolName,
        degree: educationValues.value.degree,
        startYear: educationValues.value.startYear,
        startMonth: educationValues.value.startMonth,
      };
      db.collection("education")
        .add(newEdu)
        .then(() => {
          commit("addEducation", newEdu);
        });
    },
    deleteTask({ commit }, id) {
      db.collection("tasks")
        .doc({ id: id })
        .delete()
        .then(() => {
          commit("deleteTask", id);
          commit("showSnackbar", "Well done, delete another shit!");
        });
    },
    deleteEducation({ commit }, id) {
      db.collection("education")
        .doc({ id: id })
        .delete()
        .then(() => {
          commit("deleteEducation", id);
        });
    },
    deleteWork({ commit }, id) {
      db.collection("work")
        .doc({ id: id })
        .delete()
        .then(() => {
          commit("deleteWork", id);
        });
    },
    doneTask({ state, commit }, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      db.collection("tasks")
        .doc({ id: id })
        .update({
          done: !task.done,
        })
        .then(() => {
          commit("doneTask", id);
          commit("showSnackbar", "Yes, one less!");
        });
    },
    updateTaskTitle({ commit }, payload) {
      db.collection("tasks")
        .doc({ id: payload.id })
        .update({
          title: payload.title,
        })
        .then(() => {
          commit("updateTaskTitle", payload);
          commit("showSnackbar", "Task updated");
        });
    },
    updateTaskDueDate({ commit }, payload) {
      db.collection("tasks")
        .doc({ id: payload.id })
        .update({
          dueDate: payload.dueDate,
        })
        .then(() => {
          commit("updateTaskDueDate", payload);
          commit("showSnackbar", "Task due date updated");
        });
    },
    getTasks({ commit }) {
      db.collection("tasks")
        .get()
        .then((tasks) => {
          // get from localbase
          commit("setTasks", tasks); // set into vuex memory storage
        });
    },
    //getting data
    getEdu({ commit }) {
      db.collection("education")
        .get()
        .then((eduvalue) => {
          // get from localbase
          commit("setEdu", eduvalue);
          console.log("getedu", eduvalue); // set into vuex memory storage
        });
    },
    setEdu({ commit }, education) {
      db.collection("education").set(education); // set new sort tasks
      commit("setEdu", education);
    },
    //getting data
    getWork({ commit }) {
      db.collection("work")
        .get()
        .then((workvalue) => {
          // get from localbase
          commit("setEdu", workvalue);
          console.log("getwork", workvalue); // set into vuex memory storage
        });
    },
    setWork({ commit }, education) {
      db.collection("work").set(work); // set new sort tasks
      commit("setEdu", work);
    },
    setTasks({ commit }, tasks) {
      db.collection("tasks").set(tasks); // set new sort tasks
      commit("setTasks", tasks);
    },
  },
  getters: {
    tasksFiltered(state) {
      if (!state.search) {
        return state.tasks;
      }
      return state.tasks.filter((task) =>
        task.title
          .toLocaleLowerCase()
          .includes(state.search.toLocaleLowerCase())
      );
    },
  },
});

export default store;
