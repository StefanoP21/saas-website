// FAQ Accordion
document.addEventListener("DOMContentLoaded", () => {
  const faqContent = document.querySelector(".faq-content");

  faqContent.addEventListener("click", (e) => {
    const groupHeader = e.target.closest(".faq-group-header");

    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector(".faq-group-body");
    const icon = groupHeader.querySelector("i");

    // Toggle icon
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    // Toggle visibility of body
    groupBody.classList.toggle("open");

    // Close other groups
    const otherGroups = faqContent.querySelectorAll(".faq-group");
    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector(".faq-group-body");
        const otherGroupIcon = otherGroup.querySelector(".faq-group-header i");

        // Toggle icon
        otherGroupIcon.classList.remove("fa-minus");
        otherGroupIcon.classList.add("fa-plus");

        // Toggle visibility of body
        otherGroupBody.classList.remove("open");
      }
    });
  });
});

// Mobile Menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburgerBtn.addEventListener("click", () =>
    mobileMenu.classList.toggle("active")
  );
});
