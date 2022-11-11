const insert = document.querySelector(".insert");
window.addEventListener("keydown", (e) => {
  insert.innerHTML = `<div class="key">
  ${e.key === " " ? e.code : e.key}
  <small>Event.key</small>
</div>
<div class="key">
  ${e.which}
  <small>Event.keycode</small>
</div>
<div class="key">
  ${e.code}
  <small>Event.code</small>
</div>`;
});
