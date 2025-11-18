jQuery(document).ready(function ($){
    $('#pb_badge_preset').on('change',function (){
        let selected = $(this).val();
        $('.badge-field').fadeOut(200, function () {
            $('.badge-' + selected).fadeIn(200);
        });
    })
    $('#pb_image_badge_upload_btn').on('click', function(e){
        e.preventDefault();
        let frame = wp.media({
            title: 'Select or Upload Image',
            multiple: false
        });
        frame.on('select', function(){
            let attachment = frame.state().get('selection').first().toJSON();
            $('#pb_badge_image').val(attachment.id);
            $('#pb_image_badge_preview').html('<img src="'+attachment.url+'" style="max-width:100px;" />');
        });
        frame.open();
    });
})