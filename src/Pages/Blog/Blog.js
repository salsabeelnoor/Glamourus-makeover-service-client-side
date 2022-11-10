import React from "react";
import PageTitle from "../Shared/Header/PageTitle/PageTitle";

const Blog = () => {
  return (
    <div className="mx-auto container my-10 px-5 min-h-[50vh] flex items-center flex-col">
      <PageTitle title={"Blog"}></PageTitle>
      <div className="my-3">
        <h2 className="text-base font-medium">
          <span className="font-semibold text-lg pr-2">Question 1:</span>What is
          the difference between SQL and NoSQL?
        </h2>
        <h2 className="text-base font-normal">
          SQL databases are vertically scalable, while NoSQL databases are
          horizontally scalable. SQL databases are table-based, while NoSQL
          databases are document, key-value, graph, or wide-column stores. SQL
          databases are better for multi-row transactions, while NoSQL is better
          for unstructured data like documents or JSON.
        </h2>
      </div>
      <div className="my-3">
        <h2 className="text-base font-medium">
          <span className="font-semibold text-lg pr-2">Question 2:</span>What is
          JWT, and how does it work?
        </h2>
        <h2 className="text-base font-normal">
          JSON Web Token (JWT) is an open standard (RFC 7519) for securely
          transmitting information between parties as JSON object. It is
          compact, readable and digitally signed using a private key/ or a
          public key pair by the Identity Provider(IdP).
          <br />
          The purpose of using JWT is not to hide data but to ensure the
          authenticity of the data. JWT is signed and encoded, not encrypted.
          JWT is a token based stateless authentication mechanism. Since it is a
          client-side based stateless session, server doesn't have to completely
          rely on a datastore(database) to save session information.
        </h2>
      </div>
      <div className="my-3">
        <h2 className="text-base font-medium">
          <span className="font-semibold text-lg pr-2">Question 3:</span>What is
          the difference between javascript and NodeJS?
        </h2>
        <h2 className="text-base font-normal">
          JavaScript is a simple programming language that can be used with any
          browser that has the JavaScript Engine installed. Node.js, on the
          other hand, is an interpreter or execution environment for the
          JavaScript programming language. It requires libraries that can be
          conveniently accessed from JavaScript programming to be more helpful.
        </h2>
      </div>
      <div className="my-3">
        <h2 className="text-base font-medium">
          <span className="font-semibold text-lg pr-2">Question 4:</span>How
          does NodeJS handle multiple requests at the same time?
        </h2>
        <h2 className="text-base font-normal">
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them
        </h2>
      </div>
    </div>
  );
};

export default Blog;
