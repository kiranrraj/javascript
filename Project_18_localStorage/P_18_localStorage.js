const idb = (function () {
    let db = null;
    let objectStore = null;
    let submitbtn = document.querySelector('.submit');
    let printbtn = document.querySelector('.print');
    let updatebtn = document.querySelector('.update');
    let deletebtn = document.querySelector('.delete');

    function getValue() {
        // Get data from input fields
        let id = document.querySelector('#id').value;
        let name = document.querySelector('#name').value;
        let place = document.querySelector('#place').value;
        let email = document.querySelector('#email').value;

        // Create student object
        let studentObj = {
            id,
            name,
            place,
            email
        }

        return studentObj;
    }


    let dbOpenReq = indexedDB.open('studentDB', 1);

    dbOpenReq.addEventListener("error", (err) => {
        console.log(err);
    });

    dbOpenReq.addEventListener("success", (ev) => {
        db = ev.target.result;
        console.log("Success", db);
    });

    dbOpenReq.addEventListener('upgradeneeded', (ev) => {
        db = ev.target.result;
        if (!db.objectStoreNames.contains('studentStore2021')) {
            db.createObjectStore('studentStore2021', { keyPath: "id" });
        }
        console.log("Upgrade", db);
    });


    // Add values to databaase
    submitbtn.addEventListener("click", (ev) => {
        ev.preventDefault();

        let stdObj = getValue();

        // create Transaction
        let tx = db.transaction('studentStore2021', 'readwrite');
        tx.oncomplete = (ev) => {
            console.log(ev);
        }

        tx.onerror = (err) => {
            console.log(err)
        }

        let store = tx.objectStore('studentStore2021');
        let request = store.add(stdObj);

        request.addEventListener('success', (ev) => {
            console.log("Write Data to Database")
        });

        request.addEventListener('error', (err) => {
            console.log("Error Occured", err);
        })

    })

    // List the data from the database
    printbtn.addEventListener("click", (ev) => {
        let tx = db.transaction('studentStore2021', 'readonly');
        tx.oncomplete = (ev) => {

        }

        let store = tx.objectStore('studentStore2021');
        let req = store.getAll();

        req.addEventListener('success', (ev) => {
            console.log(ev.target)
            let request = ev.target;
            let out = request.result;
            console.log("Getting data from database");
            console.table(out);
        });

        req.addEventListener('error', (err) => {
            console.log("Error Occured", err);
        })
    });

    // Update database
    updatebtn.addEventListener("click", (ev) => {
        ev.preventDefault()

        let stdObj = getValue();
        let { id } = getValue();

        if (id) {
            // create Transaction
            let tx = db.transaction('studentStore2021', 'readwrite');
            tx.oncomplete = (ev) => {
                console.log(ev);
            }

            tx.onerror = (err) => {
                console.log(err)
            }

            let store = tx.objectStore('studentStore2021');
            let request = store.put(stdObj);

            request.addEventListener('success', (ev) => {
                console.log("Data Updated !!!!")
            });

            request.addEventListener('error', (err) => {
                console.log("Error Updating !!!!!!", err);
            })
        }

    });


    // Delete database contents
    deletebtn.addEventListener("click", (ev) => {
        ev.preventDefault()

        let { id } = getValue();

        if (id) {
            // create Transaction
            let tx = db.transaction('studentStore2021', 'readwrite');
            tx.oncomplete = (ev) => {
                console.log(ev);
            }

            tx.onerror = (err) => {
                console.log(err)
            }

            let store = tx.objectStore('studentStore2021');
            let request = store.delete(id);

            request.addEventListener('success', (ev) => {
                console.log(`Delete data with id ${id}`)
            });

            request.addEventListener('error', (err) => {
                console.log("Error Occured", err);
            })
        }

    })
})();