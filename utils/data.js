import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'John',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "NIKE Patike JUMPMAN TWO TREY",
      slug: "nike-patike-jumpman-two-trey",
      category: "Shoes",
      image: "/images/nikeP1.jpg",
      isFeatured: true,
      featuredImage: "/images/nikeP2.jpg",
      price: 139,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet bibendum libero vitae pharetra. Duis nec finibus leo. Ut hendrerit, purus et finibus eleifend, lectus velit dignissim neque, sed ultricies arcu libero a quam. Quisque quis efficitur lacus, in sollicitudin nibh. Phasellus id blandit leo, bibendum blandit erat. Pellentesque id lacinia augue. Quisque luctus condimentum odio mollis molestie. Sed eu suscipit augue, sed bibendum velit. Vivamus rutrum nibh at eros consectetur, sed tristique arcu volutpat.",
    },
    {
      name: "NIKE Patike AIR FLIGHT 89 GCEL",
      slug: "patike-air-flight-89-gce",
      category: "Shoes",
      image: "/images/nikeP2.jpg",
      isFeatured: true,
      featuredImage: "/images/banner2.jpg",
      price: 149,
      brand: "Nike",
      rating: 4.2,
      numReviews: 10,
      countInStock: 30,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet bibendum libero vitae pharetra. Duis nec finibus leo. Ut hendrerit, purus et finibus eleifend, lectus velit dignissim neque, sed ultricies arcu libero a quam. Quisque quis efficitur lacus, in sollicitudin nibh. Phasellus id blandit leo, bibendum blandit erat. Pellentesque id lacinia augue. Quisque luctus condimentum odio mollis molestie. Sed eu suscipit augue, sed bibendum velit. Vivamus rutrum nibh at eros consectetur, sed tristique arcu volutpat.",
    },
    {
      name: "adidas Patike Superstar",
      slug: "adidas-patike-superstar",
      category: "Shoes",
      image: "/images/adidasP1.jpg",
      price: 90,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet bibendum libero vitae pharetra. Duis nec finibus leo. Ut hendrerit, purus et finibus eleifend, lectus velit dignissim neque, sed ultricies arcu libero a quam. Quisque quis efficitur lacus, in sollicitudin nibh. Phasellus id blandit leo, bibendum blandit erat. Pellentesque id lacinia augue. Quisque luctus condimentum odio mollis molestie. Sed eu suscipit augue, sed bibendum velit. Vivamus rutrum nibh at eros consectetur, sed tristique arcu volutpat.",
    },
    {
      name: "adidas Patike ASTIR",
      slug: "adidas-patike-astir",
      category: "Shoes",
      image: "/images/adidasP2.jpg",
      price: 90,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet bibendum libero vitae pharetra. Duis nec finibus leo. Ut hendrerit, purus et finibus eleifend, lectus velit dignissim neque, sed ultricies arcu libero a quam. Quisque quis efficitur lacus, in sollicitudin nibh. Phasellus id blandit leo, bibendum blandit erat. Pellentesque id lacinia augue. Quisque luctus condimentum odio mollis molestie. Sed eu suscipit augue, sed bibendum velit. Vivamus rutrum nibh at eros consectetur, sed tristique arcu volutpat.",
    },
    {
      name: "PUMA Patike PUMA RS 3.0 SUEDE",
      slug: "puma-patike-puma-rs-3-0-suede",
      category: "Shoes",
      image: "/images/pumaP1.jpg",
      price: 95,
      brand: "Puma",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet bibendum libero vitae pharetra. Duis nec finibus leo. Ut hendrerit, purus et finibus eleifend, lectus velit dignissim neque, sed ultricies arcu libero a quam. Quisque quis efficitur lacus, in sollicitudin nibh. Phasellus id blandit leo, bibendum blandit erat. Pellentesque id lacinia augue. Quisque luctus condimentum odio mollis molestie. Sed eu suscipit augue, sed bibendum velit. Vivamus rutrum nibh at eros consectetur, sed tristique arcu volutpat.",
    },
    {
      name: "PUMA Patike Mirage Sport Remix",
      slug: "puma-patike-mirage-sport-remix",
      category: "Shoes",
      image: "/images/pumaP2.jpg",
      price: 75,
      brand: "Puma",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet bibendum libero vitae pharetra. Duis nec finibus leo. Ut hendrerit, purus et finibus eleifend, lectus velit dignissim neque, sed ultricies arcu libero a quam. Quisque quis efficitur lacus, in sollicitudin nibh. Phasellus id blandit leo, bibendum blandit erat. Pellentesque id lacinia augue. Quisque luctus condimentum odio mollis molestie. Sed eu suscipit augue, sed bibendum velit. Vivamus rutrum nibh at eros consectetur, sed tristique arcu volutpat.",
    },
    {
      name: "NAPAPIJRI Majica S-GUIRO 002",
      slug: "napapijri-majica-s-guiro-002",
      category: "Shirt",
      image: "/images/napapijriM1.jpg",
      price: 75,
      brand: "Napapijri",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet bibendum libero vitae pharetra. Duis nec finibus leo. Ut hendrerit, purus et finibus eleifend, lectus velit dignissim neque, sed ultricies arcu libero a quam. Quisque quis efficitur lacus, in sollicitudin nibh. Phasellus id blandit leo, bibendum blandit erat. Pellentesque id lacinia augue. Quisque luctus condimentum odio mollis molestie. Sed eu suscipit augue, sed bibendum velit. Vivamus rutrum nibh at eros consectetur, sed tristique arcu volutpat.",
    },
    {
      name: "NAPAPIJRI Majica SALIS SS SUM 002",
      slug: "napapijri-majica-salis-ss-sum-002",
      category: "Shirt",
      image: "/images/napapijriM2.jpg",
      price: 75,
      brand: "Napapijri",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet bibendum libero vitae pharetra. Duis nec finibus leo. Ut hendrerit, purus et finibus eleifend, lectus velit dignissim neque, sed ultricies arcu libero a quam. Quisque quis efficitur lacus, in sollicitudin nibh. Phasellus id blandit leo, bibendum blandit erat. Pellentesque id lacinia augue. Quisque luctus condimentum odio mollis molestie. Sed eu suscipit augue, sed bibendum velit. Vivamus rutrum nibh at eros consectetur, sed tristique arcu volutpat.",
    },
    {
      name: "Russell Athletic Majica BHABIE-S/S CREWNECK",
      slug: "russell-athletic-majica-bhabie-ss-crewneck",
      category: "Shirt",
      image: "/images/russellM1.jpg",
      price: 75,
      brand: "Russell",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet bibendum libero vitae pharetra. Duis nec finibus leo. Ut hendrerit, purus et finibus eleifend, lectus velit dignissim neque, sed ultricies arcu libero a quam. Quisque quis efficitur lacus, in sollicitudin nibh. Phasellus id blandit leo, bibendum blandit erat. Pellentesque id lacinia augue. Quisque luctus condimentum odio mollis molestie. Sed eu suscipit augue, sed bibendum velit. Vivamus rutrum nibh at eros consectetur, sed tristique arcu volutpat.",
    },
    {
      name: "Russell Athletic Majica DOLLA R-S/S CREWNECK",
      slug: "russell-athletic-majica-dolla-r-ss-crewneck",
      category: "Shirt",
      image: "/images/russellM2.jpg",
      price: 75,
      brand: "Russell",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet bibendum libero vitae pharetra. Duis nec finibus leo. Ut hendrerit, purus et finibus eleifend, lectus velit dignissim neque, sed ultricies arcu libero a quam. Quisque quis efficitur lacus, in sollicitudin nibh. Phasellus id blandit leo, bibendum blandit erat. Pellentesque id lacinia augue. Quisque luctus condimentum odio mollis molestie. Sed eu suscipit augue, sed bibendum velit. Vivamus rutrum nibh at eros consectetur, sed tristique arcu volutpat.",
    },
    {
      name: "NIKE Majica Sportswear",
      slug: "nike-majica-sportswear",
      category: "Shirt",
      image: "/images/nikeM1.jpg",
      price: 75,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet bibendum libero vitae pharetra. Duis nec finibus leo. Ut hendrerit, purus et finibus eleifend, lectus velit dignissim neque, sed ultricies arcu libero a quam. Quisque quis efficitur lacus, in sollicitudin nibh. Phasellus id blandit leo, bibendum blandit erat. Pellentesque id lacinia augue. Quisque luctus condimentum odio mollis molestie. Sed eu suscipit augue, sed bibendum velit. Vivamus rutrum nibh at eros consectetur, sed tristique arcu volutpat.",
    },
    {
      name: "NIKE Majica M NSW TEE ART IS SPORT GFX",
      slug: "nike-majica-m-nsw-tee-art-is-sport-gfx",
      category: "Shirt",
      image: "/images/nikeM2.jpg",
      price: 75,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet bibendum libero vitae pharetra. Duis nec finibus leo. Ut hendrerit, purus et finibus eleifend, lectus velit dignissim neque, sed ultricies arcu libero a quam. Quisque quis efficitur lacus, in sollicitudin nibh. Phasellus id blandit leo, bibendum blandit erat. Pellentesque id lacinia augue. Quisque luctus condimentum odio mollis molestie. Sed eu suscipit augue, sed bibendum velit. Vivamus rutrum nibh at eros consectetur, sed tristique arcu volutpat.",
    },
    {
      name: "Reebok Ridgerider 6 GORE-TEX",
      slug: "reebok-ridgerider-6-gore-tex",
      category: "Shoes",
      image: "/images/reebokP1.jpg",
      price: 75,
      brand: "Reebok",
      rating: 4.1,
      numReviews: 10,
      countInStock: 20,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet bibendum libero vitae pharetra. Duis nec finibus leo. Ut hendrerit, purus et finibus eleifend, lectus velit dignissim neque, sed ultricies arcu libero a quam. Quisque quis efficitur lacus, in sollicitudin nibh. Phasellus id blandit leo, bibendum blandit erat. Pellentesque id lacinia augue. Quisque luctus condimentum odio mollis molestie. Sed eu suscipit augue, sed bibendum velit. Vivamus rutrum nibh at eros consectetur, sed tristique arcu volutpat.",
    },
    {
      name: "Reebok Zig Kinetica",
      slug: "reebok-zig-kinetica",
      category: "Shoes",
      image: "/images/reebokP2.jpg",
      price: 75,
      brand: "Reebok",
      rating: 4.1,
      numReviews: 10,
      countInStock: 20,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet bibendum libero vitae pharetra. Duis nec finibus leo. Ut hendrerit, purus et finibus eleifend, lectus velit dignissim neque, sed ultricies arcu libero a quam. Quisque quis efficitur lacus, in sollicitudin nibh. Phasellus id blandit leo, bibendum blandit erat. Pellentesque id lacinia augue. Quisque luctus condimentum odio mollis molestie. Sed eu suscipit augue, sed bibendum velit. Vivamus rutrum nibh at eros consectetur, sed tristique arcu volutpat.",
    },
    {
      name: "Reebok WOVEN FZ",
      slug: "reebok-woven-fz",
      category: "Jacket",
      image: "/images/reebokJ1.jpg",
      price: 75,
      brand: "Reebok",
      rating: 4.1,
      numReviews: 10,
      countInStock: 20,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet bibendum libero vitae pharetra. Duis nec finibus leo. Ut hendrerit, purus et finibus eleifend, lectus velit dignissim neque, sed ultricies arcu libero a quam. Quisque quis efficitur lacus, in sollicitudin nibh. Phasellus id blandit leo, bibendum blandit erat. Pellentesque id lacinia augue. Quisque luctus condimentum odio mollis molestie. Sed eu suscipit augue, sed bibendum velit. Vivamus rutrum nibh at eros consectetur, sed tristique arcu volutpat.",
    },
    {
      name: "Reebok Statement",
      slug: "reebok-statement",
      category: "Shirt",
      image: "/images/reebokM1.jpg",
      price: 75,
      brand: "Reebok",
      rating: 4.1,
      numReviews: 10,
      countInStock: 20,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet bibendum libero vitae pharetra. Duis nec finibus leo. Ut hendrerit, purus et finibus eleifend, lectus velit dignissim neque, sed ultricies arcu libero a quam. Quisque quis efficitur lacus, in sollicitudin nibh. Phasellus id blandit leo, bibendum blandit erat. Pellentesque id lacinia augue. Quisque luctus condimentum odio mollis molestie. Sed eu suscipit augue, sed bibendum velit. Vivamus rutrum nibh at eros consectetur, sed tristique arcu volutpat.",
    },
    

  ],
};
export default data;
