document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("importantForm");
  const stars = document.querySelectorAll(".star-rating i");
  const ratingInput = document.getElementById("rating");

  // Handle star rating
  stars.forEach((star) => {
    star.addEventListener("click", () => {
      const rating = star.getAttribute("data-rating");
      ratingInput.value = rating;

      // Update star colors
      stars.forEach((s) => {
        if (s.getAttribute("data-rating") <= rating) {
          s.classList.add("active");
        } else {
          s.classList.remove("active");
        }
      });
    });

    // Add hover effect
    star.addEventListener("mouseover", () => {
      const rating = star.getAttribute("data-rating");
      stars.forEach((s) => {
        if (s.getAttribute("data-rating") <= rating) {
          s.style.color = "#fbbc04";
        }
      });
    });

    star.addEventListener("mouseout", () => {
      const currentRating = ratingInput.value;
      stars.forEach((s) => {
        if (s.getAttribute("data-rating") <= currentRating) {
          s.style.color = "#fbbc04";
        } else {
          s.style.color = "#dadce0";
        }
      });
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Validate rating
    if (!ratingInput.value) {
      alert("Please select a rating");
      return;
    }

    // Show processing state
    const submitBtn = form.querySelector(".submit-btn");
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML =
      '<i class="fas fa-spinner fa-spin"></i> Submitting review...';
    submitBtn.disabled = true;

    // Simulate form processing
    setTimeout(() => {
      // Redirect to the Rick Astley video
      window.location.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0";
    }, 2000);
  });
});
