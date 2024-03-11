# Tutorial5

* *Date Created*: 11 MARCH 2024
* *Last Modification Date*: 11 MARCH 2024
* *Tutorial URL*: <https://main--tutorial4-jaskaran-5709.netlify.app/>
* *Git URL*: <https://git.cs.dal.ca/singh16/csci-5709-tutorials/-/tree/main/tutorial5?ref_type=heads>

## Authors

* [Jaskaran Singh](js356337@dal.ca)

## Deployment

I created a mirror repository on github from gitlab and deployed on netlify. Configued the built settings of Netlify as required and the website is live on above URL.

## Built With

Node.js + Express.js


## Sources Used

### routes/userRoutes.js

```
// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.addUser);
router.put('/:id', userController.updateUser);

module.exports = router;


```

The code above was created by adapting the code in [Express Tutorial Part 4: Routes and controllers](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes) as shown below:


```
// wiki.js - Wiki route module.

const express = require("express");
const router = express.Router();

// Home page route.
router.get("/", function (req, res) {
  res.send("Wiki home page");
});

// About page route.
router.get("/about", function (req, res) {
  res.send("About this wiki");
});

module.exports = router;

```

### controllers/userController.js

```
// controllers/userController.js
const User = require('../models/user');
const generateId = require('../utils/generateId')

let users = [];

const getAllUsers = (req, res) => {
    try {
        res.json({
            message: "Users retrieved",
            success: true,
            users: users
        });
    } catch (error) {
        console.error("Error in getAllUsers:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

const getUserById = (req, res) => {
    try {
        const userId = req.params.id;
        const user = users.find(u => u.id === userId);
        if (user) {
            res.json({
                success: true,
                user: user
            });
        } else {
            res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
    } catch (error) {
        console.error("Error in getUserById:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

const addUser = (req, res) => {
    try {
        const { email, firstName } = req.body;
        if (!email || !firstName) {
            return res.status(400).json({
                success: false,
                message: "Email and firstName are required"
            });
        }
        const newUser = new User(email, firstName, generateId());
        users.push(newUser);
        res.json({
            message: "User added",
            success: true
        });
    } catch (error) {
        console.error("Error in addUser:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

const updateUser = (req, res) => {
    try {
        const userId = req.params.id;
        const { email, firstName } = req.body;
        const userIndex = users.findIndex(u => u.id === userId);
        if (userIndex !== -1) {
            if (!email && !firstName) {
                return res.status(400).json({
                    success: false,
                    message: "At least one of email or firstName must be provided for update"
                });
            }
            if (email) {
                users[userIndex].email = email;
            }
            if (firstName) {
                users[userIndex].firstName = firstName;
            }
            res.json({
                message: "User updated",
                success: true
            });
        } else {
            res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
    } catch (error) {
        console.error("Error in updateUser:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser
};
```

The code above was created by adapting the code in [NodeJS + Express part 5: Routes and Controllers](https://dev.to/ericchapman/nodejs-express-part-5-routes-and-controllers-55d3) as shown below:

```
const products = require('../data.js')

const getProducts = ((req, res) => {
    res.json(products)
})

const getProduct = ((req, res) => {
    const id = Number(req.params.productID)
    const product = products.find(product => product.id === id)

        if (!product) {
        return res.status(404).send('Product not found')
    }
    res.json(product)
})

const createProduct = ((req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    }
    products.push(newProduct)
    res.status(201).json(newProduct)
})

const updateProduct = ((req, res) => {
    const id = Number(req.params.productID)
    const index = products.findIndex(product => product.id === id)
    const updatedProduct = {
        id: products[index].id,
        name: req.body.name,
        price: req.body.price
    }

    products[index] = updatedProduct
    res.status(200).json('Product updated')
})

const deleteProduct = ((req, res) => {
    const id = Number(req.params.productID)
    const index = products.findIndex(product => product.id === id)
    products.splice(index,1)
    res.status(200).json('Product deleted')
})

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}
```


