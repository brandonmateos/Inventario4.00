export class Inventario {
    constructor() {
        this.lista = null;
    }

    agregarProducto(producto){
        if (this.lista == null) {
            this.lista = producto;
        } else {
            let temp = this.lista;
            let temp2 = this.lista;
            while (temp != null) {
                temp2 = temp;
                temp = temp.next;
            }
            temp2.next = producto;
            producto.prev = temp2;
        }
    }

    devolverLista() {
        return this.lista;
    }

    eliminarProducto(codigo) {
        if (this.lista == null) {
            return "No hay productos en el inventario";
        } else {
            let temp = this.lista;
            while (temp != null) {
                if (temp.codigo == codigo) {
                    let str = temp;
                    if (temp.prev == null) {
                        this.lista = temp.next;
                        this.lista.prev = null;
                    } else if (temp.next == null) {
                        temp.prev.next = null;
                    } else {
                        temp.prev.next = temp.next;
                        temp.next.prev = temp.prev;
                    }
                    return str;
                }
                temp = temp.next;
            }
            return false;
        }
    }

    buscarProducto(codigo) {
        if (this.lista == null) {
            return "No hay productos en el inventario";
        } else {
            let temp = this.lista;
            while (temp != null) {
                if (temp.codigo == codigo) {
                    return temp;
                }
                temp = temp.next;
            }
            return false;
        }

    }

    ordenarLista() {
        if (this.lista == null) {
            return "No hay productos en el inventario";
        } else {
            let temp = this.lista;
            let temp2 = this.lista;
            while (temp != null) {
                temp2 = temp.next;
                while (temp2 != null) {
                    if (Number(temp.codigo) > Number(temp2.codigo)) {
                        let aux = temp.codigo;
                        temp.codigo = temp2.codigo;
                        temp2.codigo = aux;
                    }
                    temp2 = temp2.next;
                }
                temp = temp.next;
            }
        }
    }



}