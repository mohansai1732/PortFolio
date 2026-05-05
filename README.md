# 🚀 Mohan Sai Veginati — Portfolio

A personal portfolio website showcasing my skills, projects, achievements, and certifications as a Full-Stack Developer and competitive programmer.

🌐 **Live Site:** [your-portfolio.pages.dev](https://your-portfolio.pages.dev) *(update after deploy)*

---

## ✨ Features

- **Responsive Design** — works on mobile, tablet, and desktop
- **Smooth Animations** — scroll reveal effects and hover transitions
- **Live Ratings** — real-time CodeChef & LeetCode stats fetched via API
- **Auto-scrolling Skills** — infinite scroll animation for skills and certificates
- **Timeline Achievements** — clean timeline layout for competitive programming achievements
- **Contact Section** — direct links to phone, email, LinkedIn, and GitHub

---

## 🛠️ Built With

- **HTML5** — semantic structure
- **CSS3** — animations, grid, flexbox, glassmorphism
- **JavaScript (Vanilla)** — DOM manipulation, Intersection Observer, fetch API
- **Cloudflare Workers** — serverless proxy for real-time CodeChef data (no CORS issues)
- **LeetCode API** — live contest rating and problem stats

---

## 📁 Project Structure

```
portfolio/
├── index.html        # Main HTML file
├── style.css         # All styles and animations
├── script.js         # JS logic (scroll reveal, API fetches, animations)
└── images/           # Profile photo and certificate images
    ├── me1.jpg
    ├── cert1.jpg
    └── ...
```

---

## ⚡ Live Data Integration

### CodeChef (via Cloudflare Worker)
Real-time rating is fetched using a custom Cloudflare Worker that scrapes the CodeChef profile page and returns JSON — bypassing CORS restrictions cleanly.

### LeetCode (via alfa-leetcode-api)
Contest rating and problem-solving stats are fetched using the public `alfa-leetcode-api` and updated every 5 minutes automatically.

---

## 🚀 Deployment

This site is deployed on **Cloudflare Pages** for:
- ⚡ Global CDN — fast loading worldwide
- 🔄 Auto deploy on every `git push`
- 🔒 Free SSL
- ♾️ Unlimited bandwidth

---

## 📬 Contact

| Platform | Link |
|---|---|
| 📧 Email | mohansai1732@gmail.com |
| 💼 LinkedIn | [linkedin.com/in/mohansai1732](https://www.linkedin.com/in/mohansai1732/) |
| 💻 GitHub | [github.com/mohansai1732](https://github.com/mohansai1732) |
| 🍽️ CodeChef | [cloud_bird_11](https://www.codechef.com/users/cloud_bird_11) |
| 💡 LeetCode | [mohansai1732](https://leetcode.com/mohansai1732) |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ If you like this portfolio, consider giving it a star!
