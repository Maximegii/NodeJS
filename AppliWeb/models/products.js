import db from "../util/database.js";

class product {
    constructor(id, name, price, description, img){
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.img = img;
    }
    save() {
        return db.execute('INSERT INTO product (name, price, description, img) VALUES (?, ?, ?, ?)', [this.name, this.price, this.description, this.img]);
    }

    update() {
        return db.execute('UPDATE product SET name = ?, price = ?, description = ?, img = ? WHERE id = ?', [this.name, this.price, this.description, this.img, this.id]);
    }

    static fetch(productId) {
        return db.execute('SELECT * FROM product WHERE id = ?', [productId]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM product');
    }

    static delete(productId) {
        return db.execute('DELETE FROM product WHERE id = ?', [productId]);
    }
}
export default product;