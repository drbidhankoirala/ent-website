document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
        .whatsapp-float {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #25D366;
  color: white;
  padding: 12px 18px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}
    });
});
