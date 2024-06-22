## Documentation

Starting your own documentation site is easy with Hxql. Take control of your docs site once and for all.

### Recursive Directory Routing

Subgraph enables `recursive directory routing` which enables you to serve template files from parent folders.

#### How it works
This page demonstrates `recursive directory routing`. The file `/src/docs/index.html` exists and is served when requesting
any nested directory.

- `/docs` serves `/src/docs/index.html`

- `/docs/getting-started` also serves `/src/docs/index.html`

The file `/src/docs/index.html` uses htmx to grab the markdown file located in the requested path, injecting it into the parent
template.

Try it out!

[Try it out with Markdown Links](/docs/hello-world)

Or use the nav below!

