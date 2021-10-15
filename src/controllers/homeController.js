import db from '../models/index'
import CRUDservice from '../service/CRUDservice'
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();

        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e);
    }
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}

let postCRUD = async (req, res) => {
    let massage = await CRUDservice.createNewUser(req.body)
    console.log(massage)
    console.log(req.body)
    return res.send(req.body);
}

let displayGetCRUD = async (req, res) => {
    let data = await CRUDservice.getAllUser();
    console.log(data)
    return res.send(data)
}

module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD
}