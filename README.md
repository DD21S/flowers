# Flowers

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## REST API

This project has a REST API made with Django rest framework.

### Quickstart

First, install the requirements:

```
pip install -r requirements.txt
```

Go to the API directory:

```
cd api/
```

Now, make the migrations:

```
python manage.py migrate
```

Create a superuser:

```
python manage.py createsuperuser --email admin@example.com --username admin
```

And finally, run the project:

```
python manage.py runserver
```

Ready, now your REST API is running :)

---

It's recommended to use a virtual enviroment to run Python web applications.

Create and activate one with these commands:

```
python3 -m venv venv
source venv/bin/activate
```

### API Routes


| **METHOD**  | **ROUTE**                  | **FUNCTIONALITY**                  |
| ----------- | -------------------------- | ---------------------------------- |
| **GET**     | /flowers/                  | Get all flowers                    |
| **POST**    | /flowers/                  | Add a flower                       |
| **PUT**     | /flowers/{slug}            | Update a flower                    |
| **PATCH**   | /flowers/{slug}            | Update a flower                    |
| **DELETE**  | /flowers/{slug}            | Delete a flower                    |
| **POST**    | /api/token/                | Get authentication token (JWT)     |
| **POST**    | /api/token/refresh/        | Refresh authentication token (JWT) |
| **POST**    | /api/token/verify/         | Verify authentication token (JWT)  |