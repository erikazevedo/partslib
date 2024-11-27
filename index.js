export default {

    data() {
        return {
          message: 'yee',
          count: 1,
          cats: [],
          subcats: [],
        };
      },

      methods: {
        doSomething() {
            console.log('something')
          },
        async getData() {
            // const r = await fetch('http://127.0.0.1:3000/categories');
            // const data = await r.json();
            // this.cats = data.data;
            this.cats = [{name: 1}, {name: 2}, {name: 3}];
        }
      },

      mounted() {
        this.getData();
      }
}



// document.querySelector("#update-list").addEventListener("click", (e) => {
//     send('update');
// });
// document.querySelector("#test-db").addEventListener("click", (e) => {
//     send('test-db');
// });


// async function send(command) {
//     let r = await fetch("http://127.0.0.1:3000/categories", {
//         method: 'POST',
//         body: JSON.stringify({
//             command: command
//         })
//     });
//     let data = await r.json();
//     console.log(data);
// }