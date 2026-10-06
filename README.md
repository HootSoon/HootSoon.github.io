# Hudson Reeves — Engineering Portfolio

Live site: https://hootsoon.github.io/

This is a plain HTML/CSS website hosted on GitHub Pages. No build tools or package installation are required.

## Where things go

| Location | Contents |
| --- | --- |
| `index.html` | Portfolio homepage |
| `projects/` | Full project pages: `avc.html`, `pcbs.html`, `roarm.html`, `rockets.html`, `telemetry.html`, `trick.html` |
| `assets/css/` | Page styles: `home.css` and one stylesheet per project |
| `assets/js/` | Clipboard buttons and old-page redirects |
| `assets/images/` | Images grouped into `profile/`, `logos/`, and project folders |
| `assets/documents/` | Downloadable documents, including the AVC notebook |
| `docs/` | Maintenance notes and the list of missing uploads |

The six root `project-*.html` files are small compatibility redirects. Edit the real pages in `projects/`; the redirects keep old bookmarks working, including section anchors.

## Edit an existing project

1. Open its page in `projects/` to change text, links, and image markup.
2. Open the matching file in `assets/css/` to change its styling.
3. Upload its images into `assets/images/<project>/`.
4. Use `../assets/images/<project>/<filename>` in a project page, or `assets/images/<project>/<filename>` on the homepage. Filenames are case-sensitive.

## Create folders on GitHub

GitHub creates folders from file paths. In **Add file → Create new file**, enter a path such as `projects/new-project.html`. In **Add file → Upload files**, you can also upload folders from your computer. Empty folders are not stored by Git.

To add a project, copy an existing page into `projects/new-project.html`, copy its CSS to `assets/css/new-project.css`, update the stylesheet link, upload the images, and add a project card to `index.html`.

## Preview locally

From the repository folder, run:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000/ and check the homepage and project pages. Commit changes to the branch used by GitHub Pages to publish them. The `.nojekyll` file tells Pages to serve this static site directly.

See [maintenance notes](docs/maintenance.md) for uploads and links that were already missing before the reorganization.
