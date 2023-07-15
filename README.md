# Simple Svelte App

## Description

A simple website based on Single Page Application. The website is responsive so it can be accessed on mobile and desktop.

## Features

This website has 3 pages that can be accessed:

- **Login Page**

  (displays a login form containing email and password)

  URL Path: `/`

- **User List Page**

  (displays a list of users)

  URL Path: `/users`

- **User Detail Page**

  (show user details)

  URL Path: `/users/{id}`

If you try to access anything other than the path listed above, it will display **404 Error Page**.

## Tech

Develop with:
[Svelte](https://svelte.dev/),
[Vite](https://vitejs.dev/),
[Typescript](https://www.typescriptlang.org/),
[SCSS](https://sass-lang.com/)

Public API: [Resreq.in](https://reqres.in/)

## Demo

The website can be accessed on [this link](https://fandi-simple-svelte.vercel.app/).

To login, enter the following email and password:

Email: `admin@mail.com`

Password: `admin1234`

## Run Locally

Clone the project

```bash
  git clone https://github.com/fandiarfa26/simple_svelte
```

Go to the project directory

```bash
  cd simple_svelte
```

Install dependencies

```bash
  npm install
```

Start the app

```bash
  npm run dev
```
