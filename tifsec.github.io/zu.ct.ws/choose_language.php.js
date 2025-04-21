$(document).ready(function() {
    $('#language-selector').select2({
        templateResult: function(state) {
            if (!state.id) { return state.text; }

            var imgSrc = $(state.element).data('img');
            var imgAlt = $(state.element).attr('alt') || '';

            var $state = $('<span><img src="' + imgSrc + '" width="auto" height="17px" alt="' + imgAlt + '" class="img-flag" /> ' + state.text + '</span>');
            return $state;
        },
        templateSelection: function(state) {
            if (!state.id) { return state.text; }

            var imgSrc = $(state.element).data('img');
            var imgAlt = $(state.element).attr('alt') || '';

            var $state = $('<span><img src="' + imgSrc + '" width="auto" height="17px" alt="' + imgAlt + '" class="img-flag" /> ' + state.text + '</span>');
            return $state;
        }
    });
});
