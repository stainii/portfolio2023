# Stijn Hooft's portfolio (2023+)

## Local development
1. Install dependencies with `npm install`.

1. This contents of this site is not kept in a database, but  in Markdown files. On your local disk,
   1. create a folder for the Markdown files
   2. create another folder for any other resources (like images)

1. In `package.json`, change 
   2. `PORTFOLIO_RESOURCES_FOLDER='/Users/stijnhooft/app/portfolio/resources'` to the path of your local resources folder
   3. `PORTFOLIO_MARKDOWN_FOLDER='/Users/stijnhooft/app/portfolio/markdown'` to the path of your local markdown folder
1. Start a development server with `npm run dev`

## Markdown extensions
Markdown offers a nice set of basic options. Still, I needed to express more types of elements. These are the extensions that I've built in the parser:

### Video
You can use an image tag to also define a video:

```markdown
![Responsive Angular app, 2016](/resources/labs/my-old-portfolios/2016.mov)
```

The parser will look at the file extension, and render the correct html element.

### Image carousel
This has been implemented as a custom web component. Since you can use HTML in Markdown, you can define:

```html
<app-carousel>

![Early 2012](/resources/labs/nostalgia/2012_1.jpg)
![Early 2012](/resources/labs/nostalgia/2012_3.jpg)
![Early 2012](/resources/labs/nostalgia/2012_4.jpg)

</app-carousel>
```

### Code
Instead of using Marked's code rendering, I've replaced this with a renderer of Prism.

Important: always define the language after the backticks. If a language is not defined, or no parser for that language is loaded, the parser will assume an html-like language.

## Building for production
To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Docker
### Building
The Dockerfile instructions take care of building both the Sveltekit app and running this in a node container.

```bash
docker build . --tag stainii/portfolio:20241206
```

```bash
docker login
```

```bash
docker push stainii/portfolio:20241206
```

### Running
Mount these folders:
* resources => /app/build/static/resources
* markdown => /app/markdown

The site is hosted on port 3000. Open it up, or provide a reverse proxy that serves the contents of this container.

```shell
docker run -v /Users/stijnhooft/app/portfolio/resources:/app/build/static/resources -v /Users/stijnhooft/app/portfolio/markdown:/app/markdown -p 3000:3000 stainii/portfolio:20241206
```
