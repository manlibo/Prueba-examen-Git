//const rl = require('readline-sync');

class Mensajeria {
    #data = [
        ["Amet Ltd", "muy bueno", 38, 0],
        ["Diam Lorem Auctor Consulting", "malo", 43, 0],
        ["iaculis institute", "aceptable", 19, 0],
        ["Nullam Vitae Diam Ltd", "muy malo", 8, 0],
        ["Ac Mattis LLP", "aceptable", 24, 0],
        ["Orci Sem PC", "regular", 76, 0],
        ["Magnis Dis Parturient Company", "aceptable", 97, 0],
        ["Duis A industries", "muy bueno", 52, 0],
        ["Maecenas Limited", "malo", 42, 0],
        ["Fermentum Fermentum inc.", "muy bueno", 96, 0],
        ["Phasellus institute", "bueno", 23, 0],
        ["Magna Ut inc.", "regular", 57, 0],
        ["Tempus Non Lacinia Corp.", "bueno", 65, 0],
        ["Aliquet Lobortis industries", "malo", 52, 0],
        ["Pretium Neque Company", "regular", 36, 0],
        ["Sed Foundation", "muy bueno", 83, 0],
        ["Penatibus Et LLC", "aceptable", 87, 0],
        ["Erat Consulting", "muy malo", 75, 0],
        ["Tristique Pharetra Company", "bueno", 69, 0],
        ["Elementum Lorem Ut Foundation", "malo", 87, 0],
        ["Elementum At Egestas Limited", "muy malo", 4, 0],
        ["Magna Suspendisse industries", "aceptable", 39, 0],
        ["Nec Tempus Scelerisque industries", "muy bueno", 51, 0],
        ["Nulla integer Ltd", "bueno", 61, 0],
        ["Litora Company", "regular", 27, 0],
        ["Ridiculus Mus institute", "malo", 11, 0],
        ["Ut Nec Urna Consulting", "regular", 83, 0],
        ["At Augue institute", "regular", 99, 0],
        ["Sed Molestie Sed LLP", "bueno", 25, 0],
        ["Auctor Quis Corporation", "aceptable", 25, 0],
        ["Eros Nam Consequat institute", "regular", 20, 0],
        ["Vestibulum institute", "muy malo", 95, 0],
        ["imperdiet Ornare Consulting", "regular", 96, 0],
        ["Senectus Et Netus inc.", "muy bueno", 88, 0],
        ["Lectus A Limited", "bueno", 95, 0],
        ["Lorem Luctus Ut LLC", "muy bueno", 49, 0],
        ["integer LLP", "aceptable", 88, 0],
        ["Elementum Dui Quis Company", "aceptable", 38, 0],
        ["Nisi Magna LLP", "regular", 51, 0],
        ["Lectus Cum Sociis incorporated", "regular", 52, 0],
        ["Non Quam Foundation", "muy malo", 65, 0],
        ["interdum Enim Consulting", "muy malo", 68, 0],
        ["Nec Ltd", "muy bueno", 3, 0],
        ["Luctus LLP", "aceptable", 72, 0],
        ["Dolor Limited", "aceptable", 66, 0],
        ["Facilisis Non LLC", "muy malo", 30, 0],
        ["Adipiscing Lobortis inc.", "regular", 41, 0],
        ["Tellus institute", "regular", 81, 0],
        ["Tortor Consulting", "malo", 14, 0],
        ["Erat Corporation", "bueno", 50, 0],
        ["Ornare incorporated", "bueno", 75, 0],
        ["Ornare Facilisis Eget Associates", "muy bueno", 32, 0],
        ["Fusce Dolor Quam Associates", "muy bueno", 1, 0],
        ["Mauris inc.", "muy bueno", 8, 0],
        ["Nonummy ipsum Company", "bueno", 6, 0],
        ["Lectus LLP", "muy malo", 79, 0],
        ["Cras Lorem Lorem Consulting", "aceptable", 53, 0],
        ["Gravida Praesent Foundation", "regular", 34, 0],
        ["Lacus Mauris Non inc.", "aceptable", 61, 0],
        ["Metus in Nec Corporation", "muy malo", 54, 0],
        ["imperdiet Dictum incorporated", "muy malo", 39, 0],
        ["Curabitur Vel Consulting", "aceptable", 14, 0],
        ["Amet Consectetuer Foundation", "malo", 86, 0],
        ["Turpis Ltd", "regular", 50, 0],
        ["Cras incorporated", "muy bueno", 24, 0],
        ["Commodo At Limited", "regular", 7, 0],
        ["Sed Corp.", "regular", 70, 0],
        ["integer incorporated", "bueno", 86, 0],
        ["Nec Limited", "malo", 40, 0],
        ["Aliquam Nisl industries", "regular", 23, 0],
        ["Sed Sapien Nunc inc.", "muy bueno", 94, 0],
        ["Nunc incorporated", "muy malo", 80, 0],
        ["Pellentesque institute", "muy malo", 55, 0],
        ["Auctor Odio Corp.", "malo", 57, 0],
        ["Dictum industries", "muy bueno", 35, 0],
        ["Sit Foundation", "aceptable", 67, 0],
        ["Ullamcorper institute", "regular", 36, 0],
        ["Sit Amet Ornare industries", "muy malo", 2, 0],
        ["Mi inc.", "bueno", 89, 0],
        ["Velit in incorporated", "bueno", 25, 0],
        ["Non Lacinia Ltd", "muy malo", 81, 0],
        ["Luctus industries", "malo", 5, 0],
        ["Urna Vivamus Molestie Consulting", "aceptable", 24, 0],
        ["Aenean Eget Corp.", "bueno", 43, 0],
        ["Odio Etiam Ligula Company", "muy malo", 1, 0],
        ["Lacus Ut Ltd", "malo", 19, 0],
        ["Magna Company", "malo", 53, 0],
        ["Suscipit Consulting", "muy bueno", 39, 0],
        ["Risus Duis A incorporated", "malo", 75, 0],
        ["Convallis Erat Consulting", "muy bueno", 5, 0],
        ["Libero LLP", "muy malo", 11, 0],
        ["Eu Limited", "bueno", 36, 0],
        ["Sed Tortor Ltd", "muy malo", 92, 0],
        ["Ut Tincidunt Orci Company", "aceptable", 82, 0],
        ["Est Company", "bueno", 89, 0],
        ["Fusce LLC", "muy malo", 2, 0],
        ["Proin Vel Foundation", "aceptable", 83, 0],
        ["Ut ipsum LLC", "muy bueno", 18, 0],
        ["Dolor Elit Limited", "regular", 10, 0],
        ["Arcu Aliquam Ultrices institute", "bueno", 85, 0]
    ];
    arrayValoracion = ["muy malo", "malo", "regular", "aceptable", "bueno", "muy bueno"];
    constructor(data, arrayValoracion) {
        this.#data = data;
        this.arrayValoracion = arrayValoracion;
    }
    #esMejor() {
        for (let i = 0; i < this.#data.length; i++) {
            if (this.#data[i][1] == "muy malo") {
                this.#data[i].push(1);
            } else if (this.#data[i][1] == "malo") {
                this.#data[i].push(2);
            } else if (this.#data[i][1] == "regular") {
                this.#data[i].push(3);
            } else if (this.#data[i][1] == "aceptable") {
                this.#data[i].push(4);
            } else if (this.#data[i][1] == "bueno") {
                this.#data[i].push(5);
            } else if (this.#data[i][1] == "muy bueno") {
                this.#data[i].push(6);
            }
        }
        return this.#data;
    }
    #ordenaValoracion() {

        let n, i, k, aux;
        n = this.#data.length;
        // Algoritmo de burbuja
        for (k = 1; k < n; k++) {
            for (i = 0; i < (n - k); i++) {
                if (this.#data[i][4] < this.#data[i + 1][4]) {
                    aux = this.#data[i];
                    this.#data[i] = this.#data[i + 1];
                    this.#data[i + 1] = aux;
                }
            }
        }

        return this.#data // Mostramos, por consola, la lista ya ordenada
    }
    #actualizaRanking() {
        for (let i = 0; i < this.#data.length; i++) {
            this.#data[i][3] = i + 1 + "º";
        }
        return this.#data;
    }
    #ordenaServicios() {

        let n, i, k, aux;
        n = this.#data.length;
        // Algoritmo de burbuja
        for (k = 1; k < n; k++) {
            for (i = 0; i < (n - k); i++) {
                if (this.#data[i][2] < this.#data[i + 1][2]) {
                    aux = this.#data[i];
                    this.#data[i] = this.#data[i + 1];
                    this.#data[i + 1] = aux;
                }
                this.#ordenaValoracion(); //Para poder ordenar los servicios dentro de cada valoración
            }
        }
        return this.#data // Mostramos, por consola, la lista ya ordenada
    }
    get dataGet1() {
        this.#esMejor();
        return this.#data
    }
    get dataGet2() {
        this.#ordenaValoracion();
        return this.#data
    }
    get dataGet3() {
        this.#actualizaRanking();
        return this.#data
    }
    get dataGet4() {
        this.#ordenaServicios();
        return this.#data
    }
}
let data1 = new Mensajeria([
    ["Amet Ltd", "muy bueno", 38, 0],
    ["Diam Lorem Auctor Consulting", "malo", 43, 0],
    ["iaculis institute", "aceptable", 19, 0],
    ["Nullam Vitae Diam Ltd", "muy malo", 8, 0],
    ["Ac Mattis LLP", "aceptable", 24, 0],
    ["Orci Sem PC", "regular", 76, 0],
    ["Magnis Dis Parturient Company", "aceptable", 97, 0],
    ["Duis A industries", "muy bueno", 52, 0],
    ["Maecenas Limited", "malo", 42, 0],
    ["Fermentum Fermentum inc.", "muy bueno", 96, 0],
    ["Phasellus institute", "bueno", 23, 0],
    ["Magna Ut inc.", "regular", 57, 0],
    ["Tempus Non Lacinia Corp.", "bueno", 65, 0],
    ["Aliquet Lobortis industries", "malo", 52, 0],
    ["Pretium Neque Company", "regular", 36, 0],
    ["Sed Foundation", "muy bueno", 83, 0],
    ["Penatibus Et LLC", "aceptable", 87, 0],
    ["Erat Consulting", "muy malo", 75, 0],
    ["Tristique Pharetra Company", "bueno", 69, 0],
    ["Elementum Lorem Ut Foundation", "malo", 87, 0],
    ["Elementum At Egestas Limited", "muy malo", 4, 0],
    ["Magna Suspendisse industries", "aceptable", 39, 0],
    ["Nec Tempus Scelerisque industries", "muy bueno", 51, 0],
    ["Nulla integer Ltd", "bueno", 61, 0],
    ["Litora Company", "regular", 27, 0],
    ["Ridiculus Mus institute", "malo", 11, 0],
    ["Ut Nec Urna Consulting", "regular", 83, 0],
    ["At Augue institute", "regular", 99, 0],
    ["Sed Molestie Sed LLP", "bueno", 25, 0],
    ["Auctor Quis Corporation", "aceptable", 25, 0],
    ["Eros Nam Consequat institute", "regular", 20, 0],
    ["Vestibulum institute", "muy malo", 95, 0],
    ["imperdiet Ornare Consulting", "regular", 96, 0],
    ["Senectus Et Netus inc.", "muy bueno", 88, 0],
    ["Lectus A Limited", "bueno", 95, 0],
    ["Lorem Luctus Ut LLC", "muy bueno", 49, 0],
    ["integer LLP", "aceptable", 88, 0],
    ["Elementum Dui Quis Company", "aceptable", 38, 0],
    ["Nisi Magna LLP", "regular", 51, 0],
    ["Lectus Cum Sociis incorporated", "regular", 52, 0],
    ["Non Quam Foundation", "muy malo", 65, 0],
    ["interdum Enim Consulting", "muy malo", 68, 0],
    ["Nec Ltd", "muy bueno", 3, 0],
    ["Luctus LLP", "aceptable", 72, 0],
    ["Dolor Limited", "aceptable", 66, 0],
    ["Facilisis Non LLC", "muy malo", 30, 0],
    ["Adipiscing Lobortis inc.", "regular", 41, 0],
    ["Tellus institute", "regular", 81, 0],
    ["Tortor Consulting", "malo", 14, 0],
    ["Erat Corporation", "bueno", 50, 0],
    ["Ornare incorporated", "bueno", 75, 0],
    ["Ornare Facilisis Eget Associates", "muy bueno", 32, 0],
    ["Fusce Dolor Quam Associates", "muy bueno", 1, 0],
    ["Mauris inc.", "muy bueno", 8, 0],
    ["Nonummy ipsum Company", "bueno", 6, 0],
    ["Lectus LLP", "muy malo", 79, 0],
    ["Cras Lorem Lorem Consulting", "aceptable", 53, 0],
    ["Gravida Praesent Foundation", "regular", 34, 0],
    ["Lacus Mauris Non inc.", "aceptable", 61, 0],
    ["Metus in Nec Corporation", "muy malo", 54, 0],
    ["imperdiet Dictum incorporated", "muy malo", 39, 0],
    ["Curabitur Vel Consulting", "aceptable", 14, 0],
    ["Amet Consectetuer Foundation", "malo", 86, 0],
    ["Turpis Ltd", "regular", 50, 0],
    ["Cras incorporated", "muy bueno", 24, 0],
    ["Commodo At Limited", "regular", 7, 0],
    ["Sed Corp.", "regular", 70, 0],
    ["integer incorporated", "bueno", 86, 0],
    ["Nec Limited", "malo", 40, 0],
    ["Aliquam Nisl industries", "regular", 23, 0],
    ["Sed Sapien Nunc inc.", "muy bueno", 94, 0],
    ["Nunc incorporated", "muy malo", 80, 0],
    ["Pellentesque institute", "muy malo", 55, 0],
    ["Auctor Odio Corp.", "malo", 57, 0],
    ["Dictum industries", "muy bueno", 35, 0],
    ["Sit Foundation", "aceptable", 67, 0],
    ["Ullamcorper institute", "regular", 36, 0],
    ["Sit Amet Ornare industries", "muy malo", 2, 0],
    ["Mi inc.", "bueno", 89, 0],
    ["Velit in incorporated", "bueno", 25, 0],
    ["Non Lacinia Ltd", "muy malo", 81, 0],
    ["Luctus industries", "malo", 5, 0],
    ["Urna Vivamus Molestie Consulting", "aceptable", 24, 0],
    ["Aenean Eget Corp.", "bueno", 43, 0],
    ["Odio Etiam Ligula Company", "muy malo", 1, 0],
    ["Lacus Ut Ltd", "malo", 19, 0],
    ["Magna Company", "malo", 53, 0],
    ["Suscipit Consulting", "muy bueno", 39, 0],
    ["Risus Duis A incorporated", "malo", 75, 0],
    ["Convallis Erat Consulting", "muy bueno", 5, 0],
    ["Libero LLP", "muy malo", 11, 0],
    ["Eu Limited", "bueno", 36, 0],
    ["Sed Tortor Ltd", "muy malo", 92, 0],
    ["Ut Tincidunt Orci Company", "aceptable", 82, 0],
    ["Est Company", "bueno", 89, 0],
    ["Fusce LLC", "muy malo", 2, 0],
    ["Proin Vel Foundation", "aceptable", 83, 0],
    ["Ut ipsum LLC", "muy bueno", 18, 0],
    ["Dolor Elit Limited", "regular", 10, 0],
    ["Arcu Aliquam Ultrices institute", "bueno", 85, 0]
]);

console.log("Añadimos una valoración numérica al array");
console.log(data1.dataGet1);
console.log("Los ordenamos según su valoración");
console.log(data1.dataGet2);
console.log("Establecemos un ranking");
console.log(data1.dataGet3);
console.log("Los ordenamos por valoración y por servicio dentro de cada valoración");
console.log(data1.dataGet4);