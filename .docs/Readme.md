               Hackthon Day 2 Technical Foundation
              Décor And Furniture Website 

Furniture and Decor E-commerce Platform Architecture
Our furniture and decor e-commerce platform is built using cutting-edge technologies, including:
1.	Next.js 14 for a fast and scalable frontend
2.	TypeScript for robust and maintainable code
3.	Sanity CMS for seamless content management
4.	Tailwind CSS for a customized and responsive design
5.	Node.js for a powerful and efficient backend

Key Components
a.	Website pages and components for smooth user experience
b.	Admin functionalities for efficient management
c.	Sanity CMS for seamless data management
d.	Secure payment gateway integration
e.	Robust search functionality for easy product discovery

System Architecture: 
•	Frontend (Next.js): 
 Next.js 14 with TypeScript for server-side rendering (SSR) and fast, dynamic routes.
 
 Routes: 
 Home, About, Products, Products / [slug]  (dynamic Route) For Product Details , Cart, Checkout.

•   Components:

•	Product Components: 

a.	ProductCard.tsx ,
b.	ProductDetails.tsx
 For a detailed view of the products. 

•	ReUseAble Components:
1.	UpNavabr ,
2.	DownNavbar ,
3.	HeroSection ,
4.	Navbarlinks , 
5.	BrandCard,
6.	BrandSection 
7.	FeatureCeramics ,
8.	Cart , 
9.	SignUp_Login ,
10.	CheckOut.
11.	Payment,
12.	Shipment
13.	UserDetail
14.	PaymentForm
All files have .tsx extension.
•	Sanity (Headless CMS)
Sanity Studio manages content and data, including:

Data Models

i.	Products: Product information, such as names, prices, images, categories, and stock.
ii.	Users: User data for managing login credentials and order history.
iii.	Orders: Order details, including items purchased, quantities, and shipping information.
iv.	Shipments: Tracks shipments using the Shippo API.
v.	Analytics: Data like total sales, revenue, and product analytics.

Data Management

i.	Schemas: Define data structures for Orders, Products, Users, Shipments, Inventory, etc.
ii.	GROQ Queries: Fetch data in real-time from Sanity's content lake.

•	API Management

Third-Party APIs

- Purpose: Integrate external services for enhanced functionality.

- APIs:

    - Stripe API: Handles secure payment processing.
    - Shippo API: Provides real-time shipment tracking and logistics management.


API Integration

- Utilizes Axios for API requests to ensure seamless communication with third-party services.


•	Payment Gateway

Stripe Integration

-	Purpose: Handle payments securely.
-	Features:
-	Utilizes Stripe Elements for secure payment detail collection.
-	Processes payments securely through Stripe API.

Shipment Tracking

Shippo API Integration

-	Purpose: Track orders and shipments.
    	Features:
-	Displays shipment tracking information on user's order history page.
-	Utilizes Shippo API for real-time tracking updates.

•	Workflow : 

•	User Workflow:

i.	Visit Home Page: 

1. User browses products.
 2. Products are fetched from Sanity via Third Party API  and displayed dynamically. 

ii.	Add to Cart: 

1.	User clicks "Add to Cart".
2. Go to Check Out Page



iii.	Checkout:
 
1. Once the user is ready to check out, a Checkout page will appear.
 2. The user provides necessary details (shipping info, payment info).

iv.	Payment Processing: 

1. Payment information is sent to Stripe using PaymentForm. 


v.	Shipment Tracking: 

1. Once payment is confirmed, a call is made to Shippo API to track the shipment.
 2. Shipment details and live tracking are displayed using Shipment.tsx.

vi.	User Portal: 

1.	After login, users can access their portal to view order and shipment history.
 (using UserDetail.tsx).
2.	If the email matches the record stored in Sanity, his/her data will be displayed.

 
Here’s the updated version of the conclusion without any mention of admin-related aspects:

Conclusion:

This detailed architecture ensures that the platform is well-structured for scalability and maintainability. The combination of reusable components, dynamic pages, and the Sanity CMS makes the platform flexible and easy to manage. The use of Third Party APIs facilitates smooth interaction between the frontend and backend, while the user workflows ensure a seamless and intuitive experience.

This user-centric design approach enhances the platform's adaptability, ensuring it remains robust and efficient for various applications.

