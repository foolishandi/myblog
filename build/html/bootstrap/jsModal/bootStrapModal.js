(function ($) {
  $.fn.bootstrapModal = function (options) {
    const defaults = {
      classList: [],
      title: "",
      content: "",
      footer: "",
    };
    const opts = $(this).extend(defaults, options);

    const ID = "bootStrapModal" + Math.random();
    const returnHtml = `
                        <div
                            class="modal fade ${opts.classLists.join(" ")}"
                            id="${ID}"
                            tabindex="-1"
                            role="dialog"
                            aria-labelledby="myModalLabel"
                            aria-hidden="true"
                        >
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button
                                            type="button"
                                            class="close"
                                            data-dismiss="modal"
                                            aria-hidden="true"
                                        >
                                        &times;
                                        </button>
                                        <h4 class="modal-title" id="myModalLabel">
                                            ${opts.title}
                                        </h4>
                                    </div>
                                    <div class="modal-body">
                                        ${opts.content}
                                    </div>
                                    <div class="modal-footer">
                                        ${opts.footer}
                                    </div>
                                </div>
                            </div>
                        </div>
                        `;
    $(body).append(returnHtml);
    $(`#${ID}`).modal(opts);
  };
})(jQuery);
