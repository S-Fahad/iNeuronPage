const jobDetail = document.getElementById("job-detail");

for (let i = 1; i <= 4; i++) {
  let card = document.createElement("div");
  card.className = "card";
  card.innerHTML = ` <h2>React JS Developer</h2>
  <span>iNeuron intellience</span>
  <div>
    <b>Location: Banglore</b>
    <b>Employment Type: Full-type</b>
  </div>
  <div><b>Experience: 0-3 Years</b> <b>job-Type: on-Site</b></div>
</div>
<button>View more details</button>`;

  jobDetail.appendChild(card);
}
