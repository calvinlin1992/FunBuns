'use strict'

const db = require('APP/db')
  , { User, Product, Order, Review, OrderProduct, Promise } = db
  , { mapValues } = require('lodash')

function seedEverything() {
  const seeded = {
    products: products(),
    users: users(),
  }

  seeded.orders = orders(seeded)
  seeded.orderProducts = orderProducts(seeded)
  seeded.reviews = reviews(seeded)

  return Promise.props(seeded)
}

const users = seed(User, {
  sid: {
    email: 'sid@funbuns.com',
    first_name: 'Sid',
    last_name: 'Reddy',
    password: '1234',
  },
  anthony: {
    email: 'anthony@funbuns.com',
    first_name: 'Anthony',
    last_name: 'Watson',
    password: '1234',
  },
  calvin: {
    email: 'calvin@funbuns.com',
    first_name: 'Calvin',
    last_name: 'Lin',
    password: '1234',
  },
  shaun: {
    email: 'shaun@funbuns.com',
    first_name: 'Shaun',
    last_name: 'Elabdouni',
    password: '1234'
  },
  bob: {
    email: 'bob@funbuns.com',
    first_name: 'Bob',
    last_name: 'Willow',
    password: '1234',
    address: '911 emergency station',
    phone_number: '9119119111',
    paypal_name: 'bob@paypal.com'
  }
})

const products = seed(Product, {

  product1: {
    name: 'samurai classic',
    gender: 'M',
    color: 'jet black',
    style: 'samurai classic',
    price: '22.50',
    length: 'short',
    image_url: '/images/jetBlackShortM.jpg',
    avg_review: 4

  },
  product2: {
    name: 'princess leia',
    gender: 'M',
    color: 'bear brown',
    style: 'princess leia',
    price: '12.50',
    length: 'long',
    image_url: '/images/leiaLongM.jpg',
    avg_review: 3

  },
  product3: {
    name: 'minimane',
    gender: 'F',
    color: 'straight blonde',
    style: 'minimane',
    price: '8.45',
    length: 'long',
    image_url: '/images/blondeBunminimaneF.jpg',
    avg_review: 4

  },
  product4: {
    name: 'dread bun',
    gender: 'M',
    color: 'jet black',
    style: 'dread bun',
    price: '15.30',
    length: 'short',
    image_url: '/images/dreadShortM.jpg',
    avg_review: 5

  },
  product5: {
    name: 'samurai classic',
    gender: 'F',
    color: 'dirty blonde',
    style: 'samurai classic',
    price: '5.99',
    length: 'short',
    image_url: '/images/dirtyBlondeF.jpg',
    avg_review: 2
  }
})

const orders = seed(Order,

  ({ users }) => ({
    order1: {
      paid: true,
      status: 'shipped',
      tracking_number: '5043504385094385049843',
      user_id: users.sid.id
    },
    order2: {
      paid: false,
      status: 'processed',
      tracking_number: '09394058904385049340580',
      user_id: users.anthony.id
    },
    order3: {
      paid: false,
      status: 'cart',
      tracking_number: '98435908349866950984590',
      user_id: users.calvin.id
    },
    order4: {
      paid: true,
      status: 'delivered',
      tracking_number: '90485908349058340958093',
      user_id: users.shaun.id
    },
    order5: {
      paid: false,
      status: 'cart',
      tracking_number: '21343547546435244325',
      user_id: users.bob.id
    }
  })
)


const reviews = seed(Review,

  ({ users, products }) => ({

    product1: {
      rating: 5.0,
      text: 'this shit is fly as fuck',
      user_id: users.anthony.id,
      product_id: products.product4.id
    },

    product2: {
      rating: 4.8,
      text: 'so cost effective and cool',
      user_id: users.shaun.id,
      product_id: products.product1.id
    },

    product3: {
      rating: 2.0,
      text: 'people hate me when i wear this',
      user_id: users.sid.id,
      product_id: products.product2.id
    },

    product4: {
      rating: 3.0,
      text: 'thought i would look cooler',
      user_id: users.calvin.id,
      product_id: products.product5.id
    },

    product5: {
      rating: 2.5,
      text: 'a bird took a shit on my head',
      user_id: users.anthony.id,
      product_id: products.product3.id
    }
  })
)

