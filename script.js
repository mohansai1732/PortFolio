// ===== Scroll Reveal =====
const sections = document.querySelectorAll(".section-hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("section-show");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

sections.forEach(section => observer.observe(section));


// ===== Infinite Scroll (Skills) =====
const slide = document.querySelector(".slide");
if (slide) {
    slide.innerHTML += slide.innerHTML;
}


// ===== Infinite Scroll (Certificates) =====
const certTrack = document.querySelector(".cert-track");
if (certTrack) {
    certTrack.innerHTML += certTrack.innerHTML;
}

function updateUI(profileData, contestData) {

    const total = profileData?.totalSolved ?? 0;
    const easy = profileData?.easySolved ?? 0;
    const medium = profileData?.mediumSolved ?? 0;
    const hard = profileData?.hardSolved ?? 0;

    const rating = contestData?.contestRating != null
        ? Math.round(contestData.contestRating)
        : "N/A";

    // ✅ safe setter
    function setText(id, value) {
        const el = document.getElementById(id);
        if (el) el.innerText = value;
    }

    // ===== Safe Updates =====
    setText("total", total);
    setText("easy", easy);
    setText("medium", medium);
    setText("hard", hard);
    setText("rating", rating);

    // ===== Rank Label =====
    let rankLabel = "Beginner";

    if (rating >= 1400) rankLabel = "Intermediate";
    if (rating >= 1600) rankLabel = "Advanced";
    if (rating >= 1800) rankLabel = "Expert";
    if (rating >= 2000) rankLabel = "Top Coder";

    setText("rank-label", rankLabel);

    // ===== Progress Bars (safe) =====
    const sum = easy + medium + hard;

    const easyBar = document.getElementById("easy-bar");
    const mediumBar = document.getElementById("medium-bar");
    const hardBar = document.getElementById("hard-bar");

    if (sum > 0) {
        setTimeout(() => {
            if (easyBar) easyBar.style.width = (easy / sum) * 100 + "%";
            if (mediumBar) mediumBar.style.width = (medium / sum) * 100 + "%";
            if (hardBar) hardBar.style.width = (hard / sum) * 100 + "%";
        }, 300);
    }

    // ===== Rating Circle (optional safe) =====
    const circle = document.querySelector(".rating-circle");

    if (rating !== "N/A" && circle) {
        let percent = Math.min((rating / 2500) * 100, 100);

        circle.style.background = `conic-gradient(
            #22d3ee 0%,
            #6366f1 ${percent}%,
            #222 ${percent}%
        )`;
    }
}


// ===== Fetch LeetCode Data =====
function startRealtime(username) {

    async function fetchStats() {
        try {
            const [profileRes, contestRes] = await Promise.all([
                fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${username}`),
                fetch(`https://alfa-leetcode-api.onrender.com/${username}/contest`)
            ]);

            const profileData = await profileRes.json();
            const contestData = await contestRes.json();

            console.log("Profile:", profileData);
            console.log("Contest:", contestData);

            updateUI(profileData, contestData);

        } catch (err) {
            console.error("API Error:", err);

            // fallback UI
            document.getElementById("rating").innerText = "Error";
        }
    }

    fetchStats();

    // refresh every 5 minutes
    setInterval(fetchStats, 300000);
}


// ===== Start =====
startRealtime("mohansai1732");

async function fetchCodeChef() {
  try {
    const res = await fetch("https://twilight-limit-f43f.mohansai1732.workers.dev/");
    const data = await res.json();

    function setText(id, value) {
      const el = document.getElementById(id);
      if (el) el.innerText = value;
    }

    setText("cc-rating", data.currentRating ?? "N/A");
    setText("cc-stars", data.stars ?? "—");
    setText("cc-highest", data.highestRating ?? "—");

  } catch (err) {
    console.error("CodeChef Error:", err);
  }
}

fetchCodeChef();
