"use strict";

(function () {
  function fallbackCopy(text) {
    var area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "absolute";
    area.style.left = "-9999px";
    document.body.appendChild(area);
    area.select();
    var copied = typeof document.execCommand === "function" && document.execCommand("copy");
    document.body.removeChild(area);
    if (!copied) throw new Error("copy_failed");
  }

  document.querySelectorAll("[data-share-block]").forEach(function (block) {
    var url = block.getAttribute("data-share-url") || window.location.href;
    var title = block.getAttribute("data-share-title") || document.title;
    var text = title + " " + url;
    var whatsapp = block.querySelector("[data-share-whatsapp]");
    var facebook = block.querySelector("[data-share-facebook]");
    var email = block.querySelector("[data-share-email]");
    var nativeBtn = block.querySelector("[data-share-native]");
    var copyBtn = block.querySelector("[data-share-copy]");
    var feedback = block.querySelector("[data-share-feedback]");

    if (whatsapp) whatsapp.href = "https://wa.me/?text=" + encodeURIComponent(text);
    if (facebook) facebook.href = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
    if (email) {
      email.href = "mailto:?subject=" + encodeURIComponent(title)
        + "&body=" + encodeURIComponent(title + "\n\n" + url);
    }

    if (nativeBtn && navigator.share) {
      nativeBtn.classList.remove("hidden");
      nativeBtn.addEventListener("click", function () {
        navigator.share({ title: title, text: title, url: url }).catch(function () {});
      });
    }

    if (copyBtn) {
      copyBtn.addEventListener("click", function () {
        var copyAction = navigator.clipboard && navigator.clipboard.writeText
          ? navigator.clipboard.writeText(url).catch(function () { fallbackCopy(url); })
          : Promise.resolve().then(function () { fallbackCopy(url); });
        copyAction.then(function () {
          if (feedback) {
            feedback.textContent = "Link copiato.";
            feedback.classList.remove("hidden");
          }
        }).catch(function () {
          if (feedback) {
            feedback.textContent = "Copia non riuscita. Puoi selezionare e copiare il link manualmente.";
            feedback.classList.remove("hidden");
          }
        });
      });
    }
  });
})();
