const fs = require('fs');

let listToDo = [];

let saveDB = () => {
    let data = JSON.stringify(listToDo);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

let loadDb = () => {
    try {
        listToDo = require('../db/data.json');
    } catch (error) {
        listToDo = [];
    }
}

let create = (description) => {
    loadDb();
    let toDo = {
        description,
        complete: false
    };
    listToDo.push(toDo);
    saveDB();
    return toDo;
}

let getList = () => {
    loadDb();
    return listToDo;
}

let update = (description, complete = true) => {
    loadDb();
    let index = listToDo.findIndex(to_do => to_do.description === description);

    if (index >= 0) {
        listToDo[index].complete = true;
        saveDB();
        return true;
    } else {
        return false;
    }
}

let deleteTask = (description) =>{
    loadDb();
    let index = listToDo.findIndex(to_do => to_do.description === description);

    if (index >= 0) {
        listToDo.splice(index,1);
        saveDB();
        return true;
    } else {
        return false;
    }
}


module.exports = {
    create,
    getList,
    update,
    deleteTask
}