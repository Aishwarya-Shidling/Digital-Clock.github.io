let is24HourFormat = false;

    function toggleFormat() {
      is24HourFormat = !is24HourFormat;
      updateTime();
      document.querySelectorAll(".toggle-btn")[0].classList.toggle("active");
      document.getElementById("formatText").innerText = is24HourFormat ? "24-Hour Format" : "12-Hour Format";
    }

    function toggleTheme() {
      document.body.classList.toggle("dark-mode");
      const toggleButton = document.querySelectorAll(".toggle-btn")[1];
      toggleButton.classList.toggle("active");

      if (toggleButton.classList.contains("active")) {
        toggleButton.querySelector("span").innerText = "Dark Mode";
      } else {
        toggleButton.querySelector("span").innerText = "Light Mode";
      }
    }

    function updateTime() {
      let now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();

      if (!is24HourFormat) {
        let ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        document.getElementById("time").innerText = 
          `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)} ${ampm}`;
      } else {
        document.getElementById("time").innerText = 
          `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
      }

      document.getElementById("date").innerText = now.toDateString();
    }

    function formatNumber(num) {
      return num < 10 ? "0" + num : num;
    }

    setInterval(updateTime, 1000);
    updateTime();