const orderProducts = seed(OrderProduct,
  // We're specifying a function here, rather than just a rows object.
  // Using a function lets us receive the previously-seeded rows (the seed
  // function does this wiring for us).
  //
  // This lets us reference previously-created rows in order to create the join
  // rows. We can reference them by the names we used above (which is why we used
  // Objects above, rather than just arrays).
  ({ products, orders }) => ({
    // The easiest way to seed associations seems to be to just create rows
    // in the join table.
    /*
    'dataset1': {
      user_id: users.barack.id,    // users.barack is an instance of the User model
                                   // that we created in the user seed above.
                                   // The seed function wires the promises so that it'll
                                   // have been created already.
      thing_id: things.surfing.id  // Same thing for things.
    },*/

    'dataset-1_1': {
      order_id: orders.order1.id,
      product_id: products.product1.id
    },
    'dataset-1_4': {
      order_id: orders.order1.id,
      product_id: products.product4.id
    },
    'dataset-1_5': {
      order_id: orders.order1.id,
      product_id: products.product5.id
    },
    'dataset-2_4': {
      order_id: orders.order2.id,
      product_id: products.product4.id
    },
    'dataset-3_1': {
      order_id: orders.order3.id,
      product_id: products.product1.id
    },
    'dataset-3_2': {
      order_id: orders.order3.id,
      product_id: products.product2.id
    },
    'dataset-3_3': {
      order_id: orders.order3.id,
      product_id: products.product3.id
    },
    'dataset-3_4': {
      order_id: orders.order3.id,
      product_id: products.product4.id
    },
    'dataset-3_5': {
      order_id: orders.order3.id,
      product_id: products.product5.id
    },
    'dataset-4_2': {
      order_id: orders.order4.id,
      product_id: products.product2.id
    },
    'dataset-4_5': {
      order_id: orders.order4.id,
      product_id: products.product5.id
    },
  })
)

if (module === require.main) {
  db.didSync
    .then(() => db.sync({ force: true }))
    .then(seedEverything)
    .finally(() => process.exit(0))
}

class BadRow extends Error {
  constructor(key, row, error) {
    super(error)
    this.cause = error
    this.row = row
    this.key = key
  }

  toString() {
    return `[${this.key}] ${this.cause} while creating ${JSON.stringify(this.row, 0, 2)}`
  }
}

// seed(Model: Sequelize.Model, rows: Function|Object) ->
//   (others?: {...Function|Object}) -> Promise<Seeded>
//
// Takes a model and either an Object describing rows to insert,
// or a function that when called, returns rows to insert. returns
// a function that will seed the DB when called and resolve with
// a Promise of the object of all seeded rows.
//
// The function form can be used to initialize rows that reference
// other models.
function seed(Model, rows) {
  return (others = {}) => {
    if (typeof rows === 'function') {
      rows = Promise.props(
        mapValues(others,
          other =>
            // Is other a function? If so, call it. Otherwise, leave it alone.
            typeof other === 'function' ? other() : other)
      ).then(rows)
    }

    return Promise.resolve(rows)
      .then(rows => Promise.props(
        Object.keys(rows)
          .map(key => {
            const row = rows[key]
            return {
              key,
              value: Promise.props(row)
                .then(row => Model.create(row)
                  .catch(error => { throw new BadRow(key, row, error) })
                )
            }
          }).reduce(
          (all, one) => Object.assign({}, all, { [one.key]: one.value }),
          {}
          )
      )
      )
      .then(seeded => {
        console.log(`Seeded ${Object.keys(seeded).length} ${Model.name} OK`)
        return seeded
      }).catch(error => {
        console.error(`Error seeding ${Model.name}: ${error} \n${error.stack}`)
      })
  }
}

module.exports = Object.assign(seed, { users, products, orders, reviews, orderProducts })
