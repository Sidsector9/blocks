<?php ob_start(); ?>
<div style="<?php echo esc_attr( $style_text ); ?>" class="wp-block-nuk-int-block-title">
	<div><?php echo wp_kses_post( $attributes['text'] ); ?></div>
</div>
<?php return ob_get_clean(); ?>
