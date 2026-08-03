# Yahya Rahimi — Portfolio

Personal portfolio of **Yahya Rahimi**, Software Engineer.

Live site: [yahyarahimi.dev](https://yahyarahimi.dev/)

Built with React and deployed on Netlify.

## Sections

- **Home** — intro and skill areas (backend & distributed systems, full stack, cloud/DevOps)
- **Education** — degrees
- **Experience** — work history
- **Projects** — selected products and tools I've built
- **Resume** — embedded PDF resume
- **Contact** — how to reach me

## Development

```bash
npm install
npm start        # dev server on localhost:3000
npm run build    # production build -> build/
```

## Where content lives

| What                                     | File                                                                         |
| ---------------------------------------- | ---------------------------------------------------------------------------- |
| Page copy, skills, experience, education | [`src/portfolio.js`](src/portfolio.js)                                       |
| Project cards                            | [`src/shared/opensource/projects.json`](src/shared/opensource/projects.json) |
| Color theme (selected at the bottom)     | [`src/theme.js`](src/theme.js)                                               |
| Resume PDF                               | [`src/assets/docs/`](src/assets/docs/)                                       |

## Deployment

Pushes to `master` deploy automatically to Netlify. Build settings live in
[`netlify.toml`](netlify.toml).
