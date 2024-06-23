## Intro to hxql

Starting your own dynamic web application is easy with hxql. Learn the basics about routing below.

### Recursive Directory Routing

Subgraph enables `recursive directory routing` which enables you to serve template files from parent folders.

#### How it works
This page demonstrates `recursive directory routing`. The file `/src/intro/index.html` exists and is served when requesting
any nested directory.

- `/intro` serves `/src/intro/index.html`

- `/intro/getting-started` also serves `/src/intro/index.html`

The file `/src/intro/index.html` uses htmx to grab the markdown file located in the requested path, injecting it into the parent
template.

Try it out!

[Try it out with Markdown Links](/intro/hello-world)

Or use the nav below!

