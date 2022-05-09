import React from 'react';

const Blogs = () => {
    return (
        <div className='bg-dark text-white'>
            <div className='container py-5'>
                <div className='mb-5'>
                    <h2 className='text-primary'>(1) What is the difference between javascript and nodejs?</h2>
                    <p className='lh-lg'>
                        <span className='fw-bold'>JavaScript:</span> JavaScript is a simple programming language that has the ability to run on any of the browser’s JavaScript engines. JavaScript remains one of the popular programming languages even after 23 years of its release. Used by web developers across the globe, JavaScript is recommended as the most widely deployed language. It has completely transformed web application development after Google released Chrome browser with V8 JavaScript engine.

                    </p>

                    <p className='lh-lg'>
                        <span className='fw-bold'> Nodejs:</span> Nodejs is a Javascript runtime environment, which is based on Google’s V8 JavaScript environment for executing Javascript codes outside the browsers. Node js app development leads to robust and faster web applications that also provide significantly better user experiences. While it is fast, Node js app development also offer great functionality and reliability over an extended period.
                    </p>
                </div>
                <div className='mb-5'>
                    <h2 className='text-primary'>(2) When should you use nodejs and when should you use mongodb?</h2>
                    <p className='lh-lg'>
                        <span className='fw-bold'>Nodejs:</span> Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.
                    </p>

                    <p className='lh-lg'>
                        <span className='fw-bold'> MongoDB:</span>
                        MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.
                    </p>
                    <p className='lh-lg'>
                        <span className='fw-bold'> MongoDB:</span>

                        MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database. MongoDB also has API libraries for other programming environments such as Python, Java, etc...
                    </p>
                </div>
                <div className='mb-5'>
                    <h2 className='text-primary'>(1) What is the Differences between sql and nosql databases.?</h2>
                    <p className='lh-lg'>
                        SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON. An SQL database—also known as a relational database—and named for the programming language it’s written in, Structured Query Language (SQL). NoSQL databases--also known as “non SQL” or “not only SQL,” store data in a format other than relational tables. If your data requirements aren’t clear at the outset or if you’re dealing with massive amounts of unstructured data,

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;