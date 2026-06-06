# Edusuite | School Document Maker

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.12.

## Backend server

To start the local Spring Boot development server, ensure PostgreSQL is running with a database named `edusuite_reports`, user `postgres`, and password `hello123`. Navigate to the project root and run:

```bash
./mvnw spring-boot:run
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## API documentation

### Fetch report templates
* **Endpoint:** `GET /api/templates`
* **Description:** Fetches all report templates from the PostgreSQL database.
* **Response (200 OK):** Returns a JSON array of template objects.
* **Error (500):** Returns an error if the database connection fails.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
