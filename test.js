
document.addEventListener("DOMContentLoaded", function () {
  // Your code here
  if (document.title === "test form 2 — Mama Casa") {
    const navUL = document.querySelector("#navBlock > nav > ul");
    const newLI = document.createElement("li");
    newLI.innerHTML = `
    <div class="sqs-block search-block sqs-block-search" data-block-type="33">
    <div class="sqs-block-content">
      <div class="sqs-search-ui-text-input sqs-search-ui-button-wrapper color-dark" data-source="block" data-preview="true" data-collection="">
        <div class="spinner-wrapper" style="display: none" hidden="hidden">
          <div class="yui3-widget sqs-spin dark default">
            <div class="sqs-spin-content"></div>
          </div>
        </div>
        <input type="search" class="search-input hover-effect" value="" placeholder="Search" aria-label="Search">
        <div class="yui3-widget sqs-widget sqs-search-preview">
          <div class="sqs-search-preview-content"></div>
        </div>
      </div>
    </div>
  </div>`;
  }
});