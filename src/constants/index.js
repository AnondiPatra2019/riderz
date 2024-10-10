import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, customer3, shoe4, shoe5, shoe6, shoe7,shoe8,
    shoe9,
    shoe10,
    shoe11,
    shoe12,
    shoe13, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3} from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#about-us", label: "About Us" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
   
   
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },

   
];

export const statistics = [
    { value: '3k+', label: 'Brands' },
    { value: '100+', label: 'Outlets' },
    { value: '50k+', label: 'Buyers' },
];

export const products = [
    {
        imgURL: shoe4,
        rating:"4.5",
        name: "Nike Air Jordan-01",
        price: "Rs.2500",
    },
    {
        imgURL: shoe5,
        rating:"4.8",
        name: "Downshifter 13",
        price: "Rs.2100",
    },
    {
        imgURL: shoe6,
        rating:"4.9",
        name: "Nike Air Jordan-100",
        price: "Rs.2360",
    },
    {
        imgURL: shoe7,
        rating:"4.7",
        name: "Revolution 7 Shoes",
        price: "Rs.2200",

    },
    {
        imgURL: shoe8,
        rating:"4.6",
        name: "Air Max Shoes",
        price: "Rs.2490",

    },
    {
        imgURL: shoe9,
        rating:"4.4",
        name: "Nike Jordan-10",
        price: "Rs.3000",

    },
    {
        imgURL: shoe10,
        rating:"4.3",
        name: "Ultraboost 23 ",
        price: "Rs.2900",

    },
    {
        imgURL: shoe11,
        rating:"4.9",
        name: "Superfly 9 Club",
        price: "Rs.2800",

    },
    {
        imgURL: shoe12,
        rating:"4.2",
        name: "Canvas Lace-Up",
        price: "Rs.2700",

    },
    {
        imgURL: shoe13,
        rating:"4.8",
        name: "Superfly 9 Club",
        price: "Rs.2300",

    },
    
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you in your every step."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Amit Das',
        rating: 4.5,
        feedback: "The product went above and beyond my expectations. I'll certainly be coming back for more!"
    },
    {
        imgURL: customer2,
        customerName: 'Anondi Patra',
        rating: 4.9,
        feedback: " I'm delighted to see that the level of attention to detail and the quality of the product surpassed my expectations."
    },
    {
        imgURL: customer3,
        customerName: 'Roshan Singh',
        rating: 4.8,
        feedback: " The precision and craftsmanship of the product surpassed what I had anticipated. I wholeheartedly recommend it!"
    },
    
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "#products" },
            { name: "Air Max 1", link: "#products" },
            { name: "Air Jordan 1", link: "#products" },
            { name: "Air Force 2", link: "#products" },
           
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "#about-us" },
            { name: "FAQs", link: "#home" },
            { name: "How it works", link: "#home" },
            
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "anondipatra2019@gmail.com", link: "mailto:amitasismyname@gmail.com" },
            { name: "+918240321349", link: "tel:+918240321349" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo",href:"https://www.facebook.com/profile.php?id=100015635883181" },
    { src: twitter, alt: "twitter logo",href:"https://twitter.com/AmitDas07488062"  },
    { src: instagram, alt: "instagram logo",href:"https://www.instagram.com/amitdas001/"  }
];