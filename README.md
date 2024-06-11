 ![svgviewer-output](https://github.com/ElloTechnology/backend_takehome/assets/3518127/561bc8d4-bffc-4360-b9ea-61e876bcec93)


# My Take on the Project

👋 Hello,

Here is a demo of the project:
<video width="600" controls>
    <source src="https://github.com/Stewart-Okwaro/Ello_Engineering-Challenge-by-Stewart-Okwaro/raw/main/frontend/src/assets/Ello%20Frontend%20demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
Welcome to my React project! Below you will find instructions on how to set up and run the project using Yarn.
## Getting Started

Follow these steps to get the project up and running:

### 1. Clone the Repository

First, clone the repository to your local machine using the following command:

```sh
git clone https://github.com/your-username/your-repo.git

### Data
To run the project you can switch into the `src/frontend` folder and run

```bash
yarn install
```

Run the following command to start the development server:

```bash
yarn dev
```

### Data
To get access to data that you can switch into the `src/backend` folder and run

```bash
npm install
```

Then run the following command to start the server

```bash
npm start
```

This start a Graphql server at the url `http://localhost:4000/`, the server has a single query `books` that returns a list of books. 

```graphql
query Books {
  books {
    author
    coverPhotoURL
    readingLevel
    title
  }
}
```




