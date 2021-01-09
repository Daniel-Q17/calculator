const app = new Vue({
  el: "#app",
  data: {
    resultado: "0",
    operacion: "",
    vacio: true,
  },
  methods: {
    agregarNum: function (num) {
      /* El if es para que al inicio si presiona un numero no quede mal, por ejemplo si se presiona 7 
      Sin el if: "07"
      Con el if: "7"
      */
      /* if (this.vacio === true) {
        this.resultado = "";
        this.resultado = num;
        this.operacion = "";
        this.operacion = num;
      } else {
      } */
      this.resultado += num;
      this.operacion += num;

      // Evitar que muestre al final el operador; EJ: "7+"

      let split = this.resultado.split("");
      let ultimo = split.length - 1;

      switch (split[ultimo]) {
        case "1":
          this.actualizarResult();
          break;
        case "2":
          this.actualizarResult();
          break;
        case "3":
          this.actualizarResult();
          break;
        case "4":
          this.actualizarResult();
          break;
        case "5":
          this.actualizarResult();
          break;
        case "6":
          this.actualizarResult();
          break;
        case "7":
          this.actualizarResult();
          break;
        case "8":
          this.actualizarResult();
          break;
        case "9":
          this.actualizarResult();
          break;
        case "0":
          this.actualizarResult();
          break;

        default:
          break;
      }

      this.vacio = false;
    },

    //Limpiar calc
    clearCalc: function () {
      this.resultado = "0";
      this.operacion = "";
    },
    equal: function () {
      let equal = eval(this.resultado);
      this.resultado = equal;
      this.operacion = equal;
    },
    actualizarResult: function () {
      let equal = eval(this.operacion);
      this.resultado = equal;
    },
  },
});

document.addEventListener("keyup", hola);

function hola(e) {
  console.log(e);
}
