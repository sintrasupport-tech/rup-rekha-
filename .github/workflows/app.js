/**
 * Studio Rup Rekha - JavaScript Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Set Current Year in Footer
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Dynamic Studio Operating Status Indicator (9 AM - 7 PM Daily)
  function updateStudioStatus() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTimeDecimal = currentHour + currentMinute / 60;

    const openTime = 9.0;  // 9:00 AM
    const closeTime = 19.0; // 7:00 PM

    const statusBadge = document.getElementById('liveStatusBadge');
    const statusText = document.getElementById('liveStatusText');
    const hoursDetailText = document.getElementById('hoursDetailText');

    const isOpen = currentTimeDecimal >= openTime && currentTimeDecimal < closeTime;

    if (isOpen) {
      if (statusBadge) statusBadge.className = "flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30";
      if (statusText) statusText.textContent = "Open Now · Closes at 7:00 PM";
      if (hoursDetailText) hoursDetailText.textContent = "Open Today · Closes at 7:00 PM";
    } else {
      if (statusBadge) statusBadge.className = "flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30";
      if (statusText) statusText.textContent = "Closed · Opens Tomorrow at 9:00 AM";
      if (hoursDetailText) hoursDetailText.textContent = "Closed · Opens at 9:00 AM Daily";
    }
  }

  updateStudioStatus();
  setInterval(updateStudioStatus, 60000);

  // Before/After Slider
  const compareRange = document.getElementById('compareRange');
  const compareBeforeWrapper = document.getElementById('compareBeforeWrapper');
  const compareSliderHandle = document.getElementById('compareSliderHandle');

  if (compareRange && compareBeforeWrapper && compareSliderHandle) {
    compareRange.addEventListener('input', (e) => {
      const value = e.target.value;
      compareBeforeWrapper.style.width = `${value}%`;
      compareSliderHandle.style.left = `${value}%`;
    });
  }
});
