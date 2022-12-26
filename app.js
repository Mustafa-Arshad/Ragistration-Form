// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, ref, set, onChildAdded } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDsJujp7J7KqaLoL5MIifZnFBaO8uXHmk0",
    authDomain: "fir-auth-2f4df.firebaseapp.com",
    projectId: "fir-auth-2f4df",
    storageBucket: "fir-auth-2f4df.appspot.com",
    messagingSenderId: "80315625983",
    appId: "1:80315625983:web:b471556568115cefdef7ca",
    measurementId: "G-9N1EBS0XQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

var inp = document.getElementById("name");
var lastName = document.getElementById("lname");
var email = document.getElementById("email");
var number = document.getElementById("num");
var qual = document.getElementById("qual");
var cnic = document.getElementById("cnic");
var password = document.getElementById("password");
var select = document.getElementById("sel");
var parent = document.getElementById("parent");

window.saveTask = function () {
    var obj = {
        task: inp.value,
        task2: lastName.value,
        task3: email.value,
        task4: number.value,
        task5: qual.value,
        task6: cnic.value,
        task7: password.value,
        task8: select.value
    }
    console.log(obj);
    obj.id = Math.random().toString().slice(2);
    const taskRef = ref(database, `tasks/${obj.id}/`);
    const task2Ref = ref(database, `tasks/${obj.id}/`);
    const task3Ref = ref(database, `tasks/${obj.id}/`);
    const task4Ref = ref(database, `tasks/${obj.id}/`);
    const task5Ref = ref(database, `tasks/${obj.id}/`);
    const task6Ref = ref(database, `tasks/${obj.id}/`);
    const task7Ref = ref(database, `tasks/${obj.id}/`);
    const task8Ref = ref(database, `tasks/${obj.id}/`);
    set(taskRef, obj);
    set(task2Ref, obj);
    set(task3Ref, obj);
    set(task4Ref, obj);
    set(task5Ref, obj);
    set(task6Ref, obj);
    set(task7Ref, obj);
    set(task8Ref, obj);

};

function getData() {
    var dataList = [];
    const taskRef = ref(database, "tasks/");
    const task2Ref = ref(database, "tasks/");
    const task3Ref = ref(database, "tasks/");
    const task4Ref = ref(database, "tasks/");
    const task5Ref = ref(database, "tasks/");
    const task6Ref = ref(database, "tasks/");
    const task7Ref = ref(database, "tasks/");
    const task8Ref = ref(database, "tasks/");
    const tasksRef = [taskRef, task2Ref, task3Ref, task4Ref, task5Ref, task6Ref, task7Ref, task8Ref];

    onChildAdded(tasksRef, function (dt) {
        dataList.push(dt.val());
        console.log(dataList)
        parent.innerHTML = "";
        for (var i = 0; i < dataList.length; i++) {
            parent.innerHTML += `<li>${dataList[i].tasks}</li>`
        }
    })
}
getData();


