import express from 'express';
import {v4 as uuidv4} from 'uuid';


const router = express.Router();

let users = [
    {
      firstName: 'kim12',
      lastName: 'Raj',
      email: 'kiranrajvjd@gmail.com',
      id: '1e76d801-b58c-4c0e-97ab-e019e64393e6'
    },
    {
      firstName: 'kim1',
      lastName: 'Raj',
      email: 'kiranrajvjd@gmail.com',
      id: 'c2808568-abcd-41d8-9c22-50ff5fd6d83f'
    },
    {
      firstName: 'kim',
      lastName: 'Raj',
      email: 'kiranrajvjd@gmail.com',
      id: 'd5315788-0ee6-4b9f-b612-b16ce59de257'
    }
  ];

router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
});

router.post('/', (req,res) => {

    const userReceived = req.body;
    const user = {...userReceived, id:uuidv4()};
    users.push(user);
    res.send(`New user added : ${user.firstName}`)

});

router.get('/:id', (req,res) =>{
    const { id } = req.params;
    const requestedUser = users.find((user) => {
        user.id == id;
        return user;
    })
    console.log(requestedUser, id);
    res.send(requestedUser);
});

router.delete('/:id', (req,res)=>{
    const {id} = req.params;
    users = users.filter((user) => user.id != id);
    res.send(users);
});

router.patch('/:id', (req,res)=>{
    const {id} = req.params;
    const {firstName, lastName, email} = req.body;
    const userUpdate = users.find((user) => id == user.id)
        if(firstName){
            userUpdate.firstName = firstName;
        }
        if(lastName){
            userUpdate.lastName = lastName;
        }
        if(email){
            userUpdate.email = email;
        }


    res.send(users);
})

export default router;