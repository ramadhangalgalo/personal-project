const form = document.getElementById("jobForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const application = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    position: document.getElementById("position").value,
    message: document.getElementById("message").value
  };

  try {
    const res = await fetch("http://localhost:3000/api/applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(application)
    });

    if (res.ok) {
      successMessage.style.display = "block";
      form.reset();
    } else {
      alert("❌ Failed to submit application");
    }
  } catch (error) {
    alert("⚠️ Error connecting to server");
  }
});
