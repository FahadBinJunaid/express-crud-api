let users = [
    { id: 1, name: "Danish", age: 22 },
    { id: 2, name: "Shahzaib", age: 21 },
    { id: 3, name: "Taha", age: 23 }
]

export const getUsers = (req, res)=>{

    if(users.length === 0){
        return res.status(404).json({
            message: "Users not found"
        })
    }


    res.json(users)
}

export const getUserById = (req, res) => {
    const id = Number(req.params.id)

    const user = users.find(data => data.id === id)

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        })
    }

    res.json(user)
}

export const createUser = (req, res)=>{
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        age: req.body.age
    }

    users.push(newUser)

    res.status(201).json(newUser)
}

export const updateUser = (req,res)=>{
    const id = Number(req.params.id)

    const user = users.find(data => data.id == id)

    if(!user)
        return res.status(404).json({
            message: "User not found"
        })

        user.name = req.body.name
        user.age = req.body.age

        res.json(user)

}

export const patchUser = (req, res) => {
    const id = Number(req.params.id)

    const user = users.find(data => data.id === id)

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        })
    }

    if (req.body.name !== undefined) {
        user.name = req.body.name
    }

    if (req.body.age !== undefined) {
        user.age = req.body.age
    }

    res.json(user)
}

export const deleteUser = (req, res) => {
    const id = Number(req.params.id)

    const user = users.find(data => data.id === id)

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        })
    }

    users = users.filter(data => data.id !== id)

    res.json({
        message: "User deleted successfully",
        user
    })
}