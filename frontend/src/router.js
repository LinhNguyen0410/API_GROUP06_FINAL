import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{
            path: "/",
            alias: "/students-list",
            name: "students",
            component: () =>
                import ("./components/StudentList")
        },
        {
            path: "/students/:id",
            name: "student-update",
            component: () =>
                import ("./components/StudentUpdate")
        },
        {
            path: "/add-info",
            name: "add-info",
            component: () =>
                import ("./components/AddStudent")
       },

       // Class
       {
            path: "/class-list",
            alias: "/class-list",
            name: "class-list",
            component: () =>
                import ("./view/ClassList")
        },
        {
            path: "/classes/:id",
            name: "class-update",
            component: () =>
                import ("./view/ClassUpdate.vue")
        },
        {
            path: "/add-class",
            name: "add-class",
            component: () =>
                import ("./components/AddClass")
       },
       // {
       //      path: "/upload",
       //      name: "UploadImage",
       //      component: () =>
       //          import ("./components/UploadImage")
       // },

    ]
